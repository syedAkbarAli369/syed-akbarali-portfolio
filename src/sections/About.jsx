'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import localFont from 'next/font/local'

const batmanFont = localFont({
  src: "../fonts/bat.ttf"
})

const lm = localFont({
  src: "../fonts/LEMONMILK-Light.otf",
})

gsap.registerPlugin(SplitText, ScrollTrigger)

const ABOUT_TEXT = `I am a software engineering student at the University of Karachi, working toward becoming a full stack developer with a growing pull toward AI. I started with frontend development, building projects with React, GSAP and Three.js, and took my first professional step as a frontend developer intern at KGT Global Software House. Since then I have been expanding into full stack development with the MERN stack, building complete applications end to end. Alongside that, I am deeply into AI automation, machine learning, deep learning and large language models. My final year project, CheelChat, ties it all together a RAG based system that keeps AI conversations alive past rate limits, blending everything I have learned about web development and AI into one build.`

const About = () => {
  const sectionRef = useRef(null)
  const paraRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(paraRef.current, {
        type: 'lines',
        linesClass: 'about-line',
      })

      split.lines.forEach((line) => {
        const wrapper = document.createElement('div')
        wrapper.style.overflow = 'hidden'
        wrapper.style.position = 'relative'
        line.parentNode.insertBefore(wrapper, line)
        wrapper.appendChild(line)

        const block = document.createElement('div')
        block.className = 'reveal-block'
        block.style.position = 'absolute'
        block.style.top = '0'
        block.style.left = '-2px'
        block.style.width = 'calc(100% + 4px)'
        block.style.height = '100%'
        block.style.background = '#facc15'
        wrapper.appendChild(block)

        line.style.transform = 'translateY(110%)'
      })

      const blocks = paraRef.current.querySelectorAll('.reveal-block')
      const lines = split.lines

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 60%',
          toggleActions: 'play reverse play reverse'
        },
      })

      lines.forEach((line, i) => {
        const startTime = i * 0.12

        // text rises up into place
        tl.to(
          line,
          { yPercent: -108, duration: 0.7, ease: 'power4.out' },
          startTime
        )
        tl.to(
          blocks[i],
          {
            xPercent: 100,
            duration: 0.6,
            ease: 'power4.inOut',
          },
          startTime + 0.1
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`flex flex-col items-center justify-center bg-black text-white min-h-screen px-5 py-10 ${lm.className} overflow-hidden`}
    >
      <h1 className={`${batmanFont.className} font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-yellow-300 mb-8`}>
        ABOUT ME
      </h1>
      <p
        ref={paraRef}
        className="max-w-3xl sm:max-w-4xl  text-center text-white text-sm md:text-md leading-relaxed"
      >
        {ABOUT_TEXT}
      </p>
    </section>
  )
}

export default About