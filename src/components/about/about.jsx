import React from "react";

const About = () => {
  return (
    <div className="about-contianer">
      <div className="description">
        <h1>What is Conway's Game of Life?</h1>
        <p>
          The universe of the Game of Life is an infinite, two-dimensional
          orthogonal grid of square cells, each of which is in one of two
          possible states, alive or dead, (or populated and unpopulated,
          respectively). Every cell interacts with its eight neighbours, which
          are the cells that are horizontally, vertically, or diagonally
          adjacent. At each step in time, the following transitions occur:
        </p>
      </div>
      <div className="rules">
        <h1>Rules</h1>
        <p>
          Any live cell with fewer than two live neighbours dies, as if by
          underpopulation.
        </p>
        <p>
          Any live cell with two or three live neighbours lives on to the next
          generation.
        </p>
        <p>
          Any live cell with more than three live neighbours dies, as if by
          overpopulation.
        </p>
        <p>
          Any dead cell with three live neighbours becomes a live cell, as if by
          reproduction.
        </p>
      </div>
    </div>
  );
};

export default About;
