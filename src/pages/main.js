import React from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer'
import HomeTop from '../components/homeTop';
import Work from './work';
import Projects from './projects';
import About from './about';

function Main() {

  const [page, setPage] = React.useState(1)


  function renderPage() {
    if (page === 1) {
      return (<Work />)
    } else if (page === 2){
      return (<Projects />)
    } else if (page === 3){
      return (<About />)
    }
  }

  return (
      <div className="Main">
        <HomeTop setPage={setPage}/>
        {renderPage()}
      </div>
  );
}

export default Main;
