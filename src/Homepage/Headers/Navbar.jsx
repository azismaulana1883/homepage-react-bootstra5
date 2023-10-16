import React from 'react';
import natureImage from '../../assets/img/nature.png';

function Navbar ()
{
    return (
        <>
    <header className="header position-relative" style={{ height: "70vh", backgroundImage: `url(${natureImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>

     
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent position-absolute w-100 d-flex justify-content-between">
        <a className="navbar-brand" href="#logo">LOGO</a>
        
        <div className="collapse navbar-collapse col-3 justify-content-end">
            <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#article">Article</a></li>
                <li className="nav-item subscribe"><a className="nav-link" href="#subscribe">SUBSCRIBE</a></li>
            </ul>
        </div>
    </nav>

    <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-center">
            <h1>ART OF PLANT</h1>
            <h6>All About Of Nature</h6>
            <hr className="hr-header"/>
        </div>
    </div>

</header>
        </>
    )
}

export default Navbar