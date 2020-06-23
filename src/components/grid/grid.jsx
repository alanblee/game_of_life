import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Box from "../boxes/boxes";

const Grid = ({ rows, cols, fullGrid, selectBox, clicked }) => {
  const [rowsArr, setRowsArr] = useState([]);
  const width = cols * 14;
  useEffect(() => {
    let newArr = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let boxId = `${i}-${j}`;
        let boxClass = fullGrid[i][j] ? "box on" : "box off";
        newArr.push(
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
    setRowsArr(newArr);
  }, [clicked]);
  return (
    <div className="grid" style={{ width: width }}>
      {rowsArr}
    </div>
  );
};
const mapState = (state) => ({
  fullGrid: state.main.fullGrid,
  clicked: state.main.clicked,
});
export default compose(connect(mapState, null))(Grid);
