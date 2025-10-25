'use client'
import { bentoSocialLinks } from '@/constants'
import Image from 'next/image'
import arrowup from '../../public/images/arrowupright.svg'
import localFont from 'next/font/local'
import { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Batman } from '@/components/models/Batman'

const batmanFont = localFont({
  src: "../fonts/bat.ttf"
})

const lm = localFont({
  src: "../fonts/LEMONMILK-Light.otf"
})

const About = () => {

  const [transformStyle, setTransformStyle] = useState('');

  const itemRef = useRef();

  function handleMouseMove(e) {

    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 9;
    const tiltY = (relativeX - 0.5) * -9;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.99, 0.99, 0.99)`;

    setTransformStyle(newTransform)
  }

  function handleMouseLeave() {
    setTransformStyle('');
  }

  return (
    <section
      id="about"
      className="flex items-center justify-center bg-black text-white h-screen px-6 py-12"
    >
      <div className="max-w-6xl w-full">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className={`font-bold xl:text-7xl lg:text-6xl md:text-5xl text-4xl text-yellow-300 ${batmanFont.className}`}>
            ABOUT ME
          </h1>
          <p className={`mt-4 text-sm md:text-lg text-white max-w-3xl mx-auto ${lm.className}`}>
            I am a front-end designer from Pakistan who transforms ideas into
            interactive experiences. My work blends sleek web design, smooth GSAP
            animations, and 3D magic with Three.js to create websites that feel
            alive.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Intro Card */}
          <div className="hidden md:flex bg-white-50 rounded-xl p-6 flex-col">
            <div className='w-full h-full'>
              <Canvas>
                <ambientLight />
                <OrbitControls enableZoom={false} />
                <Batman
                  scale={0.03}
                  position={[0, -3, 0]}
                  rotation={[0, -0.5, 0]}
                />
              </Canvas>

            </div>

          </div>

          {/* Motto Card */}
          <div className="bg-gray-900 rounded-xl p-6 flex flex-col justify-start items-center text-center cursor-cell"
            ref={itemRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
          >
            <h1 className={`gradient-title xl:text-5xl lg:text-4xl text-3xl font-bold ${batmanFont.className}`}>THINK DIFFERENT</h1>
            <h1 className={`gradient-title xl:text-5xl lg:text-4xl text-3xl font-bold ${batmanFont.className}`}>DESIGN ALIVE</h1>
            <h1 className={`gradient-title xl:text-5xl lg:text-4xl text-3xl font-bold ${batmanFont.className}`}>BUILD IMMERSIVE</h1>
          </div>

          {/* Social Links Card */}
          <div className="bg-gray-900 rounded-xl p-6 flex flex-col items-center justify-center"
            ref={itemRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
          >
            <h2 className={`text-2xl font-bold mb-4 ${batmanFont.className}`}>Find Me Online</h2>
            <div className="flex flex-col gap-4">
              {bentoSocialLinks.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center cursor-pointer group bebas-neue"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={28}
                      height={28}
                    />
                    <span className={`text-lg font-medium ${lm.className}`}>{item.name}</span>
                  </div>
                  <Image
                    src={arrowup}
                    alt="arrow up"
                    width={20}
                    height={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
