import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './nav';
const accessToken = localStorage.getItem("accessToken");

const getUserDetails = async (e) => {
  const config = {
    headers: {
      "Api-Version": "1.1",
      "Content-Type": "application/json",
      Authorization: "Bearer "+accessToken,
    },
  };
  const url = "https://sandbox.api.yodlee.com/ysl/user";
  axios
    .get(url, config)
    .then((res) => {
       console.log(res.data.user)
      localStorage.setItem("userFirst", res.data.user.name.first);
      localStorage.setItem("userLast", res.data.user.name.last);
      localStorage.setItem("login", res.data.user.loginName);
      localStorage.setItem("email", res.data.user.email);
    })
    .catch((err) => console.log(err));
};




const FastLink = () => {
  useEffect(()=>{
    getUserDetails();
  },[])
  
  const navigate=useNavigate();
  useEffect(() => {
    window.moveTo(0, 0);
    const fastlinkBtn = document.getElementById('btn-fastlink');
    fastlinkBtn.addEventListener('click', () => {
    //   indow.resizeTo(screen.width, screen.height);
    const accessToken = localStorage.getItem("accessToken");
      window.fastlink.open({
        fastLinkURL: 'https://fl4.sandbox.yodlee.com/authenticate/restserver/fastlink',
        accessToken: 'Bearer '+accessToken,
        params: {
          configName: 'Verification'
        },
        onSuccess: data => {
          //const res = data.json()
          console.log(data)
        },
        onError: data => {
          console.log(data);
        },
        onClose: data => {
          console.log(data);
          console.log(data.action)
          console.log(data.sites[0].providerAccountId)
          console.log(data.sites[0].providerId)
          console.log(data.sites[0].providerName)
          localStorage.setItem("providerAccountId", data.sites[0].providerAccountId);
          if(data.action === "exit"){
            navigate("/GetBalance");
            return;
          }
        },
        onEvent: data => {
          console.log(data);
        }
      }, 'container-fastlink');
    });
  }, []);

  return (
    <div id="container-fastlink">
      <Navbar/>
      <div style={{ textAlign: 'center', marginTop:'105px' }}>
        <input type="submit" id="btn-fastlink" value="Link an Account" className='btn btn-primary'/>
      </div>
    </div>
  );
};

export default FastLink;
