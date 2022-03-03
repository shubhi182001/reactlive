import React, { useState } from 'react';
import "./Otppage.css"

import { Link, useNavigate } from 'react-router-dom';
import { array } from 'yup';
export default function Otppage() {

    // const email = myemail;
    // const [otp1, setOtp1] = useState('');
    // const [otp2, setOtp2] = useState('');
    // const [otp3, setOtp3] = useState('');
    // const [otp4, setOtp4] = useState('');
    // const [otp5, setOtp5] = useState('');
    // const [otp6, setOtp6] = useState('');

    const [otp,setOtp]= useState(new Array(6).fill(""))
    
    const handleOnchange =(element,index) =>{
        if(isNaN(element.value)) return false;
        setOtp([...otp.map((d,idx)=>(idx === index) ? element.value : d)]);

        if(element.nextSibling){
            element.nextSibling.focus();
        }
    };

    let navigate = useNavigate();
    const getRegisterInfo = async() => {
    
        try{
            
            let url= "https://registrationloginapi.herokuapp.com/api/users/register"
            let res= await fetch(url);
            let data = await res.json();
            console.log((data).length);
            var a = (data).length;
            console.log(a);
            const{otpuser} = data[a-1];
            console.log(data[a-1]);
            
            const myotp = otpuser;
            console.log(myotp);
            if(myotp=== otp.join("")){
                window.alert("otp verified")
                navigate("/home");
            }
            else{
                window.alert("invalid otp")
            }
    
        }catch(error){
            console.log(error);
        }
    
        
    } 

  return (

      <>
        <div className="card" style={{width:"25rem" ,marginLeft:"18rem", marginTop:"10rem"}}>
        <div className="card-body" >
            <strong style={{fontSize:"2rem",marginLeft:"3.5rem"}}>OTP Verification</strong>
            <p style={{marginTop:"2rem", fontSize:"1.3rem" ,marginLeft:"5rem"}}>Enter the OTP sent to</p>
            <p style={{marginTop:"-1rem", fontSize:"1.3rem", marginLeft:"5rem"}}>your registered email :</p>

        <div className='otp mb-4' style={{marginLeft:"3.5rem", marginTop:"3rem"}}>    
        {
              otp.map((data,index) =>{
                  return(
                    <input className='inputnum mx-1' style={{width:"35px", height:"40px"}}
                    type="text"
                    name="otp"
                    maxLength="1"
                    key={index}   
                    value={data}
                    onChange={e=>handleOnchange(e.target,index)}
                    onFocus={e=> e.target.select()}
                    />
                  );
              })}

            {/* <input value={otp1} onChange={handleOnchange} className='otp-field' type="text" name='otp1' maxLength={"1"} />
            <input value={otp2} onChange={handleOnchange} className='otp-field' type="text" name='otp2' maxLength={"1"} />
            <input value={otp3} onChange={handleOnchange} className='otp-field' type="text" name='otp3' maxLength={"1"} />
            <input value={otp4} onChange={handleOnchange} className='otp-field' type="text" name='otp4' maxLength={"1"} />
            <input value={otp5} onChange={handleOnchange} className='otp-field' type="text" name='otp5' maxLength={"1"} />
            <input value={otp6} onChange={handleOnchange} className='otp-field' type="text" name='otp6' maxLength={"1"} /> */}
        </div>
        <div>
            <a href="/" style={{marginLeft:"12rem",textDecoration:"none", color:"black"}}>Resend OTP?</a>
        </div>
        <div style={{marginTop:"3rem", marginBottom:"5rem"}}>
            <button onClick={getRegisterInfo} type='submit' className='btn btn-lg' style={{marginLeft:"6rem"}}>Verify & Proceed</button>
        </div>
        </div>
        </div>
      </>
  );
}
