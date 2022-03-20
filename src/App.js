import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import NodesList from "./NodesList";
import NodeEdit from "./NodeEdit";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="nodes" element={<NodesList />} />
        <Route path="node/:id/edit" element={<NodeEdit />} />
      </Routes>
    </div>
  );
}

export default App;
