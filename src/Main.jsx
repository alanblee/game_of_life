import React from "react";
import { Route } from "react-router-dom";
import Game from "./Game";
import About from "./components/about/about";
import Navbar from "./components/navbar/navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <About />
      </Route>
      <Route exact path="/game">
        <Game />
      </Route>
    </div>
  );
};

export default Main;
