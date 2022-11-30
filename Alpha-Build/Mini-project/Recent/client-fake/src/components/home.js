import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import logo from "./logo.png"
import { Route, Routes} from "react-router-dom";

import 'bootstrap';
import "./Main.css";

export default function Home()
{
    return(
      <div>
        <div className = "container">
          <div className = "row">
                <div className="col" style={{marginTop: "10rem"}}>
                  <div id="demo" className="carousel slide carousel-dark" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button btn-dark" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://media.zigcdn.com/media/model/2022/Jul/450x-right-side-view_930x620.jpg" alt="Los Angeles" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://media.zigcdn.com/media/model/2022/Sep/beast-png-right-side-view_930x620.png" alt="Chicago" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://www.mahindraelectric.com/images/treo2.0/Treo-3-quarter-new.jpg?v=123" alt="New York" className="d-block w-100"/>
                    </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                      <span className="carousel-control-next-icon"></span>
                    </button>
                  </div>
                </div>
            <div className = 'col'>
              <br/>
                    <br/>
                    <br/>
                    <br/>
                <div className="card mt-5">
                  <div className="className-header">
                    <h1 style={{color: "black"}}>Electric Vehicles</h1>
                  </div>
                  <div className="className-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                   nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                   velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}