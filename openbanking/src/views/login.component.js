import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginNavbar from './LoginNavbar';

export default function Login()
{
  
  const [token, setToken] = useState('')

  let navigate=useNavigate();
  const [loginName, setLoginName] = useState('');


  
  const handleSubmit = async (e) => {
    console.log(loginName)
    axios.post('http://localhost:5237/GetToken',null, {params:{loginName:loginName}})
    .then((res)=>{
      //console.log(res.data.token.accessToken);
      localStorage.setItem("accessToken", res.data.token.accessToken);
      setToken(token)
    })
    e.preventDefault();
    navigate("/GetBalance");
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken)
  };
  
    return (
      <div className='outerbox'>
        <LoginNavbar/>
          <div className='innerbox'>
          <h3 style={{display:"flex", "alignItems":'center', "justifyContent":'center'}}>Login</h3>
        <div className="mb-3">
          <label className='labelClass'>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            onChange={(e)=>setLoginName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className='labelClass'>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
      </div>

          </div>
        
        
    )
  
}