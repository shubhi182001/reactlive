import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import "./Homepage.css";



export default function Homepage() {

//   const disappear = () =>{
//       var loader = document.getElementById("preloader")
//       loader.style.display="none";
//   }


  return (
    <>
    
    {/* <div onLoad={disappear} id='preloader'>
    <div style={{ background:"rgba(0, 0, 0, 0.5)" ,height:"5rem", color:"white", width:"94.5rem"}}> <Navbar/>  </div>
    <div className="card" style={{width:"60rem",marginTop:"0.2rem", marginLeft:"18rem", height:"89vh"}}>
    <div className="cardbody">
      <div id="loader"></div>
    </div>
    </div>
    </div> */}

    
      

    


    <div style={{ background:"rgba(0, 0, 0, 0.5)" ,height:"5rem", color:"white", width:"94.5rem"}}> <Navbar/>  </div>
    <div className="card" style={{width:"60rem",marginTop:"0.2rem", marginLeft:"18rem", height:"89vh"}}>
    <div className="card-body">
      <h1 style={{textAlign:"center",marginTop:"8rem", fontSize:"4rem"}}>Welcome TO </h1>
      <h1 style={{textAlign:"center", fontSize:"4rem"}}>Home Page</h1>
      <div className="container logotext" style={{ marginTop:"5rem" ,marginLeft:"21rem" }}>
      <img src='../Artboard1.jpg' alt="" width={50}/>
      <pre style={{marginLeft:"26rem", marginTop:"-4rem" ,fontSize:"2rem"}}>Team CSI</pre>
      </div>
    </div>
  </div>
    </>
  )
}
