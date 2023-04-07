import React, { useEffect } from "react";
import Navbar from "./nav";
export default function Profile() {
  const userFirst = localStorage.getItem("userFirst");
  const userLast = localStorage.getItem("userLast");
  const login = localStorage.getItem("login");
  const email = localStorage.getItem("email");

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <table
              class="table table-striped table-hover table-bordered"
              style={{ marginTop: "115px"}}
            >
              <tbody>
                <tr>
                  <td>First Name</td>
                  <td>{userFirst}</td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td>{userLast}</td>
                </tr>
                <tr>
                  <td>Email ID</td>
                  <td>{email}</td>
                </tr>
                <tr>
                  <td>Login Name</td>
                  <td>{login}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
}
