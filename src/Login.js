import React from "react";

import "./Login.css";
import { Link } from 'react-router-dom';

function Login() {

    const handleClick = () => {
          window.open(" https://developers.google.com/identity/gsi/web/guides/overview");
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Welcome Back!</h1>
                        <p id="four"> To login please enter your username and password or <br /> login with Google or Facebook</p>
                        <img src="../images/Concept_04-01 1.png" id="three" alt="no img" width="500px" height="600px" />
                    </div>
                    <div className="col">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body">
                                <h5 className="card-title  mb-5 fw-light fs-5"><h3>Log-in</h3></h5>
                                <form>
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="Enter your Email Address" />

                                    </div>
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Enter your Password" />
                                    </div>

                                    <div className="form-check">
                                        <div id="forgot"> 
                                            <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                                            Remember me<span style={{ "padding": "70px" }}><a href="#">Forgot password?</a></span>
                                        </div>
                                        <div id="login">
                                            <Link to="/">
                                                <button className="btn btn-primary btn-block cursor">Log-in</button>
                                            </Link>
                                        </div>
                                    </div>

                                    <br/> <p>Don't you have an account? <a href="#"><span style={{ "color": "blue" }}>Register Here</span></a></p> <br />
                                    <div style={{ "float": "left", "width": "45%" }}><hr /></div>
                                    <div style={{ "float": "right", "width": "44%" }}><hr /></div>
                                    <button id="two">OR</button>

                                    <div className="d-grid">
                                        <button onClick={handleClick()} className="btn btn-google btn-login text-uppe
                                        c rcase fw-bold"  type="submit">
                                            <a href="#" > <i style={{ "color": "white" }} className="fab fa-google me-2"></i> </a>
                                        </button>
                                        <span> <button className="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                                            <i className="fab fa-facebook-f me-2"></i>
                                        </button> </span>
                                    </div>
                                </form>

                            </div>

                            <div className='card-footer'>
                                <p style={{ "marginTop": "20px", "color": "black", "marginLeft": "20px" }}>By clicking the button above,you agree to our <span style={{ "color": "blue" }}>terms of use</span> and <span style={{ "color": "blue" }}>privacy policies</span></p>
                                <div id="one"><img src="../images/freepik--character-1--inject-19.png" alt="no img" width="150px" height="110px" /></div>
                            </div>


                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
