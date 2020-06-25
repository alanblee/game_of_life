import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Grid from "./components/grid/grid";
import {
  setFullGrid,
  updateGrid,
  seedGrid,
  nextStep,
  pauseGame,
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
  newGame,
  pauseGame,
}) => {
  const [speed, setSpeed] = useState(10);
  const [rows, setRows] = useState(30);
  const [cols, setCols] = useState(30);
  const [grid, setGrid] = useState(fullGrid);
  const [intervalId, setIntervalId] = useState("");

  useEffect(() => {
    if (newGame) {
      setFullGrid(rows, cols);
    }
    if (clicked) {
      setGrid(fullGrid);
      startGame(fullGrid, rows, cols);
      return () => clearInterval(intervalId);
    }
  }, [clicked]);

  const play = (grid, row, col) => {
    return nextStep(grid, row, col);
  };

  const startGame = (arr, row, col) => {
    setIntervalId(
      setInterval(() => {
        play(arr, row, col);
      }, speed)
    );
  };
  const pause = () => {
    clearInterval(intervalId);
    pauseGame();
  };
  return (
    <div className="">
      <h1>Game of Life</h1>
      <h2>Generations: {generations} </h2>
      <button onClick={() => seedGrid(rows, cols)}>Seed Grid</button>
      {/* <button onClick={() => play(grid, rows, cols)}>Play</button> */}
      <button onClick={() => pause()}>Pause</button>
      {grid.length > 0 ? (
        <button onClick={() => play(grid, rows, cols)}>Play</button>
      ) : null}

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
  newGame: state.main.newGame,
});
const actions = {
  setFullGrid,
  updateGrid,
  seedGrid,
  nextStep,
  pauseGame,
};
export default compose(connect(mapState, actions))(App);
