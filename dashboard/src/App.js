import React from 'react';
import{BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Location from './Pages/Location';
import MENU from './Pages/MENU';
import About from './Pages/About';
import TopBar from './Pages/TopBar';
import Admin from './Pages/Admin';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <TopBar/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/menu" element={<MENU />} />
          <Route path="/about" element={<About />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element ={<MENU />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
