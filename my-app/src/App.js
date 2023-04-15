import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import './app.css'
import Footer from "./components/footer/Footer";


function App() {
  return (
    <Router>
      <Navbar/>
      <Footer/>
    </Router>
      
    
  );
}

export default App;
