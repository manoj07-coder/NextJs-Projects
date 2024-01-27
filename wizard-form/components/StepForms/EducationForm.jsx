import React, { useState } from 'react'
import TextInput from '../FormInputs/TextInput';
import NavButton from '../FormInputs/NavButton';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setCurrentStep, updateFormData } from '@/redux/slices/onBoardingSlice';

const EducationForm = () => {
    const currentStep = useSelector((store)=>store.onboarding.currentStep)
    const formData = useSelector((store)=>store.onboarding.formData);
    console.log(formData);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)


    const {
        register,
        reset,
        watch,
        handleSubmit,
        formState:{errors},
    } = useForm({
        defaultValues:{
            ...formData
        }
    })

    async function processData (data){
        dispatch(updateFormData(data));
        dispatch(setCurrentStep(currentStep + 1))
    }

  return (
    <form className='px-12 py-4' onSubmit={handleSubmit(processData)}>
        <div className='mb-8'>
            <h5 className='text-xl md:text-3xl font-bold 
            text-gray-900 dark:text-white'>
                Educational Background
            </h5>
            <p>Please provide your name, email address, and phone number.</p>
        </div>
        <div className='grid gap-2 sm:grid-cols-2'>
        <TextInput
        label='Highest level of Education'
        name='levelOfEducation'
        register={register}
        errors={errors} />
       
        <TextInput
        label='Name of the Last Institution Attended'
        name='lastInstitution'
        register={register}
        errors={errors} />
       
        <TextInput
        label='Graduation Year'
        name='graduationYear'
        type='number'
        register={register}
        errors={errors} />
        
        </div>
        <NavButton />
    </form>
  )
}

export default EducationForm