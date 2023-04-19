import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import './app.css'
import Footer from "./components/footer/Footer";
import News from "./components/news/News";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact";



function App() {
  return (
    <Router>
      <Navbar/>
    <Team/>
    <Contact/>
      <News/>
      <Footer/>
    </Router>
      
    
  );
}

export default App;
