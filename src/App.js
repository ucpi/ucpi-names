import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Blockchain from "./Components/Blockchain/Blockchain";
import bgImg from "./images/img3.jpg";
import Benefits from "./Components/Benefits/Benefits";
import Form from "./Components/Form/Form";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="section-1">
        <div class="img-wrapper">
          <img src={bgImg} />
        </div>
        <Navbar />
        <div className="home-container">
          <Home />
          <Blockchain />
        </div>
      </div>
      <div className="section-2">
        <Benefits />
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
