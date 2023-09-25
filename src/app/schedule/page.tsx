'use client'

import Script from 'next/script'
import React from 'react'

type Props = {}

export default function Page({}: Props) {
  return (
    <>
                <Script
                    id='schedule'
                    src='https://sessionize.com/api/v2/dkvl0l4d/view/SpeakerWall'
                    onLoad={() => {
                        console.log('Script has loaded')
                      }}
                    type='text/javascript'

                />
                <div id='schedule'>
                </div>
            </>
  )
}