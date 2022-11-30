import React from "react";
import { NavLink } from "react-router-dom";

import "./bootstrap.css";
import "./Main.css";

export default function NavBar()
{
    return(
        <nav className="navbar navbar-expand-sm bg-dark justify-content-center navbar-fixed-top navbar-dark">
            <ul className="navbar-nav topnav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">HOME</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="2wheelers">TWO WHEELERS</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="3wheelers">THREE WHEELERS</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="#">FOUR WHEELERS</NavLink>
                </li>
            </ul>
        </nav>
   )
}