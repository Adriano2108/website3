import React from "react";
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer'
import HomeTop from './components/homeTop';
import Work from './pages/work';
import Projects from './pages/projects';
import About from './pages/about';

function App() {

  const [page, setPage] = React.useState(1)

  function renderPage() {
    if (page == 1) {
      return (<Work />)
    } else if (page == 2){
      return (<Projects />)
    } else if (page == 3){
      return (<About />)
    }
  }

  return (
    <div className="App">
      <Navbar />
      <HomeTop setPage={setPage}/>
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
