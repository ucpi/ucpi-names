import React from "react";
import "./Blockchain.css";
import eth from "./ethereum-eth-logo.png";
import bnb from "./bnb-bnb-logo.png";
import sol from "./solana-sol-logo.png";
import trx from "./tron-trx-logo.png";
import avax from "./avalanche-avax-logo.png";

const Blockchain = () => {
  return (
    <div className="blockchain-container">
      <div className="heading">
        <h1>urname@ucpi</h1>
      </div>
      <div className="blockchain-wrapper">
        <div className="img-container">
          <img src={eth} alt="etherium" className="img eth" />
          <img src={bnb} alt="bnb" className="img bnb" />
          <img src={sol} alt="solana" className="img sol" />
          <img src={trx} alt="tron" className="img trx" />
          <img src={avax} alt="avalanche" className="img avax" />
        </div>
      </div>
    </div>
  );
};

export default Blockchain;
