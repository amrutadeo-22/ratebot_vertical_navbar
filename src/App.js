import React, { useState } from 'react';
import './App.css';
import Hamburg from './Hamburg/Hamburg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Dashboard = () => {
  return <h1>Dashboard</h1>;
};

const Admin = () => {
  return <h1>Admin</h1>;
};

function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <Hamburg
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />
        <div className={`container ${inactive ? 'inactive' : ''}`}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
