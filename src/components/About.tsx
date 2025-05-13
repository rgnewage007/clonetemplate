
import { Statistics } from "./Statistics";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";

import pilot from "../assets/pilot.png";

export const About = () => {
  gsap.registerPlugin(ScrollTrigger , useGSAP);

  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    gsap.fromTo(
      element,
      { 
        opacity: 0, 
        y: 50 
      },
      {
        opacity: 1,
        y: 0,
        scale: 0.95,
        duration: 0.8,
        delay: 1.8,
        ease: 'power2.in',
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
            end: "top 0%",
            scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
      ref={textRef}
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
