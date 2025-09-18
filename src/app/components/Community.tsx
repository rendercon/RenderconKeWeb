import React from "react";
import { Button } from "./Button";
import Link from "next/link";
import Technologies from "./Technologies";
import Image from "next/image";

import ImageOne from "../images/assets/conf_web_asset_1.webp";
import ImageTwo from "../images/assets/conf_web_asset_2.webp";
import ImageThree from "../images/assets/conf_web_asset_3.webp";
import ImageFour from "../images/assets/conf_web_asset_4.webp";

const Community = () => {
  return (
    <section className="mt-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="font-display font-medium tracking-tighter text-slate-200 text-2xl md:text-3xl">
              Our Community
            </h2>
            <p className="mt-4 font-mono text-lg md:text-xl tracking-tight leading-8 text-slate-300">
              A conference experience is only as good as the community that
              attends it. We are proud to have a diverse community of
              developers, designers, and tech enthusiasts from all across the
              world.
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                src={ImageFour}
                width={592}
                height={432}
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  src={ImageThree}
                  alt=""
                  width={384}
                  height={288}
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  src={ImageTwo}
                  width={592}
                  height={432}
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  src={ImageOne}
                  width={384}
                  height={288}
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="flex justify-center pt-16 gap-5">
          <a
            href="https://bit.ly/rcke23pics"
            className="text-sm md:text-md bg-purple-500 hover:bg-yellow-500 text-white py-3 px-6 rounded-lg transition-colors duration-300"
            >
            View Gallery(2023)
          </a>

          <a
            href="https://bit.ly/rcke24pics"
            className="text-sm md:text-md bg-purple-500 hover:bg-yellow-500 text-white py-3 px-6 rounded-lg transition-colors duration-300"
            >
            View Gallery(2024)
          </a>
        </div>
      <div className="mt-16">
        <Technologies />
      </div>
    </section>
  );
};

export default Community;
