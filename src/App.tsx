// import React, { useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';


import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import "./App.css";

function App() {

    // gsap.registerPlugin(useGSAP);
    // const container = useRef<HTMLHeadingElement>(null)

    // useGSAP(() => {
    //     gsap.from(container.current, {
    //         duration: 1,
    //         opacity: 0,
    //         y: 100,
    //         ease: "power3.inout",
    //         delay: 1,
    //     });
    // },[container]);

  //   gsap.registerPlugin(useGSAP,ScrollSmoother);

  //   // const main = useRef<HTMLHeadingElement>();
  //   const smoother = useRef<ScrollSmoother | null>(null);

  // useGSAP(
  //   () => {
  //     smoother.current = ScrollSmoother.create({
  //       smooth: 2,
  //       effects: true,
  //     });
  //     // ScrollTrigger.create({
  //     //   trigger: '.box-c',
  //     //   pin: true,
  //     //   start: 'center center',
  //     //   end: '+=300',
  //     //   markers: true,
  //     // });
  //   },
  //   { scope: main }
  // );

  return (
    <>
    {/* <div ref={main}> */}
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
      {/* </div> */}
    </>
  );
}

export default App;
