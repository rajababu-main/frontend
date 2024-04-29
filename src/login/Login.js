import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link} from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Login = () =>{
    const [mobile, setMobile] = React.useState("");
    const [password, setPassword] = React.useState("");
    //const navigate = useNavigate();
    const history = useHistory();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
          history.push("/")
        }
    },[])

    const loginhandle = async() =>{
        console.log(mobile,password);
        let result = await fetch("http://localhost:6006/user/login",{
            method:'post',
            body: JSON.stringify({mobile, password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result));
        history.push("/")
        window.location.reload();
        // if(result.name){
        //     localStorage.setItem("user", JSON.stringify(result));
        //     //navigate("/dashboard")
        // }else{
        //     alert("please enter valid user");
        // }
    }
    return(
        <>
        <div className="container" style={{padding:'50px'}}>
          <div>
            
            <div className="row pt-5">
              <div className="col-md-3 "></div>
              <div className="col-md-6 sad">
              <div className="registration">Login</div>
                
                  <input
                    className="input-box"
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    name="mobile"
                    placeholder="mobile"
                  />
                
  
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
                  <button type="button" style={{cursor:'pointer'}} className="btn123" onClick={loginhandle}>
                    Login
                  </button>
  
                  <Link to="/signup" style={{float:'right',color: '#0f3460', fontFamily:'bold', fontSize:'16px'}}>create account</Link>
                </div>
              </div>
              <div className="col-md-3 "></div>
            </div>
          </div>
        </div>
      </>
    )

}
export default Login;