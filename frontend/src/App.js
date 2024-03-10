import logo from './logo.svg';
import './App.css';
import Counsellor from './components/Counsellor';
import Contact from'./components/Contact';
import Signup from './components/Signup';
import Visitor from './components/Visitor';
import Appointment from './components/Appointment';
import Header from './components/Header';
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home  from './components/Home';
import Signin from './components/Signin';
import Hello from './components/Hello';
import { Box } from '@mui/material';

function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/Signup' element={<Signup/>} exact/>
        <Route path='/SignIn' element={<Signin/>} exact/>
        <Route path='/counsellor' element={<Counsellor/>} exact/>
        <Route path='/visitor' element={<Visitor/>} exact/>
        <Route path='/appointment' element={<Appointment/>} exact/>
        <Route path='/contact' element={<Contact/>} exact/>
      </Routes>

    </main>
  </React.Fragment>
}

export default App;
