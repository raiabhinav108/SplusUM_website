import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import './app.css'
import Footer from "./components/footer/Footer";
import News from "./components/news/News";



function App() {
  return (
    <Router>
      <Navbar/>
    
      <News/>
      <Footer/>
    </Router>
      
    
  );
}

export default App;
