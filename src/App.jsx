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
  setLine,
  clearGrid,
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
  setLine,
  gameStarted,
  clearGrid,
}) => {
  const [speed, setSpeed] = useState(1000);
  const [rows, setRows] = useState(20);
  const [cols, setCols] = useState(20);
  const [grid, setGrid] = useState(fullGrid);
  const [intervalId, setIntervalId] = useState("");

  useEffect(() => {
    if (newGame) {
      setFullGrid(rows, cols);
      setGrid(fullGrid);
    }
    if (clicked) {
      setGrid(fullGrid);
    }
  }, [clicked]);

  useEffect(() => {
    if (gameStarted) {
      startGame(fullGrid, rows, cols);
      return () => clearInterval(intervalId);
    }
  }, [gameStarted]);
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
  const clear = () => {
    clearGrid();
  };
  return (
    <div className="">
      <h1>Game of Life</h1>
      <h2>Generations: {generations} </h2>
      <button onClick={() => seedGrid(rows, cols)}>Random</button>
      <button onClick={() => setLine(rows, cols)}>Middle Line</button>
      <button onClick={() => pause()}>Pause</button>
      <button onClick={() => clear()}> Clear</button>
      {grid.length > 0 ? (
        <button onClick={() => play(grid, rows, cols)}>Resume</button>
      ) : null}
      {fullGrid.length > 0
        ? [
            <Grid
              key={1}
              cols={cols}
              rows={rows}
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
  gameStarted: state.main.gameStarted,
});
const actions = {
  setFullGrid,
  updateGrid,
  seedGrid,
  nextStep,
  pauseGame,
  setLine,
  clearGrid,
};
export default compose(connect(mapState, actions))(App);
