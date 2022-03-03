import './App.css';
import React from 'react';
import {Route,BrowserRouter as Router, Routes, Link} from "react-router-dom";
import Recaptcha from 'react-recaptcha';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Homepage from './components/Homepage';
import Otppage from './components/Otppage';
import ForgotPassword from './components/ForgotPassword';
import Error from './components/Error';
// import DemoOtp from './components/DemoOtp'



function App() {
  return (
    
    <>
    <Routes>
      <Route exact path='/' element={<Login/>} />
      <Route exact path='/reactlive' element={<Login/>} />
      <Route exact path='/home' element={<Homepage/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/otp' element={<Otppage/>}/>
      {/* <Route exact path='/otp' element={<DemoOtp/>}/> */}
      <Route exact path='/forgotpassword' element= {<ForgotPassword/>}/>
      <Route exact path='/navbar' element= {<Navbar/>}/>
      
      <Route path="*" element={<Login/>}/>
    </Routes>
    
    </>
    
  );
}

export default App;
