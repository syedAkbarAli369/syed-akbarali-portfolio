'use client'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef } from "react"

import Navbar from "@/components/Navbar"
import Hero from "@/sections/Hero"
import About from "@/sections/About"
import TechStack from "@/sections/TechStack"
import Contact from "@/sections/Contact"
import NextProject from "@/sections/NextProject"
import ReactGsapProject from "@/sections/ReactGsapProject"
import ThreeJsProject from "@/sections/ThreeJsProject"
import Footer from "@/components/Footer"
import Loader from "@/components/Loader"

gsap.registerPlugin(ScrollTrigger)

const StackedSections = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    const sections = gsap.utils.toArray(".stack-card");
    const total = sections.length

    sections.forEach((section) => {

      gsap.set(section, { zIndex: total - 1 })

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        pin: true,
        pinSpacing: false, // cards overlap each other
        scrub: 1,
        anticipatePin: 1,
        end: () => "+=" + section.offsetHeight,
        invalidateOnRefresh: true,
        // how long before the next card pushes it out
      })
    })

    ScrollTrigger.refresh();

  }, [])

  return (
    <div ref={containerRef} className="w-full relative">

      <Loader />

      <Navbar />

      <Hero />

      {/* Stacked cards */}
      <section className="stack-card min-h-screen flex-center bg-black text-white">
        <About />
      </section>
      <section className="stack-card h-screen flex-center bg-gray-900 text-white">
        <TechStack />
      </section>
      <section className="stack-card h-screen flex-center bg-gray-800 text-white">
        <NextProject />
      </section>
      <section className="stack-card h-screen flex-center bg-gray-800 text-white">
        <ReactGsapProject />
      </section>
      <section className="stack-card h-screen flex-center bg-gray-800 text-white relative z-10">
        <ThreeJsProject />
      </section>
      <div className="w-full min-h-screen bg-black text-white relative z-30">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default StackedSections
