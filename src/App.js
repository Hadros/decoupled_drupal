import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./main.css";
import Home from "./Home";
import About from "./About";
import NodesList from "./NodesList";
import NodeEdit from "./NodeEdit";
import NodeCreateSubrequests from "./NodeCreateSubrequests";
import NodesListSubrequests from "./NodesListSubrequests";
import NodeEditSubrequests from "./NodeEditSubrequests";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="nodes" element={<NodesList />} />
        <Route path="node-subrequests" element={<NodesListSubrequests />} />
        <Route path="node/final-form/create" element={<NodeCreateSubrequests />} />
        <Route path="node/:id/edit" element={<NodeEdit />} />
        <Route path="node/:id/edit-subrequests" element={<NodeEditSubrequests />} />
      </Routes>
    </div>
  );
}

export default App;
