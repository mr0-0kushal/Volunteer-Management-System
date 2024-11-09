// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import TaskList from './components/TaskList/TaskList';
import Home from './pages/HomePage'
import Login from './components/Auth/Login';
import EmployeeDash from './components/Dashboard/EmployeeDash'
import OTP from './components/Auth/OtpVerificationForm';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<TaskList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employee-dashboard" element={<EmployeeDash/>}/>
        <Route path="/otp" element={<OTP />} />
      </Routes>
    </Router>
  );
};

export default App;
