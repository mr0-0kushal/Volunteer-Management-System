// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import TaskList from './components/TaskList/TaskList';
import Home from './pages/HomePage'
import Auth from './components/Auth/Auth';
import EmployeeDash from './components/Dashboard/EmployeeDash'
import OTP from './components/Auth/OtpVerificationForm';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<TaskList />} />
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
        <Route path="/employee-dashboard" element={<EmployeeDash/>}/>
        <Route path="/otp" element={<OTP />} />
=======
        <Route path="/login" element={<Auth />} />
        <Route path="/empdash" element={<EmployeeDash/>}/>
>>>>>>> a8782af350f5d5d991a7a425bc7d4dc5d1dd5993
      </Routes>
    </Router>
  );
};

export default App;
