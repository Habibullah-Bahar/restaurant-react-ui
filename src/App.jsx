import { useEffect } from "react";
import AppStore from "./Components/AppStore/AppStore";
import Banner from "./Components/Banner/Banner";
import Copyright from "./Components/Copyright/Copyright";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonial/Testimonial";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:500,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[])
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white">
        <Navbar />
        <Hero />
        <Services />
        <Banner />
        <AppStore />
        <Testimonial />
        <Footer />
        <Copyright />
      </div>
    </>
  );
}

export default App;
