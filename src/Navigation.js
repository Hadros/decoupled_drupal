import {Link} from "react-router-dom";
import React from "react";

const Navigation = () => {
  return (
    <>
      <nav>
        <div>kek</div>
        <Link to="/nodes">Nodes List</Link>
        <br/>
        <Link to="/">Home</Link>
      </nav>

    </>
  );
}

export default Navigation;
