import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const OTP = () => {
  const [otp, setOtp] = useState(['', '', '', '']); // State for OTP input
  const [isLoading, setIsLoading] = useState(false); // To track loading state
  const [message, setMessage] = useState(''); // To show messages (success or error)
  const [isVerified, setIsVerified] = useState(false); // Track if OTP is successfully verified
  const [email, setEmail] = useState(''); // Track the email address
  const navigate = useNavigate(); // Initialize useNavigate

  // Get the email from localStorage (assuming email was stored there during login)
  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      // If no email found, redirect to login page or handle error
      navigate('/login');
    }
  }, [navigate]);

  // Handle OTP input change
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return; // Allow only numeric input

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  // Handle moving focus to the next input field after entering a value
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      // Focus on the previous input field when Backspace is pressed and the current field is empty
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    } else if (e.key !== 'Backspace' && index < 3 && otp[index] !== '') {
      // Focus on the next input field after entering a value
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  // Join the OTP array to form the full OTP string
  const fullOtp = otp.join('');

  // Handle OTP verification
  const handleVerify = async () => {
    if (fullOtp.length < 4) {
      setMessage('Please enter a 4-digit OTP.');
      return;
    }

    setIsLoading(true);
    try {
      // Send OTP for verification to the backend
      const response = await axios.post('/api/auth/verify', { email, otp: fullOtp });

      // Show success or error message
      setMessage(response.data.message);

      if (response.data.message === 'OTP verified successfully') {
        setIsVerified(true); // OTP successfully verified
        // Redirect user to the employee dashboard
        setTimeout(() => {
          navigate('/employee-dashboard'); // Adjust the URL path as needed
        }, 1500); // Delay redirection for user to see the success message
      }
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'Error verifying OTP.');
    } finally {
      setIsLoading(false);
    }
  };

  // Clear OTP and message after successful verification (Optional: reset state)
  useEffect(() => {
    if (isVerified) {
      setOtp(['', '', '', '']); // Clear OTP input fields after success
      setMessage('');
    }
  }, [isVerified]);

  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 sm:w-96 md:w-1/3 lg:w-1/4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">OTP Verification</h2>
        
        {/* OTP Input Fields */}
        <div className="grid grid-cols-4 gap-2 mb-6 justify-center">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              className="w-16 h-16 text-center text-xl font-semibold rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              autoFocus={index === 0 && !isVerified} // Autofocus the first input when not verified
            />
          ))}
        </div>
        
        {/* Display Email */}
        <div className="text-sm text-center text-gray-500 mb-4">
          OTP sent to your email: <strong>{email}</strong>
        </div>

        {/* Verify Button */}
        <button
          type="button"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none disabled:bg-gray-300"
          onClick={handleVerify}
          disabled={isLoading}
        >
          {isLoading ? 'Verifying...' : 'Verify OTP'}
        </button>

        {/* Message */}
        {message && (
          <p className={`mt-4 text-center text-sm ${isVerified ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default OTP;
