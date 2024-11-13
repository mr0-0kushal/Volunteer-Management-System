import userModel from '../models/user.model.js';  // Mongoose User model
import transporter from '../nodemailer_config.js';  // Email transporter configuration

// Generate a random OTP (4 digits)
const generateOtp = () => {
  return Math.floor(1000 + Math.random() * 9000);  // Generates a 4-digit OTP
};

// Send OTP email
const sendOtpEmail = (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,  // Sender's email (from .env)
    to: email,  // Receiver's email
    subject: 'Your OTP for Login',
    text: `Your OTP is: ${otp}. It is valid for 5 minutes.`,
    html: `<p>Your OTP is: <strong>${otp}</strong>.</p><p>It is valid for 5 minutes.</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending OTP email:', error);
    } else {
      console.log('OTP sent successfully:', info.response);
    }
  });
};

// Login function (sends OTP)
export const login = async (req, res) => {
  const { email } = req.body;

  try {
    // Validate the email format (Optional step)
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    const otp = generateOtp();  // Generate OTP
    const otpExpires = Date.now() + 5 * 60 * 1000;  // OTP expires in 5 minutes

    // Check if the user already exists
    let user = await userModel.findOne({ email });

    if (!user) {
      // If the user does not exist, create a new user
      user = new User({ email, otp, otpExpires });
    } else {
      // Update OTP and expiration if the user already exists
      user.otp = otp;
      user.otpExpires = otpExpires;
    }

    // Save user with OTP and expiration
    await user.save();

    // Send OTP email
    sendOtpEmail(email, otp);

    // Respond with success message
    return res.status(200).json({ message: 'OTP sent to your email' });

  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};

// Verify OTP function
export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    // Log the email and OTP received (for debugging)
    console.log("Received email:", email);
    console.log("Received OTP:", otp);

    // Ensure OTP and email are provided
    if (!email || !otp) {
      return res.status(400).json({ message: 'Email and OTP are required' });
    }

    // Find user by email
    const user = await userModel.findOne({ email });

    if (!user) {
      console.log('User not found with email:', email); // Debug log
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if OTP has expired
    if (Date.now() > user.otpExpires) {
      return res.status(400).json({ message: 'OTP has expired' });
    }

    // Validate OTP
    if (user.otp.toString() === otp.toString()) {
      // OTP is valid; clear OTP and expiration from the user document
      user.otp = undefined;
      user.otpExpires = undefined;
      await user.save();

      // Respond with a success message
      return res.status(200).json({ message: 'OTP verified successfully' });
    } else {
      return res.status(400).json({ message: 'Invalid OTP' });
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return res.status(500).json({ message: 'Error verifying OTP', error: error.message });
  }
};
