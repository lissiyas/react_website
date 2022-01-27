import React from "react";
import Footer from "./components/Footer";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Contact from "./components/Contact";
import "./index.css";
import "./components/footer.scss";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className=" body  ">
      <div className="content-wrap">
        <Router>
          <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
