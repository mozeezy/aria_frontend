import React from "react";
import './Header.css';

export default function Header () {


return (
  <header id="header">
    <div className="header-text">
      <h2>Hello, Technovengers. Know Where You Wanna Go?</h2>
    </div>
    <div className="cta-button">
    <button type="button" class="btn btn-warning">Choose Your Destination</button>
    </div>
  </header>
)
}