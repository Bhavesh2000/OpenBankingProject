import React, { useEffect } from "react";
// import "./HeroStyles.css";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from './nav';

function GetBalance() {
  // const [Balance, setBalance] = useState("");
  // const [AccName, setAccName] = useState("");
  // const [AccType, setAccType] = useState("");
  const [event, setEvent] = useState([]);
  const[event1, setEvent1]=useState([]);

  const userFirst = localStorage.getItem("userFirst");
  //const [providerAccId, setProviderId] = useState('');
  const providerAccId = localStorage.getItem("providerAccountId");
  //  setProviderId(accId);
  const accessToken = localStorage.getItem("accessToken");
  console.log(accessToken);
  const proAccIds =11321217;

  
  useEffect(()=>{
    getOauthAcc();
  },[])

  // const getUserDetails = async (e) => {
  //   const config = {
  //     headers: {
  //       "Api-Version": "1.1",
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer "+accessToken,
  //     },
  //   };
  //   const url = "https://sandbox.api.yodlee.com/ysl/user";
  //   axios
  //     .get(url, config)
  //     .then((res) => {
  //        console.log(res.data.user)
  //       localStorage.setItem("userName", res.data.user.name.first);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const getOauthAcc= async(e)=>{
    console.log(providerAccId);

    // const result = await axios.get("http://localhost:5237/GetAccountBalance?providerAccId=${providerAccId}")

    axios
      .post("http://localhost:5237/GetAccountBalance", null, {
        params: { providerAccId: proAccIds, Token: accessToken },
      })
      .then((res) => {
        console.log(res.data);
        //setEvent(res.data.verifiedAccount[0]);
        const accounts = res.data.verifiedAccount
        const accList = [];
        accounts.forEach((acc) => {
        var obj = {
          accountName: acc.accountName,
          accountType: acc.accountType,
          balance : acc.availableBalance.amount,
          isSelected : acc.isSelected
        };
        if(obj.isSelected == true){
        accList.push(obj);
        }
        console.log(accList)
        setEvent1(accList)
      });
        // setBalance(res.data.verifiedAccount[0].availableBalance.amount);
        // setAccName(res.data.verifiedAccount[0].accountName);
        // setAccType(res.data.verifiedAccount[0].accountType);
        //console.log(res.data))
      });
    e.preventDefault();
  };

  const handleSubmit1 = async (e) => {
    console.log(providerAccId);

    // const result = await axios.get("http://localhost:5237/GetAccountBalance?providerAccId=${providerAccId}")

    axios
      .post("http://localhost:5237/GetAccountBalance", null, {
        params: { providerAccId: providerAccId, Token: accessToken },
      })
      .then((res) => {
        console.log(res.data);
        //setEvent(res.data.verifiedAccount[0]);
        const accounts = res.data.verifiedAccount
        const accList = [];
        accounts.forEach((acc) => {
        var obj = {
          accountName: acc.accountName,
          accountType: acc.accountType,
          balance : acc.availableBalance.amount,
          isSelected : acc.isSelected
        };
        if(obj.isSelected == true){
        accList.push(obj);
        }
        console.log(accList)
        setEvent(accList)
      });
        // setBalance(res.data.verifiedAccount[0].availableBalance.amount);
        // setAccName(res.data.verifiedAccount[0].accountName);
        // setAccType(res.data.verifiedAccount[0].accountType);
        //console.log(res.data))
      });
    e.preventDefault();
  };
  //console.log('event'+event)
  return (
    
    <div>
      <Navbar/>
      <br />
      <div>
        <div className="tester"> Welcome {userFirst}</div>
        <br />
        <div>
          {/* <input type="text" onChange={(e)=> setProviderId(e.target.value)}></input> */}
          <button className="btn btn-primary balance" onClick={handleSubmit1} >
            Get All Linked Accounts
          </button>
        </div>
        <br />
      </div>
      <div className="row ml-auto" >
        {event1.map((event,i) => (
            <div className="col-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{event.accountName}</h5>
                    <h5 className="card-text">{event.accountType}</h5>
                  <h5 className="card-text">Rs.{event.balance}</h5>
                    {/* <h5 className="card-text">{event.date}</h5> */}
                </div>
              </div>
            </div>
        ))}
      </div>
      <div className="row ml-auto">
        {event.map((event,i) => (
            <div className="col-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{event.accountName}</h5>
                    <h5 className="card-text">{event.accountType}</h5>
                  <h5 className="card-text">Rs.{event.balance}</h5>
                    {/* <h5 className="card-text">{event.date}</h5> */}
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default GetBalance;
