import React from 'react'

type headerProps = {
    header: string
}

const SectionHeader = ({header}: headerProps) => {
  return (
    <h1 className='text-start text-2xl md:text-3xl font-semibold pt-16'>{header}</h1>
  )
}

export default SectionHeader