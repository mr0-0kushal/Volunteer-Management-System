// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import TaskList from './components/TaskList/TaskList';
import Home from './pages/HomePage'
import Login from './components/Auth/Login';
import EmployeeDash from './components/Dashboard/EmployeeDash'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<TaskList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/empdash" element={<EmployeeDash/>}/>
      </Routes>
    </Router>
  );
};

export default App;
