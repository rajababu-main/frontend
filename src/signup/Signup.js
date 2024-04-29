import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import './Signup.css';
import { useHistory } from 'react-router-dom';


const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  
  useEffect(()=>{
    const auth= localStorage.getItem('user');
    if(auth){
     history.push('/');
    }
  })

  const collectData = async () => {
    
    let result = await fetch("http://localhost:6006/users", {
      method: "post",
      body:JSON.stringify({
        mobile,
        password,
        email,
        fullName,
      }),
      headers: { // Change 'header' to 'headers'
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user",JSON.stringify(result));
    window.location.reload();
    if(result){
        //navigate('/dashboard')
    }
  };

  return (
    <>
      <div className="container" style={{padding:'50px'}} >
        <div >
          
          <div className="row" >
            <div className="col-md-3 "></div>
            <div className="col-md-6 sad">
            <div className="registration">Register</div>
              <input
                className="input-box"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                name="fullname"
                placeholder="enter fullName"
              />
              <div className="topgap20">
                <input
                  className="input-box"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  placeholder="enter email"
                />
              </div>
              <div className="topgap20">
                <input
                  className="input-box"
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  name="mobile"
                  placeholder="enter mobile"
                />
              </div>

              <div className="topgap20">
                <input
                  className="input-box"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="pass"
                  placeholder="enter password"
                />
              </div>
              <div className="topgap20">
                <button type="button" className="btn123" onClick={collectData}>
                  Sign Up
                </button>
                <Link to="/login" style={{float:'right',color: '#0f3460', fontFamily:'bold', fontSize:'16px'}}>Please login here</Link>
              </div>
            </div>
            <div className="col-md-3 "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;