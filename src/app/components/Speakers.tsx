"use client"

import { use, useEffect, useId, useMemo, useState } from 'react'

import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from './Container'
import { DiamondIcon } from './DiamondIcon'

import { days } from '@/utils/speakers'
import { Button } from './Button'
import Link from 'next/link'



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

  const [speakerList, setSpeakerList] = useState([]);

  const fetchSpeakers = async () => {
    const res = await fetch('https://sessionize.com/api/v2/d899srzm/view/Speakers')
    const data = await res.json()
    setSpeakerList(data)
  }

  useEffect(() => {
    fetchSpeakers()
  }, [])

  const [isSSR, setIsSSR] = useState(true);

  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

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
          <div className="mx-auto max-w-3xl text-center flex flex-col align-center items-center justify-center w-full ">
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
          <div className="mx-auto max-w-8xl px-6 lg:px-8">
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-4xl lg:max-w-9xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
            >
              {visibleSpeakers.map((speaker: Speaker) => (
                <li key={speaker.id}>
                  <img className="relative aspect-[14/13] w-[100%] rounded-xl object-cover" src={speaker.profilePicture} alt="" />
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{speaker.fullName}</h3>
                  <p className="font-mono text-sm leading-6 text-slate-300">{speaker.sessions[0].name}</p>
                </li>
              ))}
            </ul>
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
        </Container>
      }
    </section>
  )
}
