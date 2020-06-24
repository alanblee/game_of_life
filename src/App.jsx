import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Grid from "./components/grid/grid";
import {
  setFullGrid,
  updateGrid,
  seedGrid,
  nextStep,
} from "./redux/actions/mainActions";
import "./App.scss";

const App = ({
  generations,
  setFullGrid,
  fullGrid,
  updateGrid,
  seedGrid,
  nextStep,
  clicked,
}) => {
  const [speed, setSpeed] = useState(100);
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(10);
  const [intervalId, setIntervalId] = useState("");
  const [gridArr, setGridArr] = useState([]);

  useEffect(() => {
    setFullGrid(rows, cols);
  }, []);

  const next = (grid, row, col) => {
    play(grid, row, col);
  };

  const play = (gridArr, rows, cols) => {
    nextStep(gridArr, rows, cols);
  };
  const pause = () => {
    clearInterval(intervalId);
  };
  return (
    <div className="">
      <h1>Game of Life</h1>
      <h2>Generations: {generations} </h2>
      <button onClick={() => seedGrid(rows, cols)}>Seed Grid</button>
      <button onClick={() => pause()}>Pause</button>
      <button onClick={() => next(fullGrid, rows, cols)}>Next Step</button>

      {fullGrid.length > 0
        ? [
            <Grid
              key={1}
              cols={cols}
              rows={rows}
              grid={fullGrid}
              selectBox={(row, col) => {
                updateGrid(row, col);
              }}
            />,
          ]
        : null}
    </div>
  );
};

const mapState = (state) => ({
  generations: state.main.generations,
  fullGrid: state.main.fullGrid,
  clicked: state.main.clicked,
});
const actions = {
  setFullGrid,
  updateGrid,
  seedGrid,
  nextStep,
};
export default compose(connect(mapState, actions))(App);
