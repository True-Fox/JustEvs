import React from "react";
import logo from "./logo.png"
import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout"
import {useAuthContext} from "../hooks/useAuthContext"

import "./bootstrap.css";
import "./Main.css";

export default function Header(){

    const {logout} = useLogout()

    const {user} = useAuthContext()

    const handleClick = () => {
        logout()
    }
    return (
        <div>
            <header>
                <div id = "container">
                    <div className = "row">
                        <div className = "col-sm-4">
                            <img id = "logo" src = {logo} style = {{float : 'left', width: '120px', height : '70px', marginLeft : '10px', marginTop:'10px'}} />
                        </div>
                        <div className = "col-sm-4">
                            <NavLink className="nav-link" to="/">
                            <h1>JustEVs.com</h1>
                            </NavLink>
                        </div>
                        <div className = "col-sm-4">
                            <div id = "login">
                            {user && (
                                <div>
                                <span className = "nobr" style = {{color: "white", fontWeight:"bold", fontSize: "larger"}}>{user.email}</span>
                                </div>
                            )}
                                {user && (
                                <div>
                                    <nav className="navbar navbar-expand-sm bg-dark justify-content-center navbar-fixed-top navbar-dark" style = {{width: 100}}>
                                    <button onClick={handleClick} style = {{background : "#28242c", border: "none", color: "white"}}>LOGOUT</button>
                                    </nav>
                                </div>
                                )}
                                {!user && (
                                <nav className="navbar navbar-expand-sm bg-dark justify-content-center navbar-fixed-top navbar-dark" style = {{width: 150}}>
                                <ul className="navbar-nav topnav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="login">LOGIN</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="signup">SIGNUP</NavLink>
                                    </li>
                                </ul>
                                </nav>
                                )}
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
            </header>
        </div>
    )
}