import React from 'react'
import steps from '@/utils/steps'
import Step from './Step'

const Steps = () => {
  return (
    <div className='rounded-lg col-span-full md:col-span-4
    bg-blue-600 px-6 py-10 flex flex-row justify-between
    md:flex-col md:justify-start gap-6 flex-wrap'>
        {
            steps.map((step)=>{
                return (
                    <Step key={step.number} step={step}/>
                )
            })
        }
    </div>
  )
}

export default Steps