import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

import NoteState from './context/notes/NoteState';
import Alart from './components/Alart';
import Login from './components/Login';
import Signup from './components/Signup';

export default function App() {

  return (
    <>
      <NoteState>

      <Router>   
        <Navbar/>
        <Alart message="This is nice"/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/signup" element={<Signup/>}></Route>
          </Routes>
        </div>
      </Router>   

      </NoteState>
    </>
  )
}

