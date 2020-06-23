import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Grid from "./components/grid/grid";
import { setFullGrid } from "./redux/actions/mainActions";
import "./App.scss";

const App = ({ generations, setFullGrid, fullGrid }) => {
  const [speed, setSpeed] = useState(100);
  const [rows, setRows] = useState(30);
  const [cols, setCols] = useState(50);

  useEffect(() => {
    setFullGrid(rows, cols);
  }, []);
  const selectBox = () => {};
  return (
    <div className="">
      <h1>Game of Life</h1>
      <h2>Generations: {generations} </h2>
      {fullGrid.length > 0 ? (
        <Grid
          cols={cols}
          rows={rows}
          fullGrid={fullGrid}
          selectBox={selectBox}
        />
      ) : null}
    </div>
  );
};

const mapState = (state) => ({
  generations: state.main.generations,
  fullGrid: state.main.fullGrid,
});
const actions = {
  setFullGrid,
};
export default compose(connect(mapState, actions))(App);
