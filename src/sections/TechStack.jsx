'use client'
import TechIcon from '@/components/TechIcon'
import { iconsList } from '@/constants'
import localFont from 'next/font/local'
import React from 'react'

// Custom fonts
const batmanFont = localFont({
  src: "../fonts/bat.ttf",
})

const lm = localFont({
  src: "../fonts/LEMONMILK-Light.otf",
})

const TechStack = () => {


  return (
    <section
      id="techstack"
      className="flex flex-col items-center justify-center bg-black text-white h-screen px-6 py-12 overflow-hidden"
    >
      <div className="max-w-6xl w-full">
        {/* Title */}
        <div className="text-center mb-12">
          <h1
            className={`font-bold xl:text-7xl lg:text-6xl md:text-5xl text-4xl text-yellow-300 ${batmanFont.className}`}
          >
            TECH STACK
          </h1>
          <p
            className={`mt-4 text-md md:text-lg text-white max-w-3xl mx-auto ${lm.className}`}
          >
            My go-to tools for crafting interactive, smooth and immersive experiences.
          </p>
        </div>

        {/* Marquee Icons */}
        <div className="marquee h-54">
          <div className="marquee-box md:gap-12 gap-5"
          >
            {iconsList.concat(iconsList).map((icon, index) => (
              <TechIcon key={index} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
