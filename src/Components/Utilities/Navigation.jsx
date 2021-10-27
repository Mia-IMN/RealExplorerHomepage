import React from 'react';
import Ellipse from '../Images/Ellipse 3.png';

const Navigation = () => {
    return (
        <div className="Navigation">
            <p className="Buy">Buy <span></span></p>
            <p>Rent <span></span></p>
            <p>Sell <span></span></p>
            <p>Home Loans <span></span></p>
            <p>Save to Rent/Buy <span></span></p>
            <h5 className="Logo"><img src={Ellipse} alt="" />RealExplorer </h5>
            <p className="Advertise">Advertise <span></span></p>
            <p>Help <span></span></p>
            <button>Sign Up</button>
        </div>
    )
}

export default Navigation
