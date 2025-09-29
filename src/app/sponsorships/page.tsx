'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaTwitter, FaLinkedin, FaGlobe, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import LogoLemonade from '../images/logos/lemonage_logo.jpg';
import LogoPayd from '../images/logos/payd.png';
import LogoReactDevsKe from '../images/logos/reactdevske.png';
import LogoCloudinaryBlue from "../images/logos/cloudinary_stacked_logo_box.png";
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import Technologies from '../components/Technologies';

type Sponsors = {
  name: string;
  logo: StaticImageData;
  link: string;
  description: string;
  socials: { twitter?: string; linkedin?: string; facebook?: string; instagram?: string; youtube?: string; website?: string };
};

const sponsors: Sponsors[] = [
  {
    name: 'Cloudinary',
    logo: LogoCloudinaryBlue,
    link: 'https://cloudinary.com/',
    description:
      'Cloudinary is a cloud-based media management platform that enables developers and businesses to store, optimize, transform, and deliver images and videos with powerful APIs, AI-powered editing tools, and seamless integrations for scalable, high-performing digital experiences.',
    socials: {
      twitter: 'https://twitter.com/cloudinary',
      linkedin: 'https://www.linkedin.com/company/cloudinary',
      facebook: 'https://facebook.com/cloudinary',
      instagram: 'https://instagram.com/cloudinary',
      youtube: 'https://www.youtube.com/cloudinary',
      website: 'https://cloudinary.com/',
    },
  },
  {
    name: 'ReactDevsKe',
    logo: LogoReactDevsKe,
    link: 'https://reactdevske.org',
    description:
      'ReactDevsKe is Kenya\'s leading community for React developers, fostering collaboration and growth through events, learning opportunities, and networking. It supports both beginners and experienced developers, driving innovation and development within the local tech ecosystem.',
    socials: {
      twitter: 'https://twitter.com/ReactDevsKe',
      linkedin: 'https://www.linkedin.com/company/reactdevske',
      website: 'https://reactdevske.org',
    },
  }
];

function Sponsorship() {
  const addr = 'sponsors';
  const tld = 'rendercon.org';

  // Email click handler
  const handleEmailClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    window.location.href = `mailto:${addr}@${tld}`;
  };

  return (
    <>
      <Header />
      <section id="sponsors" aria-label="Sponsors" className="pt-10 sm:pt-32 sm:pb-20 bg-[#240046] font-mono">
        <div className="container mx-auto px-6">
          {/* Title */}
          <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-purple-300 sm:text-5xl">
            Our Sponsors
          </h2>

          {/* Attendees as Sponsors */}
          <p className="text-center text-xl text-white mt-8">
            A big thank you to our attendees, who are our main sponsors, for making this event possible!
          </p>

          {/* Sponsors List */}
          <div className="mx-auto grid grid-cols-1 2xl:grid-cols-2 gap-16 mt-20 items-center">
            {sponsors.length > 0 ? (
              sponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="bg-[white] rounded-lg shadow-lg p-4 flex flex-col items-center min-h-[550px]"
                >
                  <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      unoptimized
                      height={150}
                      width={300}
                    />
                  </a>
                  <h3 className="text-xl font-semibold mt-0 text-black">
                    {sponsor.name}
                  </h3>
                  <p className="text-center text-gray-700 mt-2">
                    {sponsor.description}
                  </p>
                  
                  {/* Social Media Links */}
                  <div className="flex gap-4 mt-4">
                    {sponsor.socials.twitter && (
                      <a
                        href={sponsor.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter className="text-purple-500 text-2xl hover:text-yellow-500" />
                      </a>
                    )}
                    {sponsor.socials.linkedin && (
                      <a
                        href={sponsor.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="text-purple-500 text-2xl hover:text-yellow-500" />
                      </a>
                    )}
                    {sponsor.socials.facebook && (
                      <a
                        href={sponsor.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook className="text-purple-500 text-2xl hover:text-yellow-500" />
                      </a>
                    )}
                    {sponsor.socials.instagram && (
                      <a
                        href={sponsor.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram className="text-purple-500 text-2xl hover:text-yellow-500" />
                      </a>
                    )}
                    {sponsor.socials.youtube && (
                      <a
                        href={sponsor.socials.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaYoutube className="text-purple-500 text-2xl hover:text-yellow-500" />
                      </a>
                    )}
                    {sponsor.socials.website && (
                      <a
                        href={sponsor.socials.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGlobe className="text-purple-500 text-2xl hover:text-yellow-500" />
                      </a>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-slate-300 text-xl font-mono text-center">
                Leverage our platform to put your brand on the spotlight. Become a
                part of RenderCon Kenya&apos;s mission to nurture innovation and
                best practices within the React ecosystem.
                <br /> Reach out for our sponsorship packages{' '}
                <a
                  href="#"
                  onClick={handleEmailClick}
                  className="hover:underline text-yellow-500"
                >
                  here
                </a>
              </p>
            )}
          </div>

          {/* Call to Sponsor Button */}
          <div className="flex justify-center pt-16">
            <a
              href="#"
              onClick={handleEmailClick}
              className="text-md md:text-lg bg-purple-500 hover:bg-yellow-500 text-white py-3 px-6 rounded-lg transition-colors duration-300"
              >
              Become a Sponsor
            </a>
          </div>
        </div>
      </section>
      <div className="mt-16">
        <Technologies />
      </div>
      <Footer />
    </>
  );
}

export default Sponsorship;
