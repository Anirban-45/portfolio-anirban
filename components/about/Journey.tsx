import Image from 'next/image'
import React from 'react'

const Journey = () => {
  return (
    <section className="w-full bg-[#BAD7AA3D] text-monochrome90">
      <div className="container px-6 sm:px-10 md:px-16 lg:px-[120px] py-12 sm:py-16 lg:py-[80px] flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-9">
        <Image
          src="/about-hiking.png"
          width={300}
          height={290}
          alt="about-hiking"
          className="scroll-in scroll-in-left w-[220px] sm:w-[260px] lg:w-[300px] h-auto shrink-0"
        />

        <div className="flex flex-col gap-4 sm:gap-[18px] text-base lg:text-[17px] leading-[1.55] lg:leading-[26px] tracking-[0] scroll-in scroll-d2">
          {/* Title */}
          <h3 className="font-semibold text-2xl sm:text-[32px] leading-[1.25] lg:leading-[40.32px] pb-[2px]">
            What led me here
          </h3>
          {/* Para 1 */}
          <div>
            <p>
              I have always been interested in artworks and structures. All
              the manmade and the god-given natural entities enthralled me.
              Colors intrigued me. The geometric shapes, the way they are
              filled in with depths and textures, and the way each separate
              person arranges them; They bound to have a purpose. I have to
              say, finding order and patterns in certain places,
              ground-binding architectures, and interaction between people
              always made me think…
            </p>
            <div className="flex flex-col items-start justify-center font-medium text-base lg:text-[17px] leading-[1.55] lg:leading-[26px] mt-3">
              <p>- How do these physical proportions come together?</p>
              <p>- How do they form and attain order?</p>
              <p>- And what makes one piece unfit for the ecosystem?</p>
            </div>
          </div>
          {/* Para 2 */}
          <p>
            Later down the line, this curiosity led me to start writing.
            During my time at my university, I used to write articles or
            stories about people and inanimate objects. Sketching up their
            roles into the environment they belong to. Traversing through
            this path I figured out a certain thing in me. The problems we
            see in our real life and however they are occurring, do actually
            have a reason of significance. Each and every human has a reason
            to do or want something out of a situation. And I for once wanted
            to get to the bottom of it. Learn to know about the problem&apos;s
            architectures and affiliate me in a better way of achieving
            possible successful outcomes.
          </p>
          {/* Para 3 */}
          <p>
            Now as I was doing my bachelor&apos;s in software engineering, I
            thought about a way to work through this within my career. During
            the pandemic, there were a few free times in my hand when I
            started to learn about the{' '}
            <span className="font-medium text-monochrome110">
              User Experience culture
            </span>{' '}
            and became very interested in it. Getting myself familiarized
            with human centric narratives soon has driven me to find answers
            and connections amongst the world around us.
          </p>
          {/* Para 4 */}
          <p>
            In the end all I can say is that I am in love with UX. Because, I
            believe in the{' '}
            <span className="font-medium text-monochrome110">
              reasoning and the flow
            </span>{' '}
            of structured entities.{' '}
            <span className="font-medium text-monochrome110">
              I believe, progress relies in acceptance and actions.
            </span>{' '}
            And through different perspective we are sure to achieve better
            results.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Journey
