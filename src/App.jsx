import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Grid from "./components/grid/grid";
import "./App.scss";

const App = (generations) => {
  const [speed, setSpeed] = useState(100);
  const [rows, setRows] = useState(30);
  const [cols, setCols] = useState(50);

  useEffect(() => {}, []);
  return (
    <div className="">
      <h1>Game of Life</h1>
      <h2>Generations: {generations.generations} </h2>
      <Grid />
    </div>
  );
};

const mapState = (state) => ({
  generations: state.main.generations,
});
export default compose(connect(mapState, null))(App);
