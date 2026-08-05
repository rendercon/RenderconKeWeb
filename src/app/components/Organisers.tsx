import Image from "next/image";
import { Badge } from "@/components/ui/badge";

import CindyImg from "../images/Organisers/Cindy.jpg";
import RamaImg from "../images/Organisers/Rama.jpg";
import BenImg from "../images/Organisers/Ben.jpg";
import SiscoImg from "../images/Organisers/Sisco.jpeg";
import FestusImg from "../images/Organisers/festuss.jpeg";

const teamMembers = [
  {
    img: CindyImg,
    name: "Cindy Kandie",
    role: "Frontend Engineer · Community Builder",
  },
  {
    img: RamaImg,

    name: "Rama Ochieng",
    role: "Frontend Engineer · Open Source",
  },
  {
    img: BenImg,

    name: "Ben Wesonga",
    role: "Technical Support Engineer · Community",
  },
  {
    img: FestusImg,

    name: "Festus Sulumeti",
    role: "Open Source Advocate · Community Builder",
  },
  {
    img: SiscoImg,

    name: "Sisco Cherono",
    role: "Frontend Developer · Community Builder",
  },
  
];

export default function TeamSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 text-black dark:bg-purple text-white">
      <div className="mx-auto max-w-full px-5 md:px-10">
        <Badge className="mb-4 rounded-none bg-[#e1fcad] px-3 py-0.5 font-medium text-[#122023] text-black text-sm dark:bg-[#e1fcad]">
          Our Team
        </Badge>
        <p className="max-w-5xl font-display font-medium text-3xl tracking-tight md:text-4xl">
          RenderCon is organized by a passionate team of engineers and community builders who believe that East African developers deserve a world-class stage.
        </p>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              className="group cursor-pointer overflow-hidden"
              key={member.name}
            >
              <div className="h-80 overflow-hidden md:h-[30rem]">
                <Image
                  alt={member.name}
                  className="h-full w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                  height={600}
                  src={member.img}
                  width={500}
                />
              </div>
              <div className="py-5">
                <h3 className="font-medium text-2xl tracking-tight">
                  {member.name}
                </h3>
                <p className="font-mono text-neutral-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
