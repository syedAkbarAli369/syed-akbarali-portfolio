

import { footerIconsList } from '@/constants'
import Image from 'next/image'
import React from 'react'

import localFont from 'next/font/local'

const lm = localFont({
  src: "../fonts/LEMONMILK-Regular.otf"
})

const Footer = () => {
  return (
    <div className='w-full flex-center flex-col md:gap-7 gap-6 bg-black py-3 border-t-2 border-white'>
      <div>
        <Image src="/images/white.png"
          alt='logo'
          className='w-18 h-18 object-cover object-center'
          width={63}
          height={63}
        />
      </div>
      <div className='flex items-center md:gap-15 gap-6'>
        {footerIconsList.map((icon, index) => (
          <div
            key={index}
            className='cursor-pointer hover:-translate-y-6 transition-all duration-700'
          >
            <Image
              src={icon.icon}
              alt={icon.name}
              className='md:size-7 size-6'
              width={36}
              height={36}
            />
          </div>
        ))}
      </div>
      <p className={`md:text-sm text-xs text-white ${lm.className}`}>
        Cheel Company Ltd. || 2025 © All rights reserved.
      </p>

    </div>
  )
}

export default Footer