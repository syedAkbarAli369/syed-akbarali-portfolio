'use client'

import localFont from 'next/font/local'
import React from 'react'
import Skills from './Skills'

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
      className="relative flex flex-col items-center bg-black text-white h-screen px-6 py-6 overflow-hidden"
    >
      {/* <SkillTrail /> */}
      <div className="max-w-6xl w-full">
        {/* Title */}
        <div className="text-center">
          <h1
            className={`font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-yellow-300 ${batmanFont.className}`}
          >
            TECH STACK
          </h1>
          <p
            className={`mt-6 text-sm md:text-md text-white max-w-4xl mx-auto ${lm.className}`}
          >
            My go-to tools for crafting interactive, smooth and immersive experiences. <br />Move your mouse around below to watch them come alive.
          </p>
        </div>

        <Skills />

      </div>
    </section>
  )
}

export default TechStack
