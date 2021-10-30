import React, { useState } from "react";
import Image1 from "../Images/Ellipse 5.png";
import Image2 from "../Images/Ellipse 4.png";
import Ellipse from "../Images/Ellipse 3.png";
import { FaTimes } from "react-icons/fa";
// import styled from 'styled-components'

const Login = ({ setopenLogIn, openLogIn, openModal }) => {
  const login = () => {
    setopenLogIn((prev) => !prev);
  };

  return (
    <>
      {openLogIn ? (
        <div className="signup">
          <div className="modalwrapper">
            <div className="left-side">
              <h3>Welcome to RealExplorer</h3>
              <h4 className="toptext">
                Log into your account by filling the form below
              </h4>
              <label className="label">Email</label>
              <br />
              <input type="email" className="input" id="" required />
              <br />
              <label className="label">Password</label>
              <br />
              <input type="password" className="input" id="" />
              <button>Log in</button> <br />
              <h4>
                Don't have an account?{" "}
                <span onClick={login, openModal}> Sign Up </span>
                {/* I tried to integrate both functions in 
                the onclick function but I couldn't you'd 
                notice that the log in page is covering
                the sign up page */}
              </h4>
            </div>
            <div className="right-side">
              <img src={Image1} className="image1" />
              <img src={Image2} className="image2" />
              <h5 className="Logo logo">
                <img src={Ellipse} alt="" />
                RealExplorer{" "}
              </h5>
            </div>
            <div className="closebutton" onClick={login}>
              <FaTimes />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Login;
