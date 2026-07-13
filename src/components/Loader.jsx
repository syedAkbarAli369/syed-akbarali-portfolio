'use client'

import { useGSAP } from '@gsap/react'
import { useProgress } from '@react-three/drei'
import gsap from 'gsap'
import { useState, useEffect, useRef } from 'react'
import localFont from 'next/font/local'

const lm = localFont({
  src: "../fonts/LEMONMILK-Regular.otf"
})

const MAX_WAIT = 2500

const Loader = () => {
  const { progress, total } = useProgress()
  const [displayProgress, setDisplayProgress] = useState(0)
  const hasHiddenRef = useRef(false)

  useEffect(() => {
    if (progress >= displayProgress) {
      setDisplayProgress(progress)
    }
  }, [progress])

  const hideLoader = () => {
    if (hasHiddenRef.current) return
    hasHiddenRef.current = true
    setDisplayProgress(100)
    gsap.to('.loader-screen', {
      y: '-100%',
      duration: 1,
      ease: 'power2.inOut'
    })
  }

  useGSAP(() => {
    if (total > 0 && progress === 100) {
      hideLoader()
    }
  }, [progress, total])

  useEffect(() => {
    const timer = setTimeout(hideLoader, MAX_WAIT)
    return () => clearTimeout(timer)
  }, [])

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