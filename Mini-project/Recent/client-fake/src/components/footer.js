import React from "react";
import "./bootstrap.css";
import "./Main.css";
import { NavLink } from "react-router-dom";

export default function Footer(){
    return (
        <footer style={{position:"fixed"}}>
            <nav className="navbar navbar-expand-sm bg-dark navbar-fixed-top navbar-dark">
                <ul className="navbar-nav topnav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="contact.js">CONTACT US</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="feedback.js">FEEDBACK</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="faq.js">FAQ</NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}