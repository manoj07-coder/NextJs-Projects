'use client';
import React, { useState } from 'react'
import TextInput from '../FormInputs/TextInput'
import { useForm } from 'react-hook-form'
import NavButton from '../FormInputs/NavButton';
import SelectInput from '../FormInputs/SelectInput';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep, updateFormData } from '@/redux/slices/onBoardingSlice';

const PersonalForm = () => {

    const currentStep = useSelector((store)=>store.onboarding.currentStep)
    const formData = useSelector((store)=>store.onboarding.formData);
    console.log(formData);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)

    const gender = [
        {
            id:'male',
            title:'Male'
        },
        {
            id:'female',
            title:'Female'
        }
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
                Personal Info
            </h5>
            <p>Please provide your name, email address, and phone number.</p>
        </div>
        <div className='grid gap-2 sm:grid-cols-2'>
        <TextInput
        label='Full Name'
        name='fullname'
        register={register}
        errors={errors} />
       
        <TextInput
        label='Email Address'
        name='email'
        type='email'
        register={register}
        errors={errors} />
       
        <TextInput
        label='Phone Number'
        name='phone'
        type='number'
        register={register}
        errors={errors} />
        
        <TextInput
        label='Date of Birth'
        name='dob'
        type='date'
        register={register}
        errors={errors} />

        <SelectInput 
        label='Select your Gender'
        name='gender'
        register={register}
        options={gender}
         />

         <TextInput
         label='Your Location Address'
         name='location' 
         register={register}
         errors={errors}/>

         <TextInput
         label='Your Country of Residence'
         name='country'
         register={register}
         errors={errors}
          />
        </div>
        <NavButton />
    </form>
  )
}

export default PersonalForm