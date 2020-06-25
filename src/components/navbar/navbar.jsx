import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div class="nav-bar">
      <nav>
        <div class="nav-right">
          <Link to="/">About</Link>
          <Link to="/game">Game</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
