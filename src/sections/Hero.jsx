'use client'
import Image from "next/image"
import batman from '../../public/images/b1.webp'
import localFont from 'next/font/local'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import HeroExperience from "@/components/HeroExperience"

const batmanFont = localFont({
  src: "../fonts/bat.ttf"
})

const Hero = () => {
  const heroRef = useRef(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-bg",
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
      )

      gsap.to(".arrow-down", {
        y: 15,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 1
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="w-screen h-screen overflow-hidden relative text-white md:p-0 px-6"
    >
      <div className="absolute inset-0 hero-bg">
        <Image
          src={batman}
          alt="bg"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className={`w-full h-full flex-center ${batmanFont.className}`}>
        <div className="container relative w-full h-full">
          <div className="md:mt-25 mt-20">
            <h1 className={`hero-title font-bold xl:text-8xl lg:text-8xl md:text-7xl text-4xl ${batmanFont.className}`}>
              SYED AKBAR ALI
            </h1>
            <h1 className={`hero-title font-bold lg:text-7xl md:text-6xl text-4xl ${batmanFont.className}`}>
              FULLSTACK
            </h1>
          </div>
          <div className="absolute w-full z-30 bottom-18 right-0">
            <div className="flex justify-between items-end">
              <div className="flex flex-col items-center md:gap-6 gap-1">
              </div>
              <div className="flex flex-col items-end">
                <h1 className={`hero-title font-bold lg:text-7xl md:text-6xl text-4xl ${batmanFont.className}`}>
                  DEVELOPER
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute top-0 left-0">
        <HeroExperience />

      </div>
    </section>
  )
}

export default Hero