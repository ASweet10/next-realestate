import React from 'react'

type headerProps = {
    header: string
}

const SectionHeader = ({header}: headerProps) => {
  return (
    <h1 className='text-center text-4xl md:text-5xl font-semibold pt-16'>{header}</h1>
  )
}

export default SectionHeader