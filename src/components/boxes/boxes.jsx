import React from "react";

const Box = ({ boxClass, boxId, selectBox, row, col }) => {
  return (
    <div
      className={boxClass}
      id={boxId}
      onClick={() => selectBox(row, col)}
    ></div>
  );
};

export default Box;
