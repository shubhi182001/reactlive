import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <img className="mx-2" src="../Artboard3.png"  height={"63rem"} alt="error" />
              
            </ul>
            
            <Link to="/" style={{textDecoration:"none", color:"white", fontSize:"20px"}} className=" mx-4">Home</Link>
            <Link to="/" style={{textDecoration:"none", color:"white",fontSize:"20px"}} className=" mx-4">Dashboard</Link>
            <Link to="/" style={{textDecoration:"none", color:"white",fontSize:"20px"}} className=" mx-4">Logout</Link>
            
          </div>
        </div>
      </nav>
    </>
  );
}
