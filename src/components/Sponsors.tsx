import { Radar } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Radar size={34} />,
    name: "Sponsor 1",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 2",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 3",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 4",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 5",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 6",
  },
];

export const Sponsors = () => {

  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(() => {
    gsap.fromTo(
      "#sponsors div",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.9,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#sponsors",
            start: "top 70%",
            end: "top 0%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Investors and founders
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
