import Image from 'next/image'
import React from 'react'

type CoverProps = {
    url: string
    alt: string
}

const Cover = ({url,alt}: CoverProps) => {
  return (
    <section className='container' data-outline-boundary="top">
        <Image src={url} width={1440} height={800} alt={alt}/>
    </section>
  )
}

export default Cover
