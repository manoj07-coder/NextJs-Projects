import StepForm from '@/components/StepForm'
import Steps from '@/components/Steps'
import React from 'react'

const StudentOnboardingPage = () => {
  return (
    <div className='bg-blue-50 min-h-screen p-4'>
        {/* card container */}
        <div className='mx-auto w-full max-w-5xl p-4 bg-white border border-gray-200
        rounded-lg shadow sm:p-4 md:p-6 dark:bg-gray-800 dark:border-gray-700
        grid grid-cols-12 gap-4 min-h-screen'>
            {/* steps */}
            <Steps />
            {/* stepForm */}
            <div className='rounded-lg col-span-full md:col-span-8'>
                <StepForm />
            </div>

        </div>
    </div>
  )
}

export default StudentOnboardingPage