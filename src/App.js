import React from "react";
import './App.css';
import Resume from "./pages/resume";
import Main from "./pages/main"
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Wefox from "./pages/wefox";
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
       <Route path="/" element={<Main />} />
       <Route path="resume" element={<Resume />} />
       <Route path="wefox" element={<Wefox />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
