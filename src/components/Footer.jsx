import { footerIconsList } from '@/constants'
import Image from 'next/image'
import React from 'react'

import localFont from 'next/font/local'

const lm = localFont({
  src: "../fonts/LEMONMILK-Regular.otf"
})

const socialLinks = {
  github: "https://github.com/syedAkbarAli369",
  kaggle: "https://www.kaggle.com/syedakbarali999",
  linkedin: "https://www.linkedin.com/in/syedakbarali369/",
}

const Footer = () => {
  return (
    <footer
      className={`w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 bg-black px-6 py-4 border-t border-white/20 ${lm.className}`}
    >
      <div>
        <Image
          src="/images/white.png"
          alt='logo'
          className='w-10 h-10 object-cover object-center'
          width={40}
          height={40}
        />
      </div>

      <div className='flex items-center gap-6 md:gap-8'>
        {footerIconsList.map((icon, index) => {
          const href = socialLinks[icon.name?.toLowerCase()] || '#'
          return (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className='cursor-pointer hover:-translate-y-1 transition-all duration-300'
            >
              <Image
                src={icon.icon}
                alt={icon.name}
                className='size-5 md:size-6'
                width={28}
                height={28}
              />
            </a>
          )
        })}
      </div>

      <p className='text-xs text-white'>
        Cheel Company Ltd. || 2025 © All rights reserved.
      </p>
    </footer>
  )
}

export default Footer