import React from 'react';
import './App.css';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Sidebar from './pages/Sidebar';
import Content from './pages/Content';

import Footer from './pages/Footer';
 
function App() {
  return (
    <div>
      
      <Navbar />
      <div className="row">
        
        <Sidebar />
        <Content />
      </div>
      
    </div>
  );
}
 
export default App;