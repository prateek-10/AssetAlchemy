import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './Home/Home.js';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact Component={Home}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
