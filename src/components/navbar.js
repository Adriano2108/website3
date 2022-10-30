import React from "react";
import {Link} from "react-router-dom";


export default function NavBar(props) {

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

  
  console.log(props.element)

  return (
      <nav className="navbar-container">
        <div className="navbar-left">
          <Link to="/"><img onMouseOver={mouseEnter} onMouseLeave={mouseLeave} src={`/assets/me${face}.png`} alt=""/></Link>
          <Link to="/"><p style={{color: (props.path == "wefox" ? "white" : "white")}}>Adriano</p></Link>
        </div>
        <Link to="/resume"><p>Resume</p></Link>
      </nav>
  );
}


  