import React from 'react';
import { Link } from 'react-router-dom';
import playstore from "./playstore.png";
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            {/* First Footer : The Map ,Email and Number */}
            <div className='first-footer'>
                <h1><i className='fa fa-location-arrow'></i>Address</h1>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.020793854095!2d77.37792241503628!3d28.62913888241906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x26a8b63f2a9517f8!2zMjjCsDM3JzQ0LjkiTiA3N8KwMjInNDguNCJF!5e0!3m2!1sen!2sin!4v1658947282219!5m2!1sen!2sin" width="200" height="150" allowFullScreen="" loading="lazy" title="map" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <h1><i className='fa fa-envelope-o'></i>example@baoiam.com</h1>
                <h1><i className='fa fa-phone'></i>+91-1234567890</h1>
            </div>
            {/* Second Footer contains all the links both Company links and Other links */}
            <div className='second-footer'>
                <h2>Company</h2>
                <div className="links">
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/why">Why BAOIAM</Link>
                    <Link to="/careers">Careers</Link>
                    <Link to="/">Learn India</Link>
                </div>
            </div>
            <div className='second-footer'>
                <h2>Other Links</h2>
                <div className="links">
                    <Link to="/">Free Live Classes</Link>
                    <Link to="/">Teach with Us</Link>
                    <Link to="/">State Boards</Link>
                    <Link to="/">Careers</Link>
                    <Link to="/">Benefits</Link>
                    <Link to="/">Blogs</Link>
                </div>
            </div>

            {/* Third Footer: All the Social media links and the app download */}
            <div className="third-footer">
                <h1>Follow Us</h1>
                <div>
                    <a href="https://www.google.com"><i className='fa fa-facebook'></i></a>
                    <a href="https://www.google.com"><i className='fa fa-instagram'></i></a>
                    <a href="https://www.google.com"><i className='fa fa-twitter'></i></a>
                    <a href="https://www.google.com"><i className='fa fa-linkedin'></i></a>
                </div>
                <div>
                    <h1>Download Our App</h1>
                    <img src={playstore} alt="Playstore" className='cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Footer
