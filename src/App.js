//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Project from './Project';
import Epics from './Epics'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Project />} />
        <Route exact path="epics" element={<Epics />} />
      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
