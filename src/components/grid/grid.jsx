import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

const Grid = () => {
  return <div className="grid"></div>;
};

export default compose(connect(null, null))(Grid);
