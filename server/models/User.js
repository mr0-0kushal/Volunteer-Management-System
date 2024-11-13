import mongoose from 'mongoose';

// User schema with email, OTP, and OTP expiration
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,  // Ensure no two users can have the same email
  },
  otp: {
    type: Number,
    required: false,  // OTP will be generated and saved temporarily
  },
  otpExpires: {
    type: Date,
    required: false,  // Optional field for OTP expiration time
  },
},
{
  collection:"users",
});

const userModel = mongoose.model('User', userSchema);

export default userModel;
