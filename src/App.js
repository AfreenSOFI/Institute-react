import './App.css';
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import Program from './Components/Program';
import Title from './Components/Title';
import About from './Components/About';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <div className="container">
     <Title subtitle='Our Programs' title='What We Offer'/>
     <Program/>
     <About/> 
     <Title subtitle='Gallery' title='Institute Photos'/>
     <Gallery/>
     <Title subtitle='Testimonial' title='What Students Says'/>
     <Testimonial/>
     <Title subtitle='Contact Us' title='Get In Touch'/>
     <Contact/>
     <Footer/>
     </div>
     
    </div>
  );
}

export default App;
