"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { LucideArrowRight } from 'lucide-react'

const services = [
  {
    iconUrl: '/Lightning.png',
    title: 'Strategy and Brand Research',
    desc: 'Understand the market, define the audience & ideate solutions.',
    buttonText: 'Chat with me',
    url: 'https://wa.me/8801926214838'
  },
  {
    iconUrl: '/box.png',
    title: 'Product Design',
    desc: 'Lets talk about project ideas and develop a prototype.',
    buttonText: 'Let\u2019s work together',
    url: 'mailto:anirban.tasfin.azad@gmail.com'
  },
  {
    iconUrl: '/folder-code.png',
    title: 'Development',
    desc: 'Sharing handoffs and insights working in a diverse team.',
    buttonText: 'Hire me',
    url: 'https://dribbble.com/qitzuphyn'
  },
]

const Service = () => {
  return (
    <section className="container px-6 sm:px-10 md:px-16 lg:px-[120px] flex flex-col gap-6 sm:gap-8 lg:gap-10 items-start justify-center">
      {/* Section Title */}
      <h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl leading-[1.2] lg:leading-[45.3px] text-monochrome90 scroll-in scroll-d1">
        3 ways I can help you
      </h2>

      {/* Service Container */}
      <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 sm:gap-6 w-full scroll-in scroll-d2">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-5 flex flex-1 flex-col gap-4 items-start justify-center bg-[#F1E5D1]"
          >
            <div className="flex items-center justify-start gap-3 w-full">
              <Image
                src={service.iconUrl}
                height={24}
                width={24}
                alt="service-icon"
                className="shrink-0"
              />
              <h4 className="text-sm sm:text-base leading-[20.1px] font-normal text-[#5B5B5B]">
                {service.title}
              </h4>
            </div>
            <p className="font-normal text-xl sm:text-2xl lg:text-[28px] leading-[1.3] lg:leading-[35.3px] text-monochrome90 min-h-[80px] sm:min-h-[100px] lg:h-[140px]">
              {service.desc}
            </p>
            <div className="flex items-center gap-3 text-monochrome90 group">
              <Button
                variant="link"
                onClick={() => window.open(service.url)}
                className="font-medium text-lg sm:text-xl leading-[26px] p-0 text-monochrome110"
              >
                {service.buttonText}
              </Button>
              <LucideArrowRight
                width={20}
                height={20}
                className="mt-1 group-hover:translate-x-1.5 group-hover:animate duration-500 text-monochrome110 shrink-0"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Service
