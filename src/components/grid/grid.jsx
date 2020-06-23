import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Box from "../boxes/boxes";

const Grid = ({ rows, cols, fullGrid, selectBox }) => {
  const width = cols * 14;
  let rowsArr = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let boxId = `${i}-${j}`;
      let boxClass = fullGrid[i][j] ? "box on" : "box off";
      rowsArr.push(
        <Box
          boxClass={boxClass}
          key={boxId}
          boxId={boxId}
          row={i}
          col={j}
          selectBox={selectBox}
        />
      );
    }
  }
  return (
    <div className="grid" style={{ width: width }}>
      {rowsArr}
    </div>
  );
};

export default compose(connect(null, null))(Grid);
