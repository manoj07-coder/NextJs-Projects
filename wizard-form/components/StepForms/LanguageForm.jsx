import React, { useState } from 'react'
import NavButton from '../FormInputs/NavButton';
import TextInput from '../FormInputs/TextInput';
import SelectInput from '../FormInputs/SelectInput';
import { setCurrentStep, updateFormData } from '@/redux/slices/onBoardingSlice';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const LanguageForm = () => {
    const currentStep = useSelector((store)=>store.onboarding.currentStep)
    const formData = useSelector((store)=>store.onboarding.formData);
    console.log(formData);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)

    const languages = [
        {
            id:'c',
            title:"C",
        },
        {
            id:"c++",
            title:'C++'
        },
        {
            id:'java',
            title:"Java",
        },
        {
            id:'javascript',
            title:"Javascript",
        },
        {
            id:'python',
            title:"Python",
        },
    ]

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
                Languages Prefered
            </h5>
            <p>Please provide your info here.</p>
        </div>
        <div className='grid gap-2 sm:grid-cols-2'>

        <SelectInput 
        label='Your Prefered Languages'
        name='preferedLanguages'
        register={register}
        options={languages}
        />
        </div>
        <NavButton />
    </form>
  )
}

export default LanguageForm