import React from "react";

const navStyles = {
  margin: 'auto'
};

function Nav() {
  return (
    <nav className="bg-success text-white p-3 d-flex">
      <span className="navbar-brand align-self-center" style={navStyles}>
        MERN Stack Google Books Search
      </span>
      <p className="align-self-center" style={navStyles}>
        <a className="btn border border-white text-white" href="/">
          Search
        </a> <span>/</span> <a className="btn border border-white text-white" href="/saved">
          Saved
        </a>
      </p>
    </nav>
  );
}

export default Nav;
