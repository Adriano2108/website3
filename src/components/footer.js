import React from "react";

export default function Footer() {

  const [built, setBuilt] = React.useState("Website <span className='bold'>built</span> by me")

  function builtDiff() {

  }


  return (

    <div className="footer-container">
      <div className="social-links">
        <a target="_blank" href="https://www.linkedin.com/in/adrianobarbet/"><img src="/assets/linkedin.png"/></a>
        <a target="_blank" href="mailto:abarbet21@gmail.com"><img src="/assets/email.png"/></a>
        <a target="_blank" href="https://www.linkedin.com/in/adrianobarbet/"><img src="/assets/github.png"/></a>
      </div>
      <p>Copyright 2022 &#169; Adriano Barbet</p>
      <p onMouseOver={builtDiff}>{built}</p>
    </div>


  )
}