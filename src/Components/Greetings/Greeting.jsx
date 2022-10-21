import React, { useEffect, useState } from "react";
import localStorage from "local-storage";
import greetImg from "./greeting.webp";
import "./Greeting.css";

const Greeting = () => {
  const [id, sid] = useState(localStorage.get("id"));
  const [sol, ssol] = useState(localStorage.get("sol"));
  const [trx, strx] = useState(localStorage.get("trx"));
  const [bnb, sbnb] = useState(localStorage.get("bnb"));
  const [xrp, sxrp] = useState(localStorage.get("xrp"));
  const [eth,seth]=useState(localStorage.get("eth"));
  const [c,sc]=useState(false);
  useEffect(()=>{
 //   alert(eth);
  if(sol==""){
    ssol("undefine");
  }
  if(trx==""){
    strx("undefine");
  }
  if(bnb==""){
    sbnb("undefine");
  }
  if(xrp==""){
    sxrp("undefine");
  }
  })
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
            <li><span>"{eth}"</span> for evm chains</li>
              {sol!="undefine"?<li><span>"{sol}"</span> for Solana</li>:<div></div>}
              {trx!="undefine"?<li><span>"{trx}"</span> for Tron</li>:<div></div>}
              {bnb!="undefine"?<li><span>"{bnb}"</span> for bnb</li>:<div></div>}
              {xrp!="undefine"?<li><span>"{xrp}"</span> for XRP</li>:<div></div>}        
              {/* {<li>{xrp} for XRP</li>} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
