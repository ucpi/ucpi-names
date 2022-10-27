import "./Form.css";
import Web3 from "web3";
import abi from "../../abi/abi.json";
import { useState } from "react";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
import localStorage from "local-storage";
const { ethereum } = window;

const wallet = ethers.Wallet.fromMnemonic(
  "burst burden skate laugh lens must grab short income worry legal dress"
);
function Form() {
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

  async function getsign() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    // var temp=account;
    // sevm(accounts[0]);
    // console.log(accounts[0]);
    // console.log(evm);
    localStorage.set("eth", account);

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

        navigation("/greeting");
      });
    setLoading(false);
    return signature;
  }
  return (
    <div class="form-box">
      <h1>UCPI name</h1>
      <p>Make your ucpiname now</p>
      <form>
        <div className="input-group">
          <input
            class="field"
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
          <label className="input-label">
            ucpi-id (name@ucpi)<span class="asterisk_input"> </span>
          </label>
        </div>
        <div className="input-group">
          <input
            class="field"
            id="email"
            onChange={(e) => {
              sprice(e.target.value);
              console.log(id);
            }}
            type="number"
            name="Email"
          />
          <label className="input-label">
            Resale Price <span class="asterisk_input"> </span>
          </label>
        </div>
        <input
          class="submit-btn"
          type="submit"
          value="Claim Now"
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
              // localStorage.set("eth",evm);
              console.log(evm);
              //                     getsign();
              // navigation("/greeting");

              setLoading(true);
              // get(id);
              get(id).then((e) => {
                navigation("/greeting");
                console.log(e);
              });
            }
            //   }
          }}
        />
      </form>
    </div>
  );
}
export default Form;
