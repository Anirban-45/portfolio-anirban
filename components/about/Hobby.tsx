import Image from 'next/image'
import React from 'react'


const hobbyImages = [
  {
    id: 1,
    url: '/hobby-1.png',
    alt: 'calculating-tax?',
  },
  {
    id: 2,
    url: '/hobby-2.png',
    alt: 'music',
  },
  {
    id: 3,
    url: '/hobby-3.png',
    alt: 'travel',
  },
  {
    id: 4,
    url: '/hobby-4.png',
    alt: 'appreciating-art',
  },
]
const Hobby = () => {
  return (
    <section className="w-full bg-[#F3F0E7] text-monochrome90 ">
      <div className="container px-[120px] pt-[101px] pb-[113px] flex flex-col gap-12">
        {/* Text */}
        <div className=" flex flex-col gap-6 items-start justify-center relative scroll-in scrol">
          <h4 className=" text-[#383838] font-semibold text-[32px] leading-[40.32px]">
            In my spare time
          </h4>
          <p className="max-w-[700px] text-black font-normal text-base leading-[22px]">
            I enjoy history, art, epistemology, and hopefully more travelling. I have a close-knit
            group of friends with whom I spend a lot of time. Playing the ukulele and violin helps
            me relax when I'm stressed. The city lights and architecture never fail to fascinate me.
          </p>
          <Image
            src="/hobby-background.png"
            width={280}
            height={280}
            alt="hobby-icon"
            className="absolute right-[17%] bottom-[20%] translate-x-1/2 translate-y-1/2"
          />
        </div>
        {/* Images */}
        <div className="flex items-center justify-center gap-6 z-[5] scroll-in">
          {hobbyImages.map((hobby) => (
            <Image
              key={hobby.id}
              src={hobby.url}
              width={282}
              height={360}
              alt={hobby.alt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hobby
