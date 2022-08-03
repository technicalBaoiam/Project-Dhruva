import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <section>
            <div className="container">
                <div className="contactInfo">
                    <h2>Contact Info</h2>
                    <ul className="info">
                        <li>
                            <span><i className="fa fa-location-arrow i"></i></span>
                            <span>101 New Street Road <br />
                                Noida,New Delhi <br />
                                100123
                            </span>
                        </li>
                        <li>
                            <span><i className="fa fa-envelope-open i"></i></span>
                            <span>example@baoiom.com</span>
                        </li>
                        <li>
                            <span><i className="fa fa-phone i"></i></span>
                            <span>+91-9945873110</span>
                        </li>
                    </ul>
                </div>
                <div className="contactForm">
                    <form action="sendurl" method="POST">
                        <h2>Enquiry</h2>
                        <div className="formBox">
                            <div className="inputBox w50">
                                <input type="text" required />
                                <span>First Name</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="text" required />
                                <span>Last Name</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="email" required />
                                <span>Email Address</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="text" required />
                                <span>Mobile Number</span>
                            </div>
                            <div className="inputBox w100">
                                <textarea required></textarea>
                                <span>Write Your Query Here...</span>
                            </div>
                            <div className="inputBox w75">
                                <input type="submit" value="Send" />
                            </div>
                            <div className="inputBox w75">
                                <input type="reset" value="Clear" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
