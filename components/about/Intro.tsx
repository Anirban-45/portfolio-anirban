import Image from 'next/image'
import React from 'react'



const Intro = () => {
  return (
    <section className=" container px-[120px] py-[80px] flex items-center justify-between gap-[128px]">
      <div className=" text-monochrome90 font-normal text-[16px] leading-[24px] flex flex-col items-start justify-center gap-3 max-w-[560px] hero-in">
        <h4 className=" font-medium text-xl leading-[25.2px]">Hi there!</h4>
        <h3 className=" font-semibold text-[28px] leading-[35.28px]">
          My name is Anirban Tasfin Azad.
        </h3>
        <p>
          Prior to my UX journey, I was adorned into front-end Development. It
          was there that I realized how crucial it is for contents and elements
          to seamlessly connect and guide users.{' '}
          <span className=" font-medium text-matchaBase">
            It is the breath of the users' journey{' '}
          </span>
          and makes the whole experience that much more enjoyable.
        </p>
        <p>
          Scouring through multiple media I came close to designing. Modeling my
          very own personalized products, and the ability to create became a
          source of fascination for me.
        </p>
        <p className=" font-medium text-matchaBase text-[16px] leading-[24px]">
          The things I've done so far are a pursuit to relate to people, their
          conscious choices, and their ease and accessibility.
        </p>
        <p>
          And as a designer I'm looking for just a group of people whom I can
          explore these ideas and grow.
        </p>
      </div>
      <div className="hero-in">
        <Image
          src="/pookie.png"
          width={512}
          height={340}
          alt="anirban-tasfin"
        />
      </div>
    </section>
  )
}

export default Intro
