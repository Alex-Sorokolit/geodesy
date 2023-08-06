import "./App.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import Contacts from "../Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;
