import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import image4 from "./4.jpg";
import image5 from "./5.jpg";
import image6 from "./6.jpg";
import image7 from "./7.jpg";
import { Route, Routes} from "react-router-dom";

import 'bootstrap';
import "./Main.css";

export default function Home()
{
    return(
      <div>
        <br/>
        <br/>
        <br/>
        <div className = "container">
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        <div  style = {{backgroundColor : "rgba(255, 255, 255, 0.5)", marginTop: "100px", marginBottom: "100px"}}>
                  <div className="className-body" style = {{padding: "5px"}}>
                  <p id = "first">
                  WELCOME TO OUR JUSTEVS SITE
                  WE ARE PRESENTING YOU A PLACE WHERE YOU CAN MAKE UP YOUR MIND TO TAKE A SMALL STEP TOWARDS SAVING OUR BELOVED EARTH.
                  WE ARE HERE TO HELP YOU IN CHOOSING ELECTRICALLY FUELED VEHICLES  OVER NON-RENEWABLE FUELED VEHICLES.
                  WE LOOK FORWARD IN DOING OUR BEST TO SUPPORT YOU TO ENSECURE YOURS AND EVERYONE'S FUTURE.
                  </p>
                  </div>
                </div>
          <div className = "row">
                <div className="col-sm-6" style={{marginTop: "100px"}}>
                  <div id="demo1" className="carousel slide carousel-dark" data-bs-ride="carousel">
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={image1} alt="Los Angeles" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                      <img src={image2} alt="Chicago" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                      <img src={image3} alt="New York" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                      <img src={image4} alt="Texas" className="d-block w-100"/>
                    </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#demo1" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo1" data-bs-slide="next">
                      <span className="carousel-control-next-icon"></span>
                    </button>
                  </div>
                </div>
            <div className = 'col-sm-6'>
              <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                  <div  style = {{backgroundColor : "rgba(255, 255, 255, 0.5)"}}>
                  <div className="className-body" style = {{padding: "5px"}}>
                  <p id = "home">
                  Technology is always improving, making it available to anyone who wants to give it a try.
                  Electric cars are no longer silent. There are more electric car charging points than petrol stations.
                  The first electric vehicle was invented nearly 200 years ago. Maintenance and repair will be much lower than conventionally fueled vehicles.
                  </p>
                  </div>
                </div>
            </div>
          </div>
          <div className = "row">
          <div className = 'col-sm-6'>
              <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div  style = {{backgroundColor : "rgba(255, 255, 255, 0.5)"}}>
                  <div className="className-body" style = {{padding: "5px"}}>
                  <p id = "home">
                  The new-generation electric bikes are equipped with fantastic features like instant acceleration and great break-horse-power. 
                  Such features are not limited to the speed; you can race her up just like a fuel-bike.<br/><br/>
                  Electric motorbikes are free from gears, meaning the riders can enjoy rides without shifting gears.
                  You will say goodbye to all that annoyance of changing gear during signals, traffic and crowded streets.
                  </p>
                  </div>
                </div>
            </div>
          <div className="col-sm-6" style={{marginTop: "100px"}}>
                  <div id="demo2" className="carousel slide carousel-dark" data-bs-ride="carousel">
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={image5} alt="Los Angeles" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                      <img src={image6} alt="Chicago" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                      <img src={image7} alt="New York" className="d-block w-100"/>
                    </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#demo2" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo2" data-bs-slide="next">
                      <span className="carousel-control-next-icon"></span>
                    </button>
                  </div>
                </div>
                </div>
        </div>
      </div>
    )
}