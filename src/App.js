import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Blog from "./pages/Blog";

const App = () => {
  <Router>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/blog" element={ <Blog />} />
      <Route path="/about" element={ <About />} />
    </Routes>
  </Router>
}
export default App;
