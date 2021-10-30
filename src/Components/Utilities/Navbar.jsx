import React from "react";
import * as FaIcons from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="Navbar">
      {/* <Link to="#"> */}
      <FaIcons.FaBars size="1.5rem" style={{}} />
      {/* </Link> */}
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
      <p>
        Help <span></span>
      </p>
      <button>Sign Up</button>
    </div>
  );
};

export default Navbar;
