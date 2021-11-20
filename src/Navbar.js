import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {

    return (
        <div>
            <nav class="navbar navbar-expand-sm">
                <img src="../images/1.jpg" alt="no img" width="100px" height="70px" />
                
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="#"><strong>Home</strong></Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to="#"><strong>Our Products</strong></Link>
                    </li>
                    <li class="nav-item active ">
                        <Link class="nav-link" to="#"><strong>For Institutes</strong></Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to="#"><strong>For Companies</strong></Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to="#"><strong>Careers</strong></Link>
                    </li>
                    <button className="btn btn-primary"><strong>Get Started</strong></button>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;