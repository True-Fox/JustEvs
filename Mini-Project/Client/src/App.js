import React from "react";

import { Route, Routes} from "react-router-dom";
import "./components/Main.css";

import Header from "./components/header";
import NavBar from "./components/navbar";
import Login from './components/login'
import Signup from './components/signup'
import Home from "./components/home";
import Footer from "./components/footer";
import Two from "./components/2wheelers";
import Three from "./components/3wheelers";
import Four from "./components/4wheelers";
import Feedback from "./components/feedback";
import Contact from "./components/contact";
import FAQ from "./components/faq";

const App = () => {
  return (
    <div>
      <div className = "top">
      <Header/>
      <NavBar />
      </div>
      <Routes>
      <Route path = "/" element = {<Home />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/signup" element = {<Signup />} />
        <Route path = "/2wheelers" element = {<Two />} />
        <Route path = "/3wheelers" element = {<Three />} />
        <Route path = "/4wheelers" element = {<Four />} />
        <Route path = "/feedback" element = {<Feedback />} />
        <Route path = "/contact" element = {<Contact />} />
        <Route path = "/faq" element = {<FAQ />} />
      </Routes>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </div>
  );
};

export default App;