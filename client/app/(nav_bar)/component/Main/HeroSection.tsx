import React from 'react'
import ButtonOrange2 from '../Button/ButtonOrange2'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="grid grid-cols-7 gap-2 mx-40 my-32">
      <div className="col-span-3">
        <div className="font-rubik text-6xl font-bold">
          Never too late to learn
        </div>
        <div className="my-8">
          Learning opens the door to an endless world of knowledge and
          understanding.Learning opens the door to an endless world of knowledge
          and understanding.
        </div>
        <div className="mt-4">
          <ButtonOrange2 text="Enroll Course" href="/hello" />
        </div>
      </div>
      <div className="col-span-4">
        <Image
          src="/static/hero_image.svg"
          alt="fox"
          width={700}
          height={700}
          quality={100}
        ></Image>
      </div>
    </div>
  )
}

export default HeroSection
