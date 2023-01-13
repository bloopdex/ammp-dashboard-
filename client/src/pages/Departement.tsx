import React from 'react'
import { Sidebar } from '../components'

interface DepartmentProps {
  name: string,
 }

function Department({ name }: DepartmentProps) {
  return (
    <div className="flex">
      <Sidebar />
      <div className='grid gap-4 grid-col-6'>
        <div className='col-span-2'>

        </div>
      </div>
    </div>
  )
}

export default Department;
