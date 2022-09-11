import React from "react";
import "./Navbar.css";
export default function Navbar () {


return (
 
  <nav className="navbar">
  <div className="container-md">
    <a className="navbar-brand" href="#">ARIA</a>
  </div>

<div className="navbar-button">
<button type="button" className="btn btn-dark">New Account</button>
<button type="button" className="btn btn-outline-dark">Login</button>
</div>


  </nav>
)
}