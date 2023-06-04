import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SingleProject from "./pages/SingleProj";
import MultipleProj from "./pages/MultiProj";

import ContactUs from "./pages/ContactUs";


import Services from "./pages/Services";
import Studio from "./pages/Studio";





function App() {
  return (
    <Routes>
     <Route exact path="/" element={<Home/>}></Route>
     <Route exact path="/single" element={<SingleProject/>}></Route>
     <Route exact path="/multi" element={<MultipleProj/>}></Route>

     <Route exact path="/contact" element={<ContactUs/>}></Route>

     <Route exact path="/services" element={<Services/>}></Route>
     <Route exact path="/studio" element={<Studio/>}></Route>

    </Routes>
      
    
  );
}

export default App;
