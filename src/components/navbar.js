import { useState } from "react";
import React from "react";

export default function NavBar() {

  const [count, setCount] = React.useState(1)

  const [face, setFace] = React.useState("smile")

  function mouseEnter() {
    setCount(prevState => prevState + 1)

    if (count >= 11) {
      setFace("star")
    } else {
      setFace("happy")
    }
  }

  function mouseLeave() {

    if (count >= 11) {
      setFace("star")
    } else {
      setFace("smile")
    }
  }

  return (

    <nav className="navbar-container">
      <div className="navbar-left">
        <img onMouseOver={mouseEnter} onMouseLeave={mouseLeave} src={`/assets/me${face}.png`} alt=""/>
        <p>Adriano</p>
      </div>
      <p>Resume</p>
    </nav>

  );
}


  