"use client"

import { useEffect, useId, useMemo, useState } from 'react'
import { Container } from './Container'
import { FiUser } from 'react-icons/fi';

// Skeleton Loader for the speaker cards
const SkeletonLoader = () => (
  <div className="animate-pulse">
    <div className="relative aspect-[14/13] w-[100%] bg-purple-700 rounded-xl"><FiUser className="text-[#b19eaf] h-[100%] w-[100%] p-6" /></div>
    <div className="mt-6 h-4 bg-purple-800 rounded w-3/4"></div>
    <div className="mt-4 h-3 bg-purple-900 rounded w-1/2"></div>
  </div>
);

type Speaker = {
  id: string;
  fullName: string;
  profilePicture: string;
  sessions: { name: string }[];
};

type ImageClipPathsProps = {
  id: string;
}

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
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Speakers() {

  const [speakerList, setSpeakerList] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(false);   // Error state

  const fetchSpeakers = async () => {
    setLoading(true); // Start loading
    setError(false);  // Reset error state
    try {
      const res = await fetch('https://sessionize.com/api/v2/d899srzm/view/Speakers')
      if (!res.ok) throw new Error("Failed to fetch speakers");
      const data = await res.json();
      setSpeakerList(data);
    } catch (error) {
      setError(true); // Handle error state
    } finally {
      setLoading(false); // End loading
    }
  }

  useEffect(() => {
    fetchSpeakers()
  }, [])

  const [isSSR, setIsSSR] = useState(true);

  let id = useId();
  let [tabOrientation, setTabOrientation] = useState('horizontal');

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: any) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  const generateRandomSpeakers = (arr: any, count: number) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomSpeakers = useMemo(() => generateRandomSpeakers(speakerList, 6), [speakerList]);

  useEffect(() => {
    setIsSSR(false);
  }, [])

  const [showAllSpeakers, setShowAllSpeakers] = useState(false);

  const toggleShowAllSpeakers = () => {
    setShowAllSpeakers(!showAllSpeakers);
  };

  const visibleSpeakers = showAllSpeakers ? speakerList : randomSpeakers;

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="pt-20 sm:pt-32 pb-10 sm:pb-10"
    >
      <ImageClipPaths id={id} />
      {
        isSSR ? null :
        <Container>
          <div className="mx-auto max-w-3xl text-center flex flex-col align-center items-center justify-center w-full">
            <h2
              id="speakers-title"
              className="font-display text-4xl font-medium tracking-tighter text-slate-100 sm:text-5xl"
            >
              Our Speakers
            </h2>
            <p className="mt-4 font-mono text-2xl tracking-tight text-slate-200">
              Learn from the best in the industry and level up your skills.
            </p>
          </div>
          
          {/* Show skeleton loaders while loading */}
          {loading ? (
            <div className="mx-auto max-w-8xl px-6 lg:px-8">
              <div className="mx-auto mt-20 grid max-w-4xl lg:max-w-9xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, index) => (
                  <div key={index}>
                    <SkeletonLoader />
                  </div>
                ))}
              </div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 text-xl mt-8">
              Failed to load speakers. Please try again later.
            </div>
          ) : (
            <div className="mx-auto max-w-8xl px-6 lg:px-8">
              <div className="mx-auto mt-20 grid max-w-4xl lg:max-w-9xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                {visibleSpeakers.map((speaker: Speaker) => (
                  <div key={speaker.id}>
                    <img className="relative aspect-[14/13] w-[100%] rounded-xl object-cover bg-purple-900" src={speaker.profilePicture} alt={speaker.fullName} />
                    <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{speaker.fullName}</h3>
                    <p className="font-mono text-sm leading-6 text-slate-300">{speaker.sessions[0].name}</p>
                  </div>
                ))}
              </div>
              <div className='mt-5 flex align-center items-center justify-center'>
                {!showAllSpeakers && speakerList.length > 8 && (
                  <span
                    className="mt-8 text-2xl font-medium text-[#eee712] cursor-pointer hover:underline"
                    onClick={toggleShowAllSpeakers}
                  >
                    See More...
                  </span>
                )}
              </div>
            </div>
          )}
        </Container>
      }
    </section>
  )
}
