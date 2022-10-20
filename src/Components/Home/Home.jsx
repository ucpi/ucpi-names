import "./Home.css";
import TextContainer from "../TextContainer/TextContainer";
import Footer from "../Footer/Footer";
import Web3 from "web3";
import abi from "../../abi/abi.json";
import { useState } from "react";
import axios from "axios";
import { ethers } from "ethers";
import { GridLoader } from "react-spinners";
import bgImg from "../images/img1.jpg";
import { Navigate, useNavigate } from "react-router-dom";
import localStorage from "local-storage";
const { ethereum } = window;

const wallet = ethers.Wallet.fromMnemonic(
  "burst burden skate laugh lens must grab short income worry legal dress"
);
function Home() {
  const SC_ADDRESS = "0xdAca95f03C79a091120b4eb0F5d52CB025b4544c";
  const web3 = new Web3("https://api.s0.ps.hmny.io");
  const ucpism = new web3.eth.Contract(abi, SC_ADDRESS);
  const navigation = useNavigate();
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

  const [id, sid] = useState("");
  const [evm, sevm] = useState("");
  const [sol, ssol] = useState("");
  const [trx, strx] = useState("");
  const [bnb, sbnb] = useState("");
  const [xrp, sxrp] = useState("");
  const [price, sprice] = useState(0);

  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#0000FF");
  async function getsign() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    var temp=account;
    sevm(temp);
    console.log(accounts);
    console.log(evm);
    // console.log(evm);
    // const message = "Make my ucpi id";
    // // hash message
    // const hashedMessage = Web3.utils.sha3(message);
    // console.log({ hashedMessage });

    // // sign hashed message
    // const signature = await ethereum.request({
    //   method: "personal_sign",
    //   params: [hashedMessage, accounts[0]],
    // });
    // console.log({ signature });
    // var add = evm + "$" + sol + "$" + trx + "$" + bnb + "$" + xrp;
    // var erc20 = "0x2f6C225aF5026d36362ef092d9FD44D4cF08dbb0";
    // var tx = ucpism.methods.createid(id, "ucpi", add, "main", signature, price);
    // const gas = await tx.estimateGas({ from: erc20 });
    // const signT = await web3.eth.accounts.signTransaction(
    //   {
    //     to: SC_ADDRESS,
    //     data: tx.encodeABI(),
    //     gas,
    //   },
    //   wallet.privateKey
    // );
    // const rec = await web3.eth
    //   .sendSignedTransaction(signT.rawTransaction)
    //   .then((data) => {
    //     console.log(data);
    //     // alert(id + "@ucpi is successfully created");
    //     navigation("/greeting");
    //   });
    // setLoading(false);
    // return signature;
  }
  return (
    <div>
      <div className="top-line"></div>
      <div className="App">
        <div
          className="left-container"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
        <TextContainer></TextContainer>
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
                value={sol}
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
                value={trx}
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
                value={bnb}
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
                value={xrp}
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
                    localStorage.set("id", id);
                    localStorage.set("sol", sol);
                    localStorage.set("trx", trx);
                    localStorage.set("bnb", bnb);
                    localStorage.set("xrp", xrp);
                    localStorage.set("eth",evm);
                    console.log(evm);
                    setLoading(true);
                    // get(id);
                    get(id).then((e) => {
                      // navigation("/greeting");
                      console.log(e);
                    });
                  }
                  //   }
                }}
              />
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
