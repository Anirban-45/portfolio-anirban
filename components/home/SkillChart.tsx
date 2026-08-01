import React from 'react'
import { Chart } from './Chart'



const SkillChart = () => {
  return (
    <section className=" container px-[120px] pb-[40px] flex flex-col gap-10 items-start justify-center">
      <h2 className=" font-medium text-4xl leading-[45.3px] text-monochrome90 scroll-in scroll-d1">
        My skill spread around the industry:
      </h2>
      <div className="w-full px-10 bg-[#FAF8F5] scroll-in scroll-d2">
        <Chart />
      </div>
    </section>
  )
}

export default SkillChart
