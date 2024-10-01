import React from "react";
import { Container } from "./Container";

function AboutUs() {
  return (
    <Container className="pt-10 pb-20 text-slate-200 max-w-5xl mx-auto ">
      <h3 className="text-4xl font-light text-center pb-10 text-white">
        About <span className="text-[#eee712] font-extrabold">RenderCon</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-[#320858] p-8 rounded-lg shadow-lg">
          <h4 className="text-xl font-semibold text-[#eee712] mb-4">
            The Event
          </h4>
          <p className="text-sm md:text-md lg:text-lg  leading-6 font-mono ">
            RenderCon Kenya is a premier tech conference focused on React and
            React Native, set to take place on October 4th-5th 2024, in Nairobi.
            RenderCon offers a platform for software engineers, developers,
            enterpreneurs and designers of all experience levels to explore the
            dynamic world of web and mobile development. The event provides an
            immersive experience, combining technical innovation, mentorship,
            and community engagement.
          </p>
        </div>

        <div className="bg-[#320858] p-8 rounded-lg shadow-lg">
          <h4 className="text-xl font-semibold text-[#eee712] mb-4">
            What You’ll Learn
          </h4>
          <p className="text-sm md:text-md lg:text-lg leading-6 font-mono ">
            More than just a conference, RenderCon aims to foster collaboration
            and learning among professionals in the software development
            industry, with sessions led by leading experts in React
            technologies. It emphasizes the sharing of ideas and practical
            knowledge that attendees can immediately apply in their work.
          </p>
        </div>

        <div className="bg-[#320858] p-8 rounded-lg shadow-lg col-span-1 md:col-span-2">
          <h4 className="text-xl text-center font-semibold text-[#eee712] mb-4">
            Community and Sponsors
          </h4>
          <p className="text-sm md:text-md lg:text-lg  leading-6 font-mono">
            The event highlights the importance of community, bringing together
            a diverse mix of developers, designers, engineers, and tech
            enthusiasts from around the world. It`&apos;`s supported by key sponsors
            such as
            <a
              href="https://reactdevske.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#caf0f8] underline hover:text-[#eee712] transition"
            >
              {" "}
              ReactDevsKe Community
            </a>
            ,
            <a
              href="https://web.mypayd.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#caf0f8] underline hover:text-[#eee712] transition"
            >
              {" "}
              Payd
            </a>
            , and
            <a
              href="https://mylemonade.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#caf0f8] underline hover:text-[#eee712] transition"
            >
              {" "}
              Lemonade
            </a>
            , with an array of workshops, talks, and networking opportunities.
            <br />
            <br />
            <div className="text-[#fff] text-lg">
              {" "}
              We hope to see you there!
            </div>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default AboutUs;
