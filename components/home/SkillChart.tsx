import React from 'react'
import { Chart } from './Chart'

const SkillChart = () => {
  return (
    <section className="container px-6 sm:px-10 md:px-16 lg:px-[120px] lg:pt-6 lg:pb-10 flex flex-col gap-6 sm:gap-8 lg:gap-10 items-start justify-center">
      <h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl leading-[1.2] lg:leading-[45.3px] text-monochrome90 scroll-in">
        My skill spread around the industry:
      </h2>
      <div className="w-full px-4 sm:px-6 lg:px-10 bg-[#FAF8F5] scroll-in scroll-d1">
        <Chart />
      </div>
    </section>
  )
}

export default SkillChart
