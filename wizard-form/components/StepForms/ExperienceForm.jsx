import React, { useState } from 'react'
import NavButton from '../FormInputs/NavButton';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setCurrentStep, updateFormData } from '@/redux/slices/onBoardingSlice';
import TextInput from '../FormInputs/TextInput';
import SelectInput from '../FormInputs/SelectInput';

const ExperienceForm = () => {
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
        {
            id:'php',
            title:"Php",
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
                Programming Experience
            </h5>
            <p>Please provide your info here.</p>
        </div>
        <div className='grid gap-2 sm:grid-cols-2'>

        <SelectInput 
        label='Programmmig Languages Known'
        name='knownLanguages'
        multiple={true}
        register={register}
        options={languages}
        />

        <TextInput
        label='Years of Programming Experience'
        name='programmingExperience'
        register={register}
        errors={errors} />
       
        <TextInput
        label='Portfolio Link'
        name='portfolioLink'
        register={register}
        errors={errors} />
       
        </div>
        <NavButton />
    </form>
  )
}

export default ExperienceForm