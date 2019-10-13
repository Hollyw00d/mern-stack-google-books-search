import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <span className="navbar-brand">
        MERN Stack Google Books Search
      </span>
      <a className="navbar-brand btn border border-white" href="/">
        Search
      </a> <span className="navbar-brand">/</span> <a className="navbar-brand btn border border-white" href="/saved">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
