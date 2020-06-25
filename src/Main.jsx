import React from "react";
import { Route } from "react-router-dom";
import Game from "./Game";
import Navbar from "./components/navbar/navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/game">
        <Game />
      </Route>
    </div>
  );
};

export default Main;
