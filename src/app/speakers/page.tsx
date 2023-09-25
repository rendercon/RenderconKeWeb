'use client'

import React from 'react'

import Head from 'next/head';
import Script from 'next/script';

type Props = {}

export default function Page({}: Props) {
  return (
            <>
                <Script
                    id='speakers'
                    src='https://sessionize.com/view/ftr0a860/SpeakerWall'
                    onLoad={() => {
                        console.log('Script has loaded')
                      }}
                    type='text/javascript'

                />
                <div id='speaker-list'>
                    
                </div>
            </>
  )
}