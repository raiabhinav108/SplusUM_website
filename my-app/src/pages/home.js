
import Navbar from "../components/navbar/Navbar";
import "../app.css";
import "./home.css"
import Slider from "../components/slider/Slider";
import Projects from "../components/projects/Projects";
import About from "../components/about/About";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import OurServices from "../components/ourServices/OurServices";
import { useState,useEffect } from "react";
import Footer from "../components/footer/Footer";
import News from "../components/news/News";
import Team from "../components/team/Team";
import Contact from "../components/contact/Contact";
import ClipLoader from "react-spinners/ClipLoader";

import Testimonials from "../components/testimonials/Testimonials";

import AboutSub from "../components/aboutSub/AboutSub";
import KeyWorks from "../components/keyWorks/KeyWorks";
import Hello from "../components/hello/Hello";
import NewNav from "../components/newnav/NewNav";

const Home = () => {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2500);
  }, []);
  return (
    <div>
      {
        loading ? 
        <div className="loader_mr">
        <ClipLoader
          color={"#000000"}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        /><div className="blink_me">
        
            S+UM
        </div>
        </div>
        :
        <div>
        <NewNav/>

<Slider />

<Projects />
<Hello/>
<About />

<ImageSlider />
<AboutSub />
<OurServices />
<KeyWorks/>
<Team />
<Testimonials />
<News />
<Footer />
        </div>
      }
      
      
    </div>
  );
};
export default Home;
