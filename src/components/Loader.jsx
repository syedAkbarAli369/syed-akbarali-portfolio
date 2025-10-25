'use client'

import { useGSAP } from '@gsap/react'
import { useProgress } from '@react-three/drei'
import gsap from 'gsap'
import { useState, useEffect } from 'react'
import localFont from 'next/font/local'

const lm = localFont({
  src: "../fonts/LEMONMILK-Regular.otf"
})

const Loader = () => {
  const { progress, total } = useProgress()
  const [displayProgress, setDisplayProgress] = useState(0)

  useEffect(() => {
    // Keep showing last progress value instead of jumping back to 0
    if (progress >= displayProgress) {
      setDisplayProgress(progress)
    }
  }, [progress])

  useGSAP(() => {
    if (total > 0 && progress === 100) {
      gsap.to('.loader-screen', {
        y: '-100%',
        duration: 1,
        ease: 'power2.inOut'
      })
    }
  }, [progress])

  return (
    <div className='loader-screen bg-black w-screen h-dvh fixed top-0 left-0 z-[100]'>
      <div className='flex-center w-full h-full'>
        <img src="/images/loader.gif" alt="loader" />
      </div>

      <div className={`absolute bottom-10 right-10 text-white text-6xl font-bold ${lm.className}`}>
        {Math.floor(displayProgress)}%
      </div>
    </div>
  )
}

export default Loader
