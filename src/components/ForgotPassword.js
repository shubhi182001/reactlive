import React, {useState} from 'react';
import { Link,  useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const getPassword = async(e) =>{
    e.preventDefault();
    const res = await fetch("https://registrationloginapi.herokuapp.com/api/users/forgot-password",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json",
            "Accept": "application/json"
        },
        body:JSON.stringify({
            email
        })
    })
    const data = res.json();
    if(res.status === 400 || !data){
      window.alert("No such email address exsists. Enter valid email.")
      console.log("Invalid credentials");
  }
  else{
      navigate("/");
  }
}

  return (
    <>
    <div className="card" style={{width:"25rem" ,marginLeft:"18rem", marginTop:"10rem"}}>
        <div className="card-body">
            <strong style={{fontSize:"2.2rem",marginLeft:"3.2rem"}}>Forgot Password</strong>
            <p style={{marginTop:"2rem", fontSize:"1.3rem" ,marginLeft:"4rem"}}>Your password has </p>
            <p style={{marginTop:"-1rem", fontSize:"1.3rem" ,marginLeft:"4rem"}}>been sent to your </p>
            <p style={{marginTop:"-1rem", fontSize:"1.3rem" ,marginLeft:"4rem"}}>registered Email Id: </p>
            <p style={{marginTop:"-1rem", fontSize:"1.3rem", marginLeft:"3.7rem"}}></p>
        <div className='mb-4' style={{marginLeft:"3rem", marginTop:"3rem"}}>

                <div className="col-sm-10" style={{border:"none"}}>
                <label htmlFor="exampleFormControlInput1" className="form-label mt-4" style={{fontSize:"1.2rem"}}><strong>Email address</strong></label>
                <input  name='email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
        </div>
        
        <div style={{marginTop:"4rem", marginBottom:"5rem"}}>
            <Link to="/" ><button onClick={getPassword} className='btn btn-lg' style={{marginLeft:"3.6rem", width:"15rem" }}>Back to Login Page</button></Link>
        </div>
        </div>
        </div>
    </>
  );
}
