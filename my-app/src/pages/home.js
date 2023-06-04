
import Navbar from "../components/navbar/Navbar";
import "../app.css";

import Slider from "../components/slider/Slider";
import Projects from "../components/projects/Projects";
import About from "../components/about/About";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import OurServices from "../components/ourServices/OurServices";

import Footer from "../components/footer/Footer";
import News from "../components/news/News";
import Team from "../components/team/Team";
import Contact from "../components/contact/Contact";

import Testimonials from "../components/testimonials/Testimonials";

import AboutSub from "../components/aboutSub/AboutSub";
import KeyWorks from "../components/keyWorks/KeyWorks";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Slider />

      <Projects />
      <Contact />
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
  );
};
export default Home;
