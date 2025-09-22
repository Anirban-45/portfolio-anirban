import React from 'react'

const education = [
  {
    school: 'Tallinn University',
    degree: 'MSc. in Human Computer Interaction',
    session: '2025 - Present',
  },
  {
    school: 'Islamic university of Technology',
    degree: 'BSC. in Software Engineering',
    session: '2018 - 2022',
  },
  {
    school: 'Notre Dame College, Dhaka',
    degree: 'HSC, science',
    session: '2015 - 2017',
  },
  // {
  //   school: 'Ideal School and College, Dhaka',
  //   degree: 'SSC, science',
  //   session: 'upto 2015',
  // },
]
const ExperienceEducation = () => {
  return (
    <div className=" flex flex-col gap-5 items-start justify-center text-monochrome110">
      <h3 className="text-[#383838] font-semibold text-[32px] leading-[40.32px]">
        Education
      </h3>
      {education.map((education) => (
        <div key={education.degree} className=" flex flex-col items-start justify-center gap-1">
          <p className="pb-1 font-medium text-[16px] leading-[20.16px]">
            {education.session}
          </p>
          <h4 className="font-semibold text-[22px] leading-[27.72px]">
            {education.school}
          </h4>
          <h5 className="font-semibold text-[16px] leading-[20.16px] italic text-matchaBase">
            {education.degree}
          </h5>
        </div>
      ))}
    </div>
  )
}

export default ExperienceEducation
