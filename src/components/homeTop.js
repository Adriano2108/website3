import React from "react";

export default function HomeTop({setPage, page}) {

  const [left, setLeft] = React.useState(1)
  const [border, setBorder] = React.useState("")

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

  const array = [{key: 1, imgURL: "/assets/briefcase.png", imgAlt: "briefaces", text: "Work", pageNum: "1"}, {key: 2, imgURL: "/assets/code.png", imgAlt: "code", text: "Projects", pageNum: "2"}, {key: 3, imgURL: "/assets/smiley.png", imgAlt: "smiley", text: "About", pageNum: "3"}]
  
  {/* 
  const buttons = array.map((btn) => (
    <button key={btn.key} className={btn.pageNum===page ? "selected" : "not"} onClick={navClick1}>
      <img src={btn.imgURL} alt={btn.imgAlt}/>
      <p>{btn.text}</p>
    </button>
  ))
  */}

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
        <button onClick={navClick1}>
          <img src="/assets/briefcase.png" alt="briefcase"/>
          <p>Work</p>
        </button>
        <button onClick={navClick2}>
          <img src="/assets/code.png" alt="code"/>
          <p>Projects</p>
        </button>
        <button onClick={navClick3}>
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