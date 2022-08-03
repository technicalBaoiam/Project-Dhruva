import React, { Fragment, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { MdMailOutline, MdAccountCircle, MdLockOpen, MdCall } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import "./LoginSignUp.css"

const LoginSignUp = () => {

    const loginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [name, setName] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [signupPhone, setSignupPhone] = useState("");
    const [userType, setuserType] = useState("student");


    const switchTabs = (e, tab) => {
        if (tab === "login") {
            switcherTab.current.classList.add("shiftToNeutral");    //Adding class which are implemented in css
            switcherTab.current.classList.remove("shiftToRight");   //Remiving a class

            registerTab.current.classList.remove("shiftToNeutralForm");
            loginTab.current.classList.remove("shiftToLeft");
        }
        if (tab === "register") {
            switcherTab.current.classList.remove("shiftToNeutral");
            switcherTab.current.classList.add("shiftToRight");

            registerTab.current.classList.add("shiftToNeutralForm");
            loginTab.current.classList.add("shiftToLeft");
        }
    };

    return (
        <Fragment>
            <div className="loginSignUpContainer">
                <div className="loginSignUpBox">
                    <div>
                        <div className="login_signup_toggle">
                            <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                            <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                        </div>
                        <button ref={switcherTab}></button>
                    </div>

                    {/* Login Form */}
                    <form className='loginForm'
                        ref={loginTab}
                    // onSubmit={loginSubmit}
                    >
                        <div className="loginEmail">
                            <MdMailOutline />
                            <input
                                type="email"
                                placeholder='Email'
                                required
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                            />
                        </div>
                        <div className="loginPassword">
                            <MdLockOpen />
                            <input
                                type="password"
                                placeholder='Password'
                                required
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                            />
                        </div>
                        <Link to="/password/forgot">Forgot Password?</Link>
                        <input type="submit" value="Login" className="loginBtn" />
                        <button type="submit" value="Login" className="googleLoginBtn"><FcGoogle />Login with Google</button>
                    </form>

                    {/* Register Form */}
                    <form
                        className='signUpForm'
                        ref={registerTab}
                    // onSubmit={registerSubmit}

                    >

                        <div className="signUpName">
                            <MdAccountCircle />
                            <input
                                type="text"
                                placeholder='Name'
                                required
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="signUpPhone">
                            <MdCall />
                            <input
                                type="number"
                                placeholder='Phone'
                                required
                                name="phone"
                                value={signupPhone}
                                onChange={(e) => setSignupPhone(e.target.value)}
                            />
                        </div>
                        <div className="signUpEmail">
                            <MdMailOutline />
                            <input
                                type="eamail"
                                placeholder='Email'
                                required
                                name="email"
                                value={signupEmail}
                                onChange={(e) => setSignupEmail(e.target.value)}
                            />
                        </div>
                        <div className="signUpPassword">
                            <MdLockOpen />
                            <input
                                type="password"
                                placeholder='Password'
                                required
                                name="password"
                                value={signupPassword}
                                onChange={(e) => setSignupPassword(e.target.value)}
                            />
                        </div>
                        <div className="useType">
                            <MdLockOpen />
                            <select name="userType" value={userType} onChange={(e) => setuserType(e.target.option)}>
                                <option value="student">Student</option>
                                <option value="mentor">Mentor</option>
                                <option value="superMentor">Super Mentor</option>
                            </select>
                        </div>
                        <input
                            type="submit"
                            value="Register"
                            className="signUpBtn"
                        />
                        <button type="submit" className="googleSignUpBtn"><FcGoogle />Signup with Google</button>
                    </form>
                </div>
            </div>

        </Fragment>
    )
}

export default LoginSignUp
