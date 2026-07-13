"use client"

import { useState, useEffect, useRef } from "react"
import { navItems } from '@/constants'
import Image from 'next/image'
import localFont from 'next/font/local'
import gsap from "gsap"
import Link from "next/link"

const lm = localFont({
  src: "../fonts/LEMONMILK-Regular.otf"
})

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const linksRef = useRef([]) // to target nav links
  const tl = useRef(null)

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true })
      .to(menuRef.current, {
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      })
      .from(
        linksRef.current,
        {
          y: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.2"
      )
  }, [])

  useEffect(() => {
    if (isOpen) {
      tl.current.play()
    } else {
      tl.current.reverse()
    }
  }, [isOpen])

  return (
    <div className="w-full fixed top-0 left-0 z-50 text-white shadow-lg overflow-hidden">
      <div className="container mx-auto flex items-center justify-between py-5 px-6">

        {/* Logo */}
        <div className="flex items-center cursor-pointer">

          <Link href="/">

            <Image src="/images/white.png"
              alt='logo'
              className='w-18 h-18 object-cover object-center'
              width={63}
              height={63}
            />
          </Link>

        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-9 tracking-wide font-extrabold">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`relative group text-sm transition-colors duration-300 ${lm.className}`}
            >
              <span className="group-hover:text-yellow-300 transition-colors duration-300">
                {item.name}
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-300 transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className={`px-5 py-2 bg-yellow-300 text-black text-sm rounded-md hover:bg-white transition-colors duration-300 ${lm.className}`}
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Fullscreen Overlay Menu (hidden at start with -translate-y-full) */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center gap-8 text-2xl font-bold -translate-y-full"
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-3xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            ref={(el) => (linksRef.current[index] = el)}
            className={`relative group text-3xl transition-colors duration-300 ${lm.className}`}
          >
            <span className="group-hover:text-yellow-300 transition-colors duration-300">
              {item.name}
            </span>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-300 transition-all duration-500 group-hover:w-full"></span>
          </a>
        ))}

        <a
          href="/resume.pdf"
          download
          className={`px-8 py-3 bg-yellow-300 text-black text-xl rounded-md hover:bg-white transition-colors duration-300 ${lm.className}`}
        >
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default Navbar