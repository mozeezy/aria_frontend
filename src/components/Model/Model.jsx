import React from "react";
import Aria from "./aria.JPG"
import "./Model.css"
export default function Model () {


return (
  <section id="model">
    <div className="aria-img">
    <h3 style={{padding: "1rem"}}>Introducing Aria</h3>
      <img src={Aria} alt="aria-model" />
    </div>
  </section>
)
}