import React from 'react';
import "./Header.css";
import logo from "./logo.png";
import { Link } from 'react-router-dom';

const Header = () => {
    const show = (e) => {
        console.log("Clicked");
        const menuBox = document.getElementById("menu");
        menuBox.classList.toggle("menu-box-active");
    }

    // if(window.innerWidth > 600){
    //     const menuBox = document.getElementById("menu");
    //     menuBox.classList.remove("menu-box-active");
    //     console.log("Removed");
    // }
    return (
        <div id="header">
            <nav>
                <div className="logo-box">
                    <div className="bar"><i onClick={show} className="fa fa-bars"></i></div>
                    <div className="logo"><img src={logo} alt="BAOIAM" /></div>
                </div>
                <div className="menu-box" id='menu'>
                    <div className="menu-box-item"><Link to="/" className="btn">Home</Link></div>
                    <div className="menu-box-item"><Link to="/about" className="btn">About Us</Link></div>
                    <div className="menu-box-item"><Link to="/" className="btn">Course</Link></div>
                    <div className="menu-box-item"><Link to="/contact" className="btn">Contact Us</Link></div>
                </div>
                <div className="login-btn btn">
                    <Link to="/loginSignup"><i className="fa fa-user"></i></Link>
                </div>
            </nav>
        </div>
    )
}

export default Header
