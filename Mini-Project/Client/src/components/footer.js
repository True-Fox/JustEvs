import React from "react";
import "./bootstrap.css";
import "./Main.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    return (
        <footer style={{position:"fixed"}}>
            <nav className="navbar navbar-expand-sm navbar-fixed-top navbar-dark bg-dark">
                <ul className="navbar-nav topnav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="contact">CONTACT US</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="feedback">FEEDBACK</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="faq">FAQs</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto" style={{}}>
                <a target = "_blank" href = "https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebook} size="2x" style={{  color: "white", marginRight: "20px"}}/>
                </a>
                <a target = "_blank" href = "https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} size="2x" style={{  color: "white", marginRight: "20px"}}/>
                </a>
                <a target = "_blank" href = "https://www.twitter.com/">
                <FontAwesomeIcon icon={faTwitter} size="2x" style={{  color: "white", marginRight: "20px"}}/>
                </a>
                </ul>
            </nav>
        </footer>
    )
}