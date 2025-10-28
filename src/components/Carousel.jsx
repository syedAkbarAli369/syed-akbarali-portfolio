'use client'

import Image from "next/image"
import slideLeft from '../../public/images/CaretLeft.svg'
import slideRight from '../../public/images/CaretRight.svg'
import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import localFont from "next/font/local"

const lm = localFont({
  src: "../fonts/LEMONMILK-Regular.otf"
})

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const trackRef = useRef(null)

  function nextSlide() {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }

  function prevSlide() {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  }

  useGSAP(() => {

    if (!trackRef.current) return;

    gsap.to(trackRef.current, {
      x: `-${currentSlide * 63}vw`, // move track, not each item
      duration: 1,
      ease: "power2.inOut",
    });
  }, [currentSlide]);

  return (
    <div className="relative">
      <div className="w-full relative lg:h-[54vh] md:h-[40vh] h-[54vh] overflow-hidden">


        {/* Slides */}
        <div className="slider-track flex lg:h-[54vh] md:h-[42vh] h-[54vh] items-center gap-[3vw]"
          ref={trackRef}
        >
          {slides.map((slide, index) => (
            <div
              className="slider-item w-[60vw] h-full flex-none relative"
              key={index}
            >
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                className="object-cover object-center"
                // quality={100} // remove blurriness
                priority={index === 0} // preload only first
              />
              <div className="absolute w-full h-18 bottom-0 left-0 bg-black bg-opacity-80 px-5">
                <div className="w-full h-full flex justify-between items-center">
                  <div className={`flex-center gap-3 ${lm.className}`}>
                    <p className="md:text-md text-sm text-white opacity-80">
                      {index + 1}
                    </p>
                    <p className="md:text-md text-sm text-white opacity-80">
                      {slide.title}
                    </p>
                  </div>

                  <div className={`flex gap-6 ${lm.className}`}>
                    {/* github */}
                    <a href={slide.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-purple-900 px-3 py-1.5 rounded-xl text-xs md:text-sm hover:bg-yellow-300 hover:text-black transition"
                    >
                      <Image src='/images/github.svg' alt="github" width={18} height={18} />
                      <p className="hidden md:flex">Code</p>
                    </a>

                    {/* preview */}
                    <a href={slide.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-purple-900 px-3 py-1.5 rounded-xl text-sm md:text-sm hover:bg-yellow-300 hover:text-black transition"
                    >
                      🔗
                      <p className="hidden md:flex">Preview</p>

                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-10 text-white flex justify-end gap-5 md:-translate-x-33 -translate-x-5">
        <div
          onClick={prevSlide}
          className="rounded-full cursor-pointer bg-purple-900 hover:bg-yellow-300 active:scale-90 transition-all w-12 h-12 flex-center"
        >
          <Image src={slideLeft} alt="left" width={18} height={18} />
        </div>
        <div
          onClick={nextSlide}
          className="rounded-full cursor-pointer bg-purple-900 hover:bg-yellow-300 active:scale-90 transition-all w-12 h-12 flex-center"
        >
          <Image src={slideRight} alt="right" width={18} height={18} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
