import { Link } from "react-router-dom";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import NewNav from "../components/newnav/NewNav";
import styles from "./multiproj.module.css";
const MultipleProj = () => {
  return (
    
   
    <div className={styles.multiparent}>
    <NewNav/>
      <div className={styles.group}>
        <div className={styles.projHead}>
          <div className={styles.tagStyle}>RECENT WORKS</div>
          <div className={styles.mainHead}>
            Let's Build Something Great Together
          </div>
        </div>
        <div className={styles.subHead}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
          purus pulvinar, vehicula lacus nec, facilisis ex. Fusce a sem lorem.
          Donec a fringilla libero.
        </div>
      </div>
      <div className="container my-24 px-6 mx-auto">
        {/* Section: Design Block */}
        <section className="mb-32 text-gray-800 text-center lg:text-left" id="container">
          
          <div className="grid lg:grid-cols-3 gap-x-6" id={styles.contain}>
            <div className="mb-12 lg:mb-0">
              <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6" style={{backgroundPosition: '50%'}} data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/city/041.jpg" className="w-full" />
                <a href="/single">
                  <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
                </a>
              </div>
              <h5 className="text-lg font-bold mb-3">The Only Burger</h5>
              
              <p className="text-gray-500">
                Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                placerat vulputate. Ut vulputate est non quam dignissim
                elementum. Donec a ullamcorper diam.
              </p>
            </div>
            <div className="mb-12 lg:mb-0">
              <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6" style={{backgroundPosition: '50%'}} data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/city/045.jpg" className="w-full" />
                <a href="#!">
                  <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
                </a>
              </div>
              <h5 className="text-lg font-bold mb-3">Big Apple</h5>
              
              <p className="text-gray-500">
                Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
                orci, nec ornare metus semper sed. Integer volutpat ornare erat
                sit amet rutrum.
              </p>
            </div>
            <div className="mb-0">
              <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6" style={{backgroundPosition: '50%'}} data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" className="w-full" />
                <a href="#!">
                  <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
                </a>
              </div>
              <h5 className="text-lg font-bold mb-3">Sun City</h5>
             
              <p className="text-gray-500">
                Curabitur tristique, mi a mollis sagittis, metus felis mattis
                arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
                massa volutpat feugiat. Donec.
              </p>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </div>
      <div className="container my-24 px-6 mx-auto">
        {/* Section: Design Block */}
        <section className="mb-32 text-gray-800 text-center lg:text-left" id="container">
          
          <div className="grid lg:grid-cols-3 gap-x-6" id={styles.contain}>
            <div className="mb-12 lg:mb-0">
              <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6" style={{backgroundPosition: '50%'}} data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80" className="w-full" />
                <a href="#!">
                  <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
                </a>
              </div>
              <h5 className="text-lg font-bold mb-3">Mangos Exhibition</h5>
              
              <p className="text-gray-500">
                Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                placerat vulputate. Ut vulputate est non quam dignissim
                elementum. Donec a ullamcorper diam.
              </p>
            </div>
            <div className="mb-12 lg:mb-0">
              <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6" style={{backgroundPosition: '50%'}} data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" className="w-full" />
                <a href="#!">
                  <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
                </a>
              </div>
              <h5 className="text-lg font-bold mb-3">Kashyaps Apple</h5>
              
              <p className="text-gray-500">
                Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
                orci, nec ornare metus semper sed. Integer volutpat ornare erat
                sit amet rutrum.
              </p>
            </div>
            <div className="mb-0">
              <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6" style={{backgroundPosition: '50%'}} data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img src="https://plus.unsplash.com/premium_photo-1680246615216-4b958369b5b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" className="w-full" />
                <a href="#!">
                  <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
                </a>
              </div>
              <h5 className="text-lg font-bold mb-3">Lostinsoul City</h5>
             
              <p className="text-gray-500">
                Curabitur tristique, mi a mollis sagittis, metus felis mattis
                arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
                massa volutpat feugiat. Donec.
              </p>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </div>
      <Contact/>
      <div className={styles.void}></div>
      <Footer/>
    </div>
    
  );
};

export default MultipleProj;
