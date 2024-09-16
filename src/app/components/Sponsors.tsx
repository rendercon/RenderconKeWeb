"use client";

import Image, { StaticImageData } from "next/image";
import { Container } from "./Container";
import LogoLemonade from "../images/logos/lemonade.png";
import LogoPayd from "../images/logos/payd.png";
import LogoReactDevsKe from "../images/logos/ReactdevskeLogo.png";
import { Button } from "./Button";
import Link from "next/link";

type Sponsors = {
  name: string;
  logo: string | StaticImageData;
  link: string;
  height: number;
  width: number;
};

const sponsors: Sponsors[] = [
  {
    name: "ReactDevsKe",
    logo: LogoReactDevsKe,
    link: "https://reactdevske.org",
    height: 200,
    width: 500,
  },
  {
    name: "Lemonade",
    logo: LogoLemonade,
    link: "https://mylemonade.io/",
    height: 200,
    width: 500,
  },
  {
    name: "Payd",
    logo: LogoPayd,
    link: "https://paydexp.com/",
    height: 200,
    width: 300,
  },
];

const Sponsors = () => {
  const addr = "sponsors";
  const tld = "rendercon.org";

  const handleEmailClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    window.location.href = `mailto:${addr}@${tld}`;
  };

  return (
    <section
      id="sponsors"
      aria-label="Sponsors"
      className="py-8 sm:py-24 text-sm md:text-xl"
    >
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-medium tracking-tighter text-slate-200 lg:text-5xl">
          Our Sponsors
        </h2>
        <div className="mx-auto flex items-center justify-center gap-6 mt-8 flex-col md:flex-row">
          {sponsors.length > 0 ? (
            sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex  items-center justify-center py-6"
              >
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    unoptimized
                    height={sponsor.height}
                    width={sponsor.width}
                  />
                </a>
              </div>
            ))
          ) : (
            <p className="text-slate-300 text-sm md:text-xl font-mono text-center">
              Leverage our platform to put your brand on the spotlight. Become a
              part of RenderCon Kenya&apos;s mission to nurture innovation and
              best practices within the React ecosystem.
              <br /> Reach out for our sponsorship packages{" "}
              <a
                href="#"
                onClick={handleEmailClick}
                className="hover:underline text-[#eee712]"
              >
                here
              </a>
            </p>
          )}
        </div>
        <div className="flex justify-center pt-8">
          <a
            href="/sponsorships"
            className="text-xs md:text-lg bg-purple-500 hover:bg-yellow-500 text-white py-3 px-6 rounded-lg transition-colors duration-300"
            >
            Learn More About Our Sponsors
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Sponsors;
