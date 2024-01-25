import React from 'react'
import PersonalForm from './StepForms/PersonalForm';
import EducationForm from './StepForms/EducationForm';
import ConfirmForm from './StepForms/ConfirmForm';
import ExperienceForm from './StepForms/ExperienceForm';
import LanguageForm from './StepForms/LanguageForm';
import SkillsForm from './StepForms/SkillsForm';


const StepForm = () => {
    const currentStep = 1;
    function renderForms(step){
        if(step === 1){
            return <PersonalForm />
        }else if(step === 2){
            return <EducationForm />
        }else if(step === 3){
            return <ExperienceForm />
        }else if(step === 4){
            return <LanguageForm />
        }else if(step ===5){
            return <SkillsForm />
        }else{
            return <ConfirmForm />
        }
    }
  return (
    <div>
        {renderForms(currentStep)}
    </div>
  )
}

export default StepForm