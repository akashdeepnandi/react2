import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [box, setBox] = useState<any>(null);
  const [lastBox, setLastBox] = useState<any>(null);
  const handleClick = () => {
    try {
      const num = Number(box);
      if (lastBox) {
        const el = document.getElementById(lastBox.toString());
        // @ts-ignore
        el.style.backgroundColor = "white";
      }
      if (!isNaN(num)) {
        const el = document.getElementById(num.toString());
        // @ts-ignore
        el.style.backgroundColor = "red";
        setLastBox(box);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setBox(e.target.value)}
            />
            <button
              className="btn btn-primary"
              style={{
                borderRadius: "25px",
                marginTop: "5rem",
              }}
              onClick={handleClick}
            >
              Color me
            </button>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <div className="col" id="1">
              1
            </div>
            <div className="col" id="2">
              2
            </div>
            <div className="col" id="3">
              3
            </div>
          </div>
          <div className="row">
            <div className="col" id="4">
              4
            </div>
            <div className="col" id="5">
              5
            </div>
            <div className="col" id="6">
              6
            </div>
          </div>
          <div className="row">
            <div className="col" id="7">
              7
            </div>
            <div className="col" id="8">
              8
            </div>
            <div className="col" id="9">
              9
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
