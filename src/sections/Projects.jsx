'use client'
import React from 'react'
import Carousel from '@/components/Carousel'
import localFont from 'next/font/local'

const batmanFont = localFont({
  src: "../fonts/bat.ttf",
})

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex items-center justify-center bg-black text-white h-screen px-6 py-12">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <div className="text-center mb-12">
          <h1
            className={`font-bold xl:text-7xl lg:text-6xl md:text-5xl text-4xl text-yellow-300 ${batmanFont.className}`}
          >
            NEXT JS PROJECTS
          </h1>
        </div>

        {/* Carousel Section */}
        <div className="mt-9 md:mt-20">
          <Carousel />
        </div>
      </div>
    </section>
  )
}

export default Projects
