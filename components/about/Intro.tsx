import Image from 'next/image'
import React from 'react'

const Intro = () => {
  return (
    <section className="container px-6 sm:px-10 md:px-16 lg:px-[120px] py-12 sm:py-16 lg:py-[80px] flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 lg:gap-[128px]">
      <div className="text-monochrome90 font-normal text-base leading-[1.5] lg:leading-[24px] flex flex-col items-start justify-center gap-3 max-w-full lg:max-w-[560px] hero-in">
        <h4 className="font-medium text-lg sm:text-xl leading-[1.3] lg:leading-[25.2px]">
          Hi there!
        </h4>
        <h3 className="font-semibold text-2xl sm:text-[28px] leading-[1.25] lg:leading-[35.28px]">
          My name is Anirban Tasfin Azad.
        </h3>

        {/* Mobile/tablet only image, shown right after the name */}
        <div className="hero-in lg:hidden w-full my-3">
          <Image
            src="/pookie.png"
            width={512}
            height={340}
            alt="anirban-tasfin"
            className="w-full h-auto object-contain"
          />
        </div>

        <p>
          Prior to my UX journey, I was adorned into front-end Development. It
          was there that I realized how crucial it is for contents and
          elements to seamlessly connect and guide users.{' '}
          <span className="font-medium text-matchaBase">
            It is the breath of the users&apos; journey{' '}
          </span>
          and makes the whole experience that much more enjoyable.
        </p>
        <p>
          Scouring through multiple media I came close to designing. Modeling
          my very own personalized products, and the ability to create became
          a source of fascination for me.
        </p>
        <p className="font-medium text-matchaBase text-base leading-[1.5] lg:leading-[24px]">
          The things I&apos;ve done so far are a pursuit to relate to people,
          their conscious choices, and their ease and accessibility.
        </p>
        <p>
          And as a designer I&apos;m looking for just a group of people whom I
          can explore these ideas and grow.
        </p>
      </div>

      {/* Desktop only image, second column */}
      <div className="hero-in hidden lg:flex w-auto justify-start">
        <Image
          src="/pookie.png"
          width={512}
          height={340}
          alt="anirban-tasfin"
          className="w-full max-w-[512px] h-auto"
        />
      </div>
    </section>
  )
}

export default Intro
