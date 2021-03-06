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
  resizeGrid,
} from "./redux/actions/mainActions";

const Game = ({
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
  resized,
  resizeGrid,
}) => {
  const [speed, setSpeed] = useState(1000);
  const [rows, setRows] = useState(30);
  const [cols, setCols] = useState(30);
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
  useEffect(() => {
    if (resized) {
      setRows(rows);
      setCols(cols);
      resizeGrid(rows, cols);
    }
  }, [resized]);

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

  const smallGrid = () => {
    setRows(10);
    setCols(10);
  };
  const mediumGrid = () => {
    setRows(25);
    setCols(25);
  };
  const largeGrid = () => {
    setRows(30);
    setCols(30);
  };

  const speedFast = () => {
    setSpeed(100);
  };
  const speedSlow = () => {
    setSpeed(1000);
  };
  return (
    <div className="game-container">
      <div className="control-pannel">
        <div className="game-control">
          {grid.length > 0 ? (
            <button onClick={() => play(grid, rows, cols)}>Play</button>
          ) : null}
          <button onClick={() => pause()}>Pause</button>
          <button onClick={() => clear()}> Clear</button>
        </div>

        <div className="preset-patterns">
          <button onClick={() => seedGrid(rows, cols)}>Random</button>
          <button onClick={() => setLine(rows, cols)}>Middle Line</button>
        </div>
        <div className="speed-controls">
          <button onClick={() => speedFast()}>Fast</button>
          <button onClick={() => speedSlow()}>Slow</button>
        </div>
        <div className="grid-size">
          <button onClick={() => smallGrid()}>Small</button>
          <button onClick={() => mediumGrid()}>Medium</button>
          <button onClick={() => largeGrid()}>Large</button>
        </div>
      </div>
      <h2>Generations: {generations} </h2>
      <div className="grid">
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
    </div>
  );
};

const mapState = (state) => ({
  generations: state.main.generations,
  fullGrid: state.main.fullGrid,
  clicked: state.main.clicked,
  newGame: state.main.newGame,
  gameStarted: state.main.gameStarted,
  resized: state.main.resized,
});
const actions = {
  setFullGrid,
  updateGrid,
  seedGrid,
  nextStep,
  pauseGame,
  setLine,
  clearGrid,
  resizeGrid,
};
export default compose(connect(mapState, actions))(Game);
