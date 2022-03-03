import React, {useState } from 'react';
import "./Signup.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
    const navigate = useNavigate();
    const gender = ["Male" ,"Female"];

    const[user, setUser] = useState({
        name:"", email:"",phone:"",rollno:"",password:"",address:"" ,gen:"", year:"", branch:""
    });
    

    let name, value;
    const handleInputs = (e) =>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }
    const PostData = async(e) =>{
        e.preventDefault();
        const{name, email,phone,rollno,password,address,gen,year,branch} = user;

        const res = await fetch("https://registrationloginapi.herokuapp.com/api/users/register", {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name, email,phone,rollno,password,address,gen,year,branch
            })
        });

        const resp = await fetch("https://registrationloginapi.herokuapp.com/api/users/otp-send",{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                 email
            })
        })
        
        const data = await res.json();
        
        if(res.status == 400 || ! res ){
            window.alert("Invalid data")
            console.log("Invalid data")
        }
        else{
            window.alert("Registeration successfull. Otp has been sent to you on your registered email address.")
            console.log("Registeration successfull")
            navigate("/Otp");
        }
        
    }




  return (
    <>
    <form   method='POST' className='container' style={{marginLeft: "10rem"}}>
        <div className="card cards" style={{width: "45rem", margin:"8rem 0rem"}}>
        <div className="card-body">
            <div className='header mb-4'  ><h5  className="card-title " style={{fontSize:"40px"}} >Sign Up</h5></div>
            <div className="container">
            <div className="left-col">
            <div className="input-group">
                <input type="text" value={user.name} onChange={handleInputs} name='name' className="form-control mb-3" placeholder="UserName" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                {/* <span className="input-group-text" id="basic-addon2">@example.com</span> */}
            </div>
            <div className="input-group">
                <input type="text" maxLength={"13"} name='rollno' value={user.rollno} onChange={handleInputs} className="form-control mb-3" placeholder="UserId" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                {/* <span className="input-group-text" id="basic-addon2">@example.com</span> */}
            </div>
            <div className="input-group">
                <label htmlFor="inputPassword" className=" col-form-label"></label>
                <input type="password" name='password' value={user.password} onChange={handleInputs} placeholder='Password' className="form-control mb-3" id="inputPassword"/>
            </div>
            <div className="input-group form-control mb-3">
                <select name='year' value={user.year} onChange={handleInputs}>
                    <option value="year" >Year</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div className="input-group form-control ">
                <select name='branch' value={user.branch} onChange={handleInputs}  >
                    <option value="branch">Branch</option>
                    <option value="CSE">CSE</option>
                    <option value="CS IT">CS IT</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                    <option value="ME">ME</option>
                </select>
            </div>
            </div>
            
            <div className="right-col ">
            <div className='input-group mb-3 '>
                <p className='mx-2'>Gender:</p>
                {gender.map(result =>(
                    <>
                    <input className='mx-2 mt-2' type="radio" value={result} name="gen" onChange={handleInputs}/>
                    <p>{result}</p>
                    </>
                ) )}
                </div>
            
            <div className="input-group mb-3">
                <input type="text" name='address' value={user.address} onChange={handleInputs} className="form-control" placeholder="Address" aria-label="Address" aria-describedby="basic-addon2"/>
                {/* <span className="input-group-text" id="basic-addon2">@example.com</span> */}
            </div>
            <div className="input-group mb-3">
                <input  name='phone' value={user.phone} onChange={handleInputs} className="form-control" maxLength={"10"} placeholder="Phone Number" aria-label="Phone Number" aria-describedby="basic-addon2"/>
                {/* <span className="input-group-text" id="basic-addon2">@example.com</span> */}
            </div>
            <div className="input-group mb-3">
                <input type="email" name='email' value={user.email} onChange={handleInputs} className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2"/>
                {/* <span className="input-group-text" id="basic-addon2">@example.com</span> */}
            </div>
            </div>
            </div>
            <Link to="/otp" type='submit' name="signup" value="register" className="btn btn-primary" style={{width:"14rem" , marginLeft:"16rem", marginTop:"2rem" }}  onClick={PostData} >Sign Up</Link>
        </div>
        </div>
        
    </form>
    </>
  );
}
