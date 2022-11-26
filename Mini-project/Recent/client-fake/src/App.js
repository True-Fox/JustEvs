import React from "react";

import { Route, Routes} from "react-router-dom";

import Header from "./components/header";
import NavBar from "./components/navbar";
import Login from './components/login'
import Signup from './components/signup'
import Home from "./components/home";
import Footer from "./components/footer";
import Two from "./components/2wheelers";
import Three from "./components/3wheelers";

const App = () => {
  return (
    <div>
      <Header/>
      <NavBar />
      <Routes>
      <Route path = "/" element = {<Home />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/signup" element = {<Signup />} />
        <Route path = "/2wheelers" element = {<Two />} />
        <Route path = "/3wheelers" element = {<Three />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;