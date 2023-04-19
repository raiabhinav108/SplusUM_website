import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import './app.css'

import Slider from "./components/slider/Slider";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import OurServices from "./components/ourServices/OurServices";

import Footer from "./components/footer/Footer";
import News from "./components/news/News";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact";




function App() {
  return (
    <Router>
      <Navbar/>

      <Slider/>
      <Projects/>
      <About/>
      <ImageSlider/>
      <OurServices/>
    <Team/>
    <Contact/>
      <News/>
      <Footer/>

    </Router>
      
    
  );
}

export default App;
