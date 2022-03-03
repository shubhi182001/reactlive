import React , {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "./Login.css"

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    

    const LoginUser = async(e) =>{
        e.preventDefault();
        
        const res = await fetch("https://registrationloginapi.herokuapp.com/api/users/login",{
            method : "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept": "application/json"
                
            }, 
            body:JSON.stringify({
                email,
                password
            })
        }); 

        
        const data = res.json();
        if(res.status === 400 || !data){
            window.alert("Invalid credentials")
            console.log("Invalid credentials");
        }
        else{
            window.alert("Already Registered")
            navigate("/home");
        }
    }


  return (
      <>
      <div className="container" style={{marginLeft: "19rem",marginTop:"11rem"}}>
      <div className="card" style={{width: "22rem"}}>
        {/* <img src="..." className="card-img-top" alt="..."/> */}
        <div className="card-body ">
            <h5 className="card-title mb-2 mt-3" style={{textAlign: "center", fontSize:"3rem"}}>Login</h5>
            <form method='POST'>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label mt-4" style={{fontSize:"1.2rem"}}><strong>Email address</strong></label>
                <input  name='email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputPassword" className="col-sm-4 col-form-label" style={{fontSize:"1.2rem"}}><strong>Password</strong></label>
                <div className="col-sm-12">
                <input value={password} onChange={(e) => setPassword(e.target.value) } name='password' type="password" className="form-control" id="inputPassword"/>
                </div>
            </div>
            <div className='mb-5'>
                    <Link to="/forgotPassword"  style = {{marginLeft: "11rem", textDecoration:"none", color:"gray"}} >Forgot Password?</Link>
            </div>
            {/* <a href="/" className="btn btn-lg btn-primary">Log In</a> */}
            <div className="d-grid gap-4">
            <Link to="/home"><button className="btn" style={{marginLeft:"1.5rem",width:"17rem"}} type="button" value="Log In" onClick={LoginUser}>Login</button></Link>
            <Link to="/signup"><button className="btn mb-3" style={{marginLeft:"1.5rem",width:"17rem"}} type="button" >Sign Up</button></Link>
            </div>
            </form>
        </div>
       </div>
       </div>       
      </>
  );
}
