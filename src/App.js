import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import abi from "./abi/abi.json";
import { useState } from 'react';
import axios from 'axios';
const {ethereum}=window;
function App() {
  const SC_ADDRESS="0x5e54a7Fe92cB27229e2C534bf009F5Ee4A98BCa0";
  const web3 = new Web3('https://api.s0.ps.hmny.io');
  const ucpism = new web3.eth.Contract(abi, SC_ADDRESS);
  async function get(_id){
  ucpism.methods.idexist(_id+"@ucpi").call(function (err, res) {
    if (err) {
      console.log("An error occured", err);
      alert("ucpi id is taken");
      return
    }
    console.log("The balance is: ", res);
    if(res==false){
      
      getsign();


    }
    else{
      alert("ucpi id is taken");
    }
  });
  }
  async function getsign(){
    const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
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
    var add=evm+"$"+sol+"$"+trx+"$"+bnb+"$"+xrp;
    axios.get("http://localhost:4200/createid?id="+id+"&address="+add+"&sign="+signature+"&walletname=main&price="+price).then(res=>{
      console.log(res);
    })
    return signature;
    }
  const [id,sid]=useState("");
  const [evm,sevm]=useState("nil");
  const [sol,ssol]=useState("nil");
  const [trx,strx]=useState("nil");
  const [bnb,sbnb]=useState("nil");
  const [xrp,sxrp]=useState("nil");
  const [price,sprice]=useState();
  return (
    <div className="App">
      <div class="form-box">
  <h1>ucpiname</h1>
  <p>Make ucpi name now</p>

    <div class="form-group">
      <label for="name">ucpi-id(name@ucpi)*</label>
      <input class="form-control" id="name" onChange={(e)=>{
      if(e.target.value.includes(" ")){
        alert("no space allowed");
      }
      else{
     const result = e.target.value.replace(/[^a-z0-9]/gi, '');
      sid(result);
      }
      
    
      }} required type="text" value={id} name="Name"/>
    </div>
    <div class="form-group">
      <label for="email">solana address</label>
      <input class="form-control" onChange={(e)=>{
      ssol(e.target.value);
      console.log(id);
      }} id="email" type="text" name="Email"/>
    </div>
    <div class="form-group">
      <label for="email">tron address</label>
      <input class="form-control" id="email" onChange={(e)=>{
      strx(e.target.value);
      console.log(id);
      }} type="text" name="Email"/>
    </div>
    <div class="form-group">
      <label for="email">bnb address</label>
      <input class="form-control" id="email" onChange={(e)=>{
      sbnb(e.target.value);
      console.log(id);
      }} type="text" name="Email"/>
    </div>
    <div class="form-group">
      <label for="email">xrp address</label>
      <input class="form-control" id="email" onChange={(e)=>{
      sxrp(e.target.value);
      console.log(id);
      }} type="text" name="Email"/>
    </div>
    <div class="form-group">
      <label for="email">resale price</label>
      <input class="form-control" id="email" onChange={(e)=>{
      sprice(e.target.value);
      console.log(id);
      }} type="number" name="Email"/>
    </div>
    <input class="btn btn-primary" type="submit" value="Submit" onClick={()=>{
     // if(checker()==true){
        get(id);    
   //   }
 
    }} />
    </div>
    </div>
    
  );
}

export default App;
