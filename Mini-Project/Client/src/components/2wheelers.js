import React from "react";
import { useEffect, useState} from "react";
import {Container,Col,Row,Card} from "react-bootstrap"

import 'bootstrap';
import "./Main.css";

export default function Two()
{
  const [vehicles, setVehicles] = useState(null)
  const [sortType, setSortType] = useState('NameI');
  useEffect(() => {
    const fetchVehicles = async () => {
      const response = await fetch('/api/vehicles')
      const json = await response.json()
      if(response.ok && !vehicles) {
        setVehicles(json) 
      }
    }
    fetchVehicles()
    const sortArray = async(type) => {
      const types = {
        NameI: 'NameI',
        NameD: 'NameD',
        PriceI: 'PriceI',
        PriceD: 'PriceD',
        MileageI: 'MileageI',
        MileageD: 'MileageD'
      };
      const sortProperty = types[type];
      var sorted;
      if (sortProperty === 'NameI')
      {
      sorted = [...vehicles].sort((a, b) => a['Name'] > b['Name'] ? 1 : -1);
      }
      else if (sortProperty === 'NameD')
      {
      sorted = [...vehicles].sort((a, b) => a['Name'] > b['Name'] ? -1 : 1);
      }
      else if (sortProperty === 'PriceI')
      {
        sorted = [...vehicles].sort((a, b) => a['Price'] - b['Price']);
      }
      else if (sortProperty === 'PriceD')
      {
        sorted = [...vehicles].sort((a, b) => b['Price'] - a['Price']);
      }
      else if (sortProperty === 'MileageI')
      {
        sorted = [...vehicles].sort((a, b) => a['Mileage'] - b['Mileage']);
      }
      else if (sortProperty === 'MileageD')
      {
        sorted = [...vehicles].sort((a, b) => b['Mileage'] - a['Mileage']);
      }
      setVehicles(sorted);
    };

      sortArray(sortType);
  }, [sortType])

  return(
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={{border: "2px solid black", width: "15%", backgroundColor: "#28242c", padding: "2px", margin: "auto"}}>
        <h3 style= {{color: "white", textAlign: "center"}}>Sort By:</h3>
        <select style={{marginLeft:"15px", marginBottom: "5px"}} onChange={(e) => setSortType(e.target.value)}>
        <option value="NameI">Name (A-Z)</option>
        <option value="NameD">Name (Z-A)</option>
        <option value="PriceI">Price (Increasing)</option>
        <option value="PriceD">Price (Decreasing)</option>
        <option value="MileageI">Mileage (Increasing)</option>
        <option value="MileageD">Mileage (Decreasing)</option>
        </select>
      </div>
      <Container>
        <Row>
        {vehicles && vehicles
        .filter((vehicle)=>{
          return vehicle.Type === "two"
        })
        .map((vehicle)  => (
            <Col key={vehicle.Name} xs={12} md={4} lg={3}>
            <Card className="cards mt-5" style = {{border: "5px double rgb(18, 86, 3)"}}>
              <Card.Img src={vehicle.Image}/>
              <Card.Header><h5>{vehicle.Name}</h5></Card.Header>
              <Card.Body><b>Price: </b>Rs. {vehicle.Price}<br/><b>Mileage: </b>{vehicle.Mileage} km/Charge</Card.Body>
              <div className="card__inner">
                  {vehicle.Small_Details}<br/><br/>
                  <p><a target = "_blank" href = {vehicle.Real_URL} class = "btn btn-primary stretched-link">Go to Link</a></p>
              </div> 
            </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    )
}