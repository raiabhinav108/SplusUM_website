import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SingleProject from "./pages/SingleProj";
import MultipleProj from "./pages/MultiProj";
import Services from "./pages/Services";




function App() {
  return (
    <Routes>
     <Route exact path="/" element={<Home/>}></Route>
     <Route exact path="/single" element={<SingleProject/>}></Route>
     <Route exact path="/multi" element={<MultipleProj/>}></Route>
     <Route exact path="/services" element={<Services/>}></Route>
    </Routes>
      
    
  );
}

export default App;
