import React from 'react'
import { Chart } from './Chart'



const SkillChart = () => {
  return (
    <section className=" container px-[120px] pt-6 pb-10 flex flex-col gap-10 items-start justify-center">
      <h2 className=" font-medium text-4xl leading-[45.3px] text-monochrome90 scroll-in">
        My skill spread around the industry:
      </h2>
      <div className="w-full px-10 bg-[#FAF8F5] scroll-in scroll-d1">
        <Chart />
      </div>
    </section>
  )
}

export default SkillChart
