import React from 'react'
import { ChevronLast,ChevronLeft,ChevronRight } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentStep } from '@/redux/slices/onBoardingSlice'

const NavButton = () => {
    const currentStep  = useSelector((store)=>store.onboarding.currentStep)

    const dispatch = useDispatch();

    function handlePrevious (){
        dispatch(setCurrentStep(currentStep - 1))
    }

  return (
    <div className='flex item-center justify-between'>
        { currentStep > 1 && (
        <button type='button' className='inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm
        font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4
        focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-slate-800
         dark:bg-blue-600 dark:hover:bg-blue-700 '
         onClick={handlePrevious}>
            <ChevronLeft />
            <span>Previous</span>
        </button>
        )
        }
        <button type='submit' className='inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm
        font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4
        focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-slate-800
         dark:bg-blue-600 dark:hover:bg-blue-700 '>
            
            <span>
                {currentStep === 6 ? 'Confirm and Submit': 'Save and Continue'}
            </span>
            <ChevronRight />
        </button>
        
    </div>
  )
}

export default NavButton