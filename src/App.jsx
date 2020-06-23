import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Grid from "./components/grid/grid";
import { setFullGrid } from "./redux/actions/mainActions";
import "./App.scss";

const App = ({ generations, setFullGrid }) => {
  const [speed, setSpeed] = useState(100);
  const [rows, setRows] = useState(30);
  const [cols, setCols] = useState(50);

  useEffect(() => {
    setFullGrid(rows, cols);
  }, []);
  return (
    <div className="">
      <h1>Game of Life</h1>
      <h2>Generations: {generations} </h2>
      <Grid />
    </div>
  );
};

const mapState = (state) => ({
  generations: state.main.generations,
});
const actions = {
  setFullGrid,
};
export default compose(connect(mapState, actions))(App);
