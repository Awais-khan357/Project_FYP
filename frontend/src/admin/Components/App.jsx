import Sidebar from "./Sidebar";

import Home from "./Home";
import "./sidebg.css";

import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="container-fluid home-bg min-vh-100 ">
      <div className="row ">
        {toggle && (
          <div className="col-4 col-md-2 sidebg vh-100 position-fixed">
            <Sidebar />
          </div>
        )}
        {toggle && <div className="col-4 col-md-2"></div>}
        <div className="col">
          <Home Toggle={Toggle} />
        </div>
      </div>
    </div>
  );
}

export default App;
