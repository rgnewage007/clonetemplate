import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
// import useEffect from 'react';

export const Hero = () => {

    // const { useRef } = React;
    // console.log(React.version);
  
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const heroTitle = useRef<HTMLHeadingElement>(null);
    const heroP = useRef<HTMLParagraphElement>(null);
    const GetButton = useRef<HTMLButtonElement>(null);

      // useEffect(() => {
      //     console.log(container.current); 
      // }, []);

    useGSAP(() => {
        gsap.from(heroTitle.current, {
            opacity: 0,
            duration: 1,
            scale: 0.95,
            delay: 1,
            ease: 'power2.in'
        });
        gsap.from(heroP.current, {
            opacity: 0,
            duration: 1,
            scale: 0.95,
            delay: 1.4,
            ease: 'power2.in'
        });
        gsap.from(GetButton.current, {
            opacity: 0,
            duration: 1,
            scale: 0.95,
            delay: 1.8,
            ease: 'power2.in'
        }); 

        
    },[heroTitle]);



  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold" ref={heroTitle}>
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Shadcn
            </span>{" "}
            landing page
          </h1>{" "}
          for{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              React
            </span>{" "}
            developers
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0" ref={heroP}>
          Build your React landing page effortlessly with the required sections
          to your project.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4" ref={GetButton}>
          <Button className="w-full md:w-1/3" >Get Started</Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
