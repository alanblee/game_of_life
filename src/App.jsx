import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Grid from "./components/grid/grid";
import { setFullGrid, updateGrid, seedGrid } from "./redux/actions/mainActions";
import "./App.scss";

const App = ({ generations, setFullGrid, fullGrid, updateGrid, seedGrid }) => {
  const [speed, setSpeed] = useState(100);
  const [rows, setRows] = useState(30);
  const [cols, setCols] = useState(30);

  const [fg, setFg] = useState([]);

  useEffect(() => {
    setFullGrid(rows, cols).then((res) => {
      // console.log(res);
      setFg(fullGrid);
    });
  }, []);

  return (
    <div className="">
      <h1>Game of Life</h1>
      <h2>Generations: {generations} </h2>
      <button onClick={() => seedGrid(rows, cols)}>Seed Grid</button>
      {fullGrid.length > 0 ? (
        <Grid
          cols={cols}
          rows={rows}
          selectBox={(row, col) => {
            updateGrid(row, col);
          }}
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
  updateGrid,
  seedGrid,
};
export default compose(connect(mapState, actions))(App);
