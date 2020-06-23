import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import "./App.scss";

const App = (generations) => {
  return (
    <div className="">
      <h1>Game of Life</h1>
      <h2>Generations: {generations.generations} </h2>
    </div>
  );
};

const mapState = (state) => ({
  generations: state.main.generations,
});
export default compose(connect(mapState, null))(App);
