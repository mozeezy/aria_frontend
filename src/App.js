import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Model from "./components/Model/Model";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Map />
      <Model />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
