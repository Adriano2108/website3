import React from "react";

export default function HomeTop({setPage}) {

  const [left, setLeft] = React.useState(1)

  function navClick1() {
    setLeft(1)
    setPage(1)
  }

  function navClick2() {
    setLeft(2)
    setPage(2)
  }

  function navClick3() {
    setLeft(3)
    setPage(3)
  }

  function buttonClick1() {
    setPage(1)
  }

  function buttonClick2() {
    setPage(2)
  }

  function buttonClick3() {
    setPage(3)
  }

  return (
    
    <div className="top-container">

      <div className="top-top">
        <div className="top-left">
          <img src="/assets/AdrianoTag.png" alt="adriano name"/>
          <p className="top-subtitle">Business student passionate about tech & digital products</p>
        </div>
        <img className="globe-image" alt="globe" src="/assets/globeimage.png"/>
      </div>
      <div className="top-buttons">
        <button onClick={buttonClick1}>
          <img src="/assets/briefcase.png" alt="briefaces"/>
          <p>Work</p>
        </button>
        <button onClick={buttonClick2}>
          <img src="/assets/code.png" alt="code brackets"/>
          <p>Projects</p>
        </button>
        <button onClick={buttonClick3}>
          <img src="/assets/smiley.png" alt="smiley"/>
          <p>About</p>
        </button>
      </div>
      <div className="mid-navigator">
        <img src="/assets/navigator.png" alt="navigator"/>
        <span className="nav-clickable1" onClick={navClick1}></span>
        <span className="nav-clickable2" onClick={navClick2}></span>
        <span className="nav-clickable3" onClick={navClick3}></span>
        <span className={`dot${left}`}></span>
      </div>
    </div>
  )
}