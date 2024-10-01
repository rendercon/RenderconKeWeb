"use client";

import React from "react";
import { useEffect, useId, useMemo, useState } from "react";
import { FiUser } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa"; // Importing the back arrow icon
import { Container } from "../components/Container";
import Technologies from "../components/Technologies";

// Skeleton Loader for the speaker cards
const SkeletonLoader = () => (
  <div className="animate-pulse">
    <div className="relative aspect-[14/13] w-[90%] bg-purple-700 rounded-xl">
      <FiUser className="text-[#b19eaf] h-[100%] w-[100%] p-6" />
    </div>
    <div className="mt-6 h-4 bg-purple-800 rounded w-3/4"></div>
    <div className="mt-4 h-3 bg-purple-900 rounded w-1/2"></div>
  </div>
);

type Speaker = {
  id: string;
  fullName: string;
  profilePicture: string;
  sessions: { name: string }[];
  bio?: string; // Add speaker bio if available
};

type ImageClipPathsProps = {
  id: string;
};

function ImageClipPaths({ id, ...props }: ImageClipPathsProps) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,-0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  );
}

function Schedule() {
  const [speakerList, setSpeakerList] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(false); // Error state
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null); // State for selected speaker

  const fetchSpeakers = async () => {
    setLoading(true); // Start loading
    setError(false); // Reset error state
    try {
      const res = await fetch(
        "https://sessionize.com/api/v2/d899srzm/view/Speakers"
      );
      if (!res.ok) throw new Error("Failed to fetch speakers");
      const data = await res.json();
      setSpeakerList(data);
    } catch (error) {
      setError(true); // Handle error state
    } finally {
      setLoading(false); // End loading
    }
  };

  useEffect(() => {
    fetchSpeakers();
  }, []);

  const [isSSR, setIsSSR] = useState(true);

  let id = useId();

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const [showAllSpeakers, setShowAllSpeakers] = useState(false);

  const toggleShowAllSpeakers = () => {
    setShowAllSpeakers(!showAllSpeakers);
  };

  const visibleSpeakers = showAllSpeakers ? speakerList : speakerList.slice(0, 6);

  // Scroll to the top when a speaker is selected
  const handleSpeakerClick = (speaker: Speaker) => {
    setSelectedSpeaker(speaker);
    window.scrollTo({ top: 80, behavior: "smooth" }); // Scroll to top when the modal opens
  };

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="pt-10 lg:pt-24 pb-10 sm:pb-10"
    >
      <ImageClipPaths id={id} />
      {isSSR ? null : (
        <>
          {/* Overlay for the modal */}
          {selectedSpeaker && <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>}
          
          <Container>
            {selectedSpeaker ? (
              <div className="fixed inset-0 z-50 overflow-y-auto flex justify-center items-start">
                <SpeakerDetails speaker={selectedSpeaker} onBack={() => setSelectedSpeaker(null)} />
              </div>
            ) : (
              <>
                <div className="mx-auto max-w-3xl text-center flex flex-col align-center items-center justify-center w-full">
                  <h2
                    id="speakers-title"
                    className="font-display text-3xl font-medium tracking-tighter text-slate-100 sm:text-4xl"
                  >
                    Our Speakers
                  </h2>
                  <p className="mt-4 font-mono text-lg sm:text-xl tracking-tight text-slate-200">
                    Learn from the best in the industry and level up your skills.
                  </p>
                </div>

                {/* Show skeleton loaders while loading */}
                {loading ? (
                  <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto mt-10 sm:mt-20 grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-10 sm:gap-y-14 lg:grid-cols-3">
                      {[...Array(6)].map((_, index) => (
                        <div key={index}>
                          <SkeletonLoader />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : error ? (
                  <div className="text-center text-red-500 text-lg sm:text-xl mt-8">
                    Failed to load speakers. Please try again later.
                  </div>
                ) : (
                  <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto mt-10 sm:mt-20 grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-10 sm:gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                      {visibleSpeakers.map((speaker: Speaker) => (
                        <div key={speaker.id} onClick={() => handleSpeakerClick(speaker)}>
                          <img
                            className="relative aspect-[14/13] w-full sm:w-[80%] lg:w-[90%] mx-auto rounded-xl object-cover bg-purple-900 cursor-pointer"
                            src={speaker.profilePicture}
                            alt={speaker.fullName}
                          />
                          <h3 className="mt-4 sm:mt-6 text-md md:text-lg font-semibold leading-6 sm:leading-8 tracking-tight text-white text-center">
                            {speaker.fullName}
                          </h3>
                          <p className="font-mono text-xs md:text-sm leading-5 sm:leading-6 text-slate-300 text-center">
                            {speaker.sessions[0].name}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 flex align-center items-center justify-center">
                      {!showAllSpeakers && speakerList.length > 6 && (
                        <span
                          className="text-sm md:text-md bg-purple-500 hover:bg-yellow-500 text-white py-3 px-6 rounded-lg transition-colors duration-300 cursor-pointer"
                          onClick={toggleShowAllSpeakers}
                        >
                          See More
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </>
            )}
          </Container>
        </>
      )}
      <div className="mt-16">
        <Technologies />
      </div>
    </section>
  );
}

type SpeakerDetailsProps = {
  speaker: Speaker;
  onBack: () => void;
};

const SpeakerDetails: React.FC<SpeakerDetailsProps> = ({ speaker, onBack }) => (
  <div className="bg-violet-900 text-white p-6 rounded-lg mb-6 md:mx-10 relative z-50 mt-6 w-2/3 mx-auto">
    <button onClick={onBack} className="text-yellow-500 mb-4 flex items-center">
      {/* Adding the back arrow icon */}
      <FaArrowLeft className="mr-2" /> Back to speakers
    </button>
    <h1 className="text-2xl font-bold mb-4">{speaker.fullName}</h1>
    <img
      className="relative w-full max-w-md mx-auto rounded-xl object-cover bg-purple-900 mb-4"
      src={speaker.profilePicture}
      alt={speaker.fullName}
    />
    <h3 className="text-lg font-bold mb-2 text-yellow-500">Session</h3>
    <ul className="mb-4">
      {speaker.sessions.map((session, idx) => (
        <li key={idx} className="text-sm">{session.name}</li>
      ))}
    </ul>
    <h3 className="text-lg text-yellow-500 font-bold mb-2">Bio</h3>
    <p className="text-sm">{speaker.bio || "No bio available."}</p>
  </div>
);



export default Schedule;