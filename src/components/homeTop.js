export default function HomeTop() {

  return (
    
    <div className="top-container">

      <div className="top-top">
        <div className="top-left">
          <img src="/assets/AdrianoTag.png"/>
          <p className="top-subtitle">Business student passionate about tech & digital products</p>
        </div>
        <img className="globe-image" src="/assets/globeimage.png"/>
      </div>
      <div className="top-buttons">
        <button>
          <img src="/assets/briefcase.png"/>
          <p>Work</p>
        </button>
        <button>
          <img src="/assets/code.png"/>
          <p>Projects</p>
        </button>
        <button>
          <img src="/assets/smiley.png"/>
          <p>About</p>
        </button>
      </div>

    </div>
  )
}