

import { Canvas } from '@react-three/fiber'
import React from 'react'
import { AkbHero } from './models/AkbHero'

const HeroExperience = () => {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[-3, 1, 2]} intensity={2.5} color={"#0d47a1"} />
      <directionalLight position={[3, 2, 4]} intensity={1.8} color={"#ffcc80"} />
      <group>
        <AkbHero scale={9} position={[0, -15, 0]} />
      </group>

    </Canvas>
  )
}

export default HeroExperience