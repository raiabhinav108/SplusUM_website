import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SingleProject from "./pages/SingleProj";




function App() {
  return (
    <Routes>
     <Route exact path="/" element={<Home/>}></Route>
     <Route exact path="/single" element={<SingleProject/>}></Route>
    </Routes>
      
    
  );
}

export default App;
