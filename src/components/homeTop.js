export default function HomeTop() {

  return (
    
    <div className="top-container">

      <div className="top-top">
        <div className="top-left">
          <img src="/assets/AdrianoTag.png" alt="adriano name"/>
          <p className="top-subtitle">Business student passionate about tech & digital products</p>
        </div>
        <img className="globe-image" src="/assets/globeimage.png"/>
      </div>
      <div className="top-buttons">
        <button>
          <img src="/assets/briefcase.png" alt="briefaces"/>
          <p>Work</p>
        </button>
        <button>
          <img src="/assets/code.png" alt="code brackets"/>
          <p>Projects</p>
        </button>
        <button>
          <img src="/assets/smiley.png" alt="smiley"/>
          <p>About</p>
        </button>
      </div>

      <div className="mid-navigator">
        <img src="/assets/navigator.png" alt="navigator"/>
      </div>

    </div>
  )
}