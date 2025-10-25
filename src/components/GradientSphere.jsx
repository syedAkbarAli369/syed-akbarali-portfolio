

import React from 'react'

const GradientSphere = ({ sphere1Class, sphere2Class }) => {
  return (
    <>
      <div className={`absolute w-[360px] h-[360px] rounded-full blur-[90px] opacity-90 ${sphere1Class}`} />
      <div className={`absolute w-[360px] h-[360px] rounded-full blur-[90px] opacity-90 ${sphere2Class}`} />

    </>
  )
}

export default GradientSphere