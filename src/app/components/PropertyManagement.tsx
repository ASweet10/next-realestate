import React from 'react'
import SectionHeader from './SectionHeader'
import { managementCompanies } from '../data/data'
import ManagementCard from './ManagementCard'

const PropertyManagement = () => {
  return (
    <div className='py-12'>
      <div className='w-4/5 mx-auto'>
          <SectionHeader header="Property Management Companies" />
          <div className='mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-center'>
            { managementCompanies.map((company) => {
                return (
                    <div key={company.id}>
                        <ManagementCard property={company} />
                    </div>
                )
            })}
            </div>
      </div>
    </div>
  )
}

export default PropertyManagement