import React, { useEffect, useState } from "react";
import localStorage from "local-storage";
import greetImg from "./greeting.webp";
import "./Greeting.css";

const Greeting = () => {
  const [id, sid] = useState(localStorage.get("id"));
  // useEffect(() => {
  //   setId("sid");
  // }, [id]);
  const [sol, ssol] = useState(localStorage.get("sol"));
  const [trx, strx] = useState(localStorage.get("trx"));
  const [bnb, sbnb] = useState(localStorage.get("bnb"));
  const [xrp, sxrp] = useState(localStorage.get("xrp"));
  return (
    <div className="root-container">
      <div className="card">
        <img src={greetImg} className="greet-img" alt="greet" />
        <div className="greet-text-wrapper">
          <div className="greet-head">
            <h1>Congratulations!!</h1>
            <p>ID {id} is now your's</p>
          </div>
          <div className="greet-body">
            <p>It is attatched to,</p>
            <ul>
              <li>{sol} for Solana</li>
              <li>{trx} for Tron</li>
              <li>{bnb} for BNB</li>
              <li>{xrp} for XRP</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
