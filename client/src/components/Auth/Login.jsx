<<<<<<< HEAD
import React , { useState } from 'react';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f21422ca5d297cbb71a2ba0f12e388f3bb2368b7
import React, { useState } from 'react';
>>>>>>> c030fddad9ca30c768ad3de291ae6bdca02e2134
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({onSub}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    onSub()
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post('/api/auth/login', { email });
      console.log(response.data); // Log the response from the backend
      localStorage.setItem('email', email); // Store email in localStorage
      navigate('#'); // Redirect to OTP page
    } catch (error) {
      console.error('Error during login:', error);
      setError('Something went wrong, please try again.');
    }
  };

<<<<<<< HEAD
    return (
      <div className="p-5 bg-[#c2c5ff] text-[#152250] flex flex-col items-center justify-center gap-5 rounded border-2 border-gray-800 shadow-lg w-[35%]">
        <form className="flex flex-col items-start gap-5" method='POST'
          onSubmit={(e) => {
            handleLogin(e)
          }}
        >
          <p className="font-bold text-lg">
            Welcome, <span className="font-mono text-gray-600 font-semibold text-base">Sign in to continue</span>
          </p>
          <button className="oauthButton">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>

          <button className="oauthButton flex items-center justify-center gap-2 w-full h-12 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-all">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            Continue with Github
          </button>

          <div className="flex items-center justify-center gap-2 w-full">
            <div className="w-24 h-1 bg-gray-600 rounded" />
            <span className="text-gray-800 font-mono font-semibold">OR</span>
            <div className="w-24 h-1 bg-[#152250] rounded" />
          </div>

          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full h-12 px-4 rounded-lg border-2 border-gray-800 bg-white shadow-md text-gray-800 font-semibold outline-none"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <button
            className=" oauthButton flex items-center justify-center gap-2 w-64 h-10 border-2 bg-white font-semibold">
            Continue
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 17 5-5-5-5" />
              <path d="m13 17 5-5-5-5" />
            </svg>
          </button>
          </form>
=======
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="p-8 bg-white flex flex-col items-center justify-center gap-6 rounded-lg shadow-xl w-96">
        <h1 className="text-2xl font-bold text-gray-800">Welcome Back!</h1>
        <p className="text-lg text-gray-600">Sign in to continue</p>

        <button className="oauthButton flex items-center justify-center gap-2 w-full h-12 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<<<<<<< HEAD
=======
=======
import React from 'react'
import { useState } from 'react'

const Login = ({onSub}) => {
  const [username, setUsername] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(username)
    onSub()
  }

  return (
    <div className="p-5 bg-[#c2c5ff] text-[#152250] flex flex-col items-center justify-center gap-5 rounded border-2 border-gray-800 shadow-lg w-[35%]">
      <form className="flex flex-col items-start gap-5" method='POST'
        onSubmit={(e)=>{
          submitHandler(e)
        }}
      >
        <p className="font-bold text-lg">
          Welcome, <span className="font-mono text-gray-600 font-semibold text-base">Sign in to continue</span>
        </p>
        <button className= "oauthButton">
          <svg className="w-6 h-6" viewBox="0 0 24 24">
>>>>>>> a8782af350f5d5d991a7a425bc7d4dc5d1dd5993
>>>>>>> f21422ca5d297cbb71a2ba0f12e388f3bb2368b7
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Continue with Google
        </button>

        <button className="oauthButton flex items-center justify-center gap-2 w-full h-12 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-all">
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          Continue with Github
        </button>
<<<<<<< HEAD

        <div className="flex items-center justify-center gap-2 w-full">
          <div className="w-24 h-1 bg-gray-600 rounded" />
=======
<<<<<<< HEAD

        <div className="flex items-center justify-center gap-2 w-full">
          <div className="w-24 h-1 bg-gray-600 rounded" />
=======
        <div className="flex items-center justify-center gap-1 w-full">
          <div className="w-24 h-1 bg-[#152250] rounded" />
>>>>>>> a8782af350f5d5d991a7a425bc7d4dc5d1dd5993
>>>>>>> f21422ca5d297cbb71a2ba0f12e388f3bb2368b7
          <span className="text-gray-800 font-mono font-semibold">OR</span>
          <div className="w-24 h-1 bg-[#152250] rounded" />
        </div>

        <input
          required
          onChange={(e)=>{
            setUsername(e.target.value)
          }}
          value={username}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f21422ca5d297cbb71a2ba0f12e388f3bb2368b7
          className="w-full h-12 px-4 rounded-lg border-2 border-gray-800 bg-white shadow-md text-gray-800 font-semibold outline-none"
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button
          type="submit"
          className="w-full h-12 flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
          onClick={handleLogin}
        >
<<<<<<< HEAD
=======
=======
          name="email"
          className="w-64 h-10 px-3 rounded border-2 border-[#152250] bg-white shadow-lg font-semibold outline-none"
        />
        <button
        className=" oauthButton flex items-center justify-center gap-2 w-64 h-10 border-2 bg-white font-semibold">
>>>>>>> a8782af350f5d5d991a7a425bc7d4dc5d1dd5993
>>>>>>> f21422ca5d297cbb71a2ba0f12e388f3bb2368b7
          Continue
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 17 5-5-5-5" />
            <path d="m13 17 5-5-5-5" />
          </svg>
        </button>
>>>>>>> c030fddad9ca30c768ad3de291ae6bdca02e2134
      </div>
  );
};
<<<<<<< HEAD
export default Login
=======
=======
<<<<<<< HEAD
  );
};
=======
  )
}
>>>>>>> a8782af350f5d5d991a7a425bc7d4dc5d1dd5993
>>>>>>> f21422ca5d297cbb71a2ba0f12e388f3bb2368b7

export default Login;
>>>>>>> c030fddad9ca30c768ad3de291ae6bdca02e2134
