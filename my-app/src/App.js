import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SingleProject from "./pages/SingleProj";
import MultipleProj from "./pages/MultiProj";




function App() {
  return (
    <Routes>
     <Route exact path="/" element={<Home/>}></Route>
     <Route exact path="/single" element={<SingleProject/>}></Route>
     <Route exact path="/multi" element={<MultipleProj/>}></Route>
    </Routes>
      
    
  );
}

export default App;
