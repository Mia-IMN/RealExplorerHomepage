import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "@react-spring/core";
import Ellipse from "../Images/Ellipse 3.png";
import { Link } from "react-router-dom";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";

const Navigation = () => {
  const [showModal, setshowModal] = useState(false);
  const [openLogIn, setopenLogIn] = useState(false);

  const openModal = () => {
    setshowModal((prev) => !prev);
  };
  const login = () => {
    setopenLogIn((prev) => !prev);
    setshowModal((prev) => !prev);
  };

  const modalRef= useRef()

  return (
    <div className="Navigation">
      <p className="Buy">
        Buy <span></span>
      </p>
      <p>
        Rent <span></span>
      </p>
      <p>
        Sell <span></span>
      </p>
      <p>
        Home Loans <span></span>
      </p>
      <p>
        Save to Rent/Buy <span></span>
      </p>
      <h5 className="Logo">
        <img src={Ellipse} alt="" />
        RealExplorer{" "}
      </h5>
      <p className="Advertise">
        Advertise <span></span>
      </p>
      <p>
        Help <span></span>
      </p>
      {/* <Link to="/signup"> */}
      <button onClick={openModal}>Sign Up</button>
      {/* </Link> */}
      <Signup
        showModal={showModal}
        setshowModal={setshowModal}
        setopenLogIn={setopenLogIn}
        login={login}
      />
      <Login setopenLogIn={setopenLogIn} openLogIn={openLogIn} openModal={openModal} />
    </div>
  );
};

export default Navigation;
