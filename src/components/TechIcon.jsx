
import Image from 'next/image'
import React from 'react'

const TechIcon = ({ icon }) => {

  return (
    <div className='flex-none lg:w-36 lg:h-36 md:w-27 md:h-27 w-18 h-18 bg-black flex gradient-border marquee-item items-center justify-center hover:-translate-y-3  cursor-pointer transition-all duration-600'
    >
      <Image
        src={icon.image}
        alt={icon.name}
        className='md:size-16 size-9'
        width={36}
        height={36}
      />

    </div>
  )
}

export default TechIcon