import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import logo from "./logo.png"
import { Route, Routes} from "react-router-dom";
import { useEffect, useState } from "react";

import 'bootstrap';
import "./Main.css";

export default function Two()
{
  const [vehicles, setVehicles] = useState(null)
  
  useEffect(() => {
    const fetchVehicles = async () => {
      const response = await fetch('/api/vehicles')
      const json = await response.json()

      if(response.ok) {
        setVehicles(json)
      }
    }

    fetchVehicles()
  }, [])  
  
  return(
      <div className = "two">
        <div className = "vehicles">
          {vehicles && vehicles.map((vehicle)  => (
            <p key = {vehicle._id}>{vehicle.Name}</p>
          ))}

        </div>
        
      </div>
    )
}