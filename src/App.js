import "./App.css";
import Web3 from "web3";
import abi from "./abi/abi.json";
import { useEffect, useState } from "react";
import axios from "axios";
import { ethers } from "ethers";
import { GridLoader } from "react-spinners";
import bgImg from "./images/img1.jpg";
const { ethereum } = window;

const wallet = ethers.Wallet.fromMnemonic(
  "burst burden skate laugh lens must grab short income worry legal dress"
);
function App() {
  const SC_ADDRESS = "0xdAca95f03C79a091120b4eb0F5d52CB025b4544c";
  const web3 = new Web3("https://api.s0.ps.hmny.io");
  const ucpism = new web3.eth.Contract(abi, SC_ADDRESS);
  async function get(_id) {
    ucpism.methods.idexist(_id + "@ucpi").call(function (err, res) {
      if (err) {
        console.log("An error occured", err);
        alert("ucpi id is taken");
        return;
      }
      console.log("The balance is: ", res);
      if (res == false) {
        getsign();
      } else {
        alert("ucpi id is taken");
        setLoading(false);
      }
    });
  }
  async function getsign() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    sevm(account);
    console.log(account);
    const message = "Make my ucpi id";
    // hash message
    const hashedMessage = Web3.utils.sha3(message);
    console.log({ hashedMessage });

    // sign hashed message
    const signature = await ethereum.request({
      method: "personal_sign",
      params: [hashedMessage, accounts[0]],
    });
    console.log({ signature });
    var add = evm + "$" + sol + "$" + trx + "$" + bnb + "$" + xrp;
    var erc20 = "0x2f6C225aF5026d36362ef092d9FD44D4cF08dbb0";
    var tx = ucpism.methods.createid(id, "ucpi", add, "main", signature, price);
    const gas = await tx.estimateGas({ from: erc20 });
    const signT = await web3.eth.accounts.signTransaction(
      {
        to: SC_ADDRESS,
        data: tx.encodeABI(),
        gas,
      },
      wallet.privateKey
    );
    const rec = await web3.eth
      .sendSignedTransaction(signT.rawTransaction)
      .then((data) => {
        console.log(data);
        alert(id + "@ucpi is successfully created");
      });
    setLoading(false);
    return signature;
  }
  const [id, sid] = useState("");
  const [evm, sevm] = useState("nil");
  const [sol, ssol] = useState("nil");
  const [trx, strx] = useState("nil");
  const [bnb, sbnb] = useState("nil");
  const [xrp, sxrp] = useState("nil");
  const [price, sprice] = useState(0);

  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#0000FF");

  return (
    <div>
      <div className="top-line"></div>
      <div className="App">
        <div
          className="left-container"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
        <div className="text-container">
          <div className="text-wrapper">
            <h1>
              5 Blockchain Addresses into <span>SINGLE ID</span>
            </h1>
            <p>Readabe ID's "FREE"</p>
            <ul>
              <li>Connect Wallet and Claim Addresses</li>
              <li>Bid Resole Value for your ID's</li>
              <li>Use ID's in Partial Dapps</li>
            </ul>
          </div>
          <div className="footer">
            <p>Connect with Us:</p>
            <div className="btn-container">
              <a href="">
                Twitter <i class="fa-brands fa-twitter icon"></i>
              </a>

              <a href="">
                Discord <i class="fa-brands fa-discord icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="right-container">
          {loading ? (
            <div className="loadr">
              <GridLoader color={color} loading={loading} size={30} />
            </div>
          ) : (
            <div class="form-box">
              <h1>UCPI name</h1>
              <p>Make your ucpiname now</p>

              <input
                placeholder="ucpi-id (name@ucpi)*"
                class="form-control"
                id="name"
                onChange={(e) => {
                  if (e.target.value.includes(" ")) {
                    alert("no space allowed");
                  } else {
                    const result = e.target.value.replace(/[^a-z0-9]/gi, "");
                    sid(result);
                  }
                }}
                required
                type="text"
                value={id}
                name="Name"
              />

              <input
                placeholder="Solana Address"
                class="form-control"
                onChange={(e) => {
                  ssol(e.target.value);
                  console.log(id);
                }}
                id="email"
                type="text"
                name="Email"
              />
              <input
                placeholder="Tron address"
                class="form-control"
                id="email"
                onChange={(e) => {
                  strx(e.target.value);
                  console.log(id);
                }}
                type="text"
                name="Email"
              />
              <input
                placeholder="BNB Adress"
                class="form-control"
                id="email"
                onChange={(e) => {
                  sbnb(e.target.value);
                  console.log(id);
                }}
                type="text"
                name="Email"
              />
              <input
                placeholder="XRP Adress"
                class="form-control"
                id="email"
                onChange={(e) => {
                  sxrp(e.target.value);
                  console.log(id);
                }}
                type="text"
                name="Email"
              />
              <input
                placeholder="Resale Price"
                class="form-control"
                id="email"
                onChange={(e) => {
                  sprice(e.target.value);
                  console.log(id);
                }}
                type="number"
                name="Email"
              />
              <input
                class="form-btn"
                type="submit"
                value="Submit"
                onClick={() => {
                  // if(checker()==true){
                  if (id == "" || price == 0) {
                    if (id == "") {
                      alert("Please fill your id");
                    }
                    if (price == 0) {
                      alert("please set your resell price of your id");
                    }
                  } else {
                    setLoading(true);
                    get(id);
                  }
                  //   }
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
