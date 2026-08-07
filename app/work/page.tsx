import WorkContainer from '@/components/work/WorkContainer'
import WorkHeader from '@/components/work/WorkHeader'
import React from 'react'

export const metadata = { title: "Work", description: "..." }

const WorkPage = () => {
  return (
    <main className="pt-[80px] flex flex-col items-center justify-center ">
      <WorkHeader />
      <WorkContainer />
    </main>
  )
}

export default WorkPage
