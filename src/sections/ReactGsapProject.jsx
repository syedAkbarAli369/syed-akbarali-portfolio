


import React from 'react'
import { reactGsapProjects } from '@/constants'
import localFont from 'next/font/local'
import Carousel from '@/components/Carousel'

const batmanFont = localFont({
  src: "../fonts/bat.ttf",
})

const ReactGsapProject = () => {
  return (
    <section
      id="projects"
      className="flex items-center justify-center bg-black text-white h-screen px-6 py-12">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <div className="text-center mb-12">
          <h1
            className={`font-bold xl:text-6xl lg:text-5xl md:text-4xl text-2xl text-yellow-300 ${batmanFont.className}`}
          >
            REACT AND GSAP PROJECTS
          </h1>
        </div>

        {/* Carousel Section */}
        <div className="mt-9 md:mt-20">
          <Carousel slides={reactGsapProjects} />
        </div>
      </div>
    </section>
  )
}

export default ReactGsapProject