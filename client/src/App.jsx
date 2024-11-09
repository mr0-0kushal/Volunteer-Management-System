// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import TaskList from './components/TaskList/TaskList';
import Home from './pages/HomePage'
import Auth from './components/Auth/Auth';
import EmployeeDash from './components/Dashboard/EmployeeDash'



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<TaskList />} />
        <Route path="/employee-dashboard" element={<EmployeeDash/>}/>
        <Route path="/login" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;
