import "./App.css";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Testymonials from "./components/Testymonials/Testymonials";

function App() {
  return (
    <main className=" overflow-x-hidden ">

      <Hero />
      <About/>
      <Services/>
      <Testymonials/>
      <ContactUs/>
      <Footer/>
    </main>
  );
}

export default App;
