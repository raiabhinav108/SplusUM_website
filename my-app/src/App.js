import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import './app.css'
import Slider from "./components/slider/Slider";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import OurServices from "./components/ourServices/OurServices";



function App() {
  return (
    <Router>
      <Navbar/>
      <Slider/>
      <Projects/>
      <About/>
      <ImageSlider/>
      
    </Router>
      
    
  );
}

export default App;
