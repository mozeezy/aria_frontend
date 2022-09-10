import React from "react";
import "./Navbar.css";
export default function Navbar () {


return (
 
  <nav class="navbar navbar-expand-lg">
  <div class="container-md">
    <a class="navbar-brand" href="#">ARIA</a>
  </div>

<div class="navbar-button">
<button type="button" class="btn btn-dark">Account</button>
</div>

<div class="navbar-login">
<button type="button" class="btn btn-outline-dark">Login</button>
</div>

  </nav>
)
}