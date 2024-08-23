'use client';

import React from 'react';
import { FaEnvelope, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contacts = () => {

  const addr = "info";
  const tld = "rendercon.org";

  const handleEmailClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    window.location.href = `mailto:${addr}@${tld}`;
  }

  return (
    <div className="flex items-center">
      <div className="flex items-center mx-auto mb-10">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-slate-200 sm:text-3xl sm:tracking-tight">Get in touch</h2> 
          <div className='flex ml-6 gap-5'>
            <div className="flex items-center">
              <button onClick={handleEmailClick} className="hover:text-[#eee712] bg-transparent border-none p-0">
                <FaEnvelope className="text-white text-3xl hover:fill-current hover:text-[#eee712]" />
              </button>
            </div>
            
            <div className="flex items-center">
              <a 
                href="https://twitter.com/renderconke" 
                className="hover:text-[#eee712]" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-white text-3xl hover:fill-current hover:text-[#eee712]" />
              </a>
            </div>
            <div className="flex items-center">
              <a 
                href="https://www.linkedin.com/company/renderconke/" 
                className="hover:text-[#eee712]"  
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-white text-3xl hover:fill-current hover:text-[#eee712]" />
              </a>
            </div>
            <div className="flex items-center">
              <a 
                href="https://www.youtube.com/channel/UC0bCcG8gHUL4njDOpQGcMIA" 
                className="hover:text-[#eee712]" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-white text-3xl hover:fill-current hover:text-[#eee712]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts;
