import {Link} from "react-router-dom";

export default function Work() {

  return (

    <div className="work-container">
      <div className="grid-1">
        <Link to="/wefox"><img alt="wefox" className="grid-image" src="/assets/wefox.png"/></Link>
        <div className="grid-content">
          <h3>Product Management Intern</h3>
          <p><span className="semi-bold">wefox</span> &#x2022; Product &#x2022; 2022</p>
          <p><span className="semi-bold">Tech Used:</span> Confluence, Jira, Excel, Miro, Figma, Lokalize</p>
        </div>
      </div>
      <div className="grid-2">
        <img alt="karl lagerfeld" className="grid-image" src="/assets/kl.png"/>
        <div className="grid-content">
          <h3>Wholesale Intern</h3>
          <p><span className="semi-bold">Karl Lagerfeld</span> &#x2022; Sales &#x2022; 2021</p>
          <p><span className="semi-bold">Tech Used:</span> Excel, SAP, Powerpoint, Sharepoint</p>
        </div>
      </div>
      <div className="grid-3">
        <img alt="kering" className="grid-image" src="/assets/kering.png"/>
        <div className="grid-content">
          <h3>Marketing Intern</h3>
          <p><span className="semi-bold">Kering</span> &#x2022; Marketing &#x2022; 2020</p>
          <p><span className="semi-bold">Tech Used:</span> Excel, Adobe Photoshop, Powerpoint, SAP, Adobe Premiere Pro</p>
        </div>
      </div>
    </div>
  )
}