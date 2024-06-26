import React from 'react';
import{BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Location from './Pages/Location';
import MENU from './Pages/MENU';
import About from './Pages/About';
import TopBar from './Pages/TopBar';
import Admin from './Pages/Admin';
import SocialMedia from './Pages/SocialMedia';
import './App.css';
import Landingpage from './Pages/landingpage';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <TopBar/>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/menu" element={<MENU />} />
          <Route path="/socialmedia" element={<SocialMedia />} />
          <Route path="/about" element={<About />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div> 
    </Router>
  );
}

export default App;
