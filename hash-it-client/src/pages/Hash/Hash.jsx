import React from 'react';
import StepWizard from 'react-step-wizard';
import { NavLink } from 'react-router-dom'

import StepOne from './Steps/StepOne'
import StepTwo from './Steps/StepTwo'
import StepThree from './Steps/StepThree'
import StepFour from './Steps/StepFour'
// import StepFive from './Steps/StepFive'

import './style.scss'

function Hash() {
  return (
    <>
      <header className='hash-header'>
        <nav>
          <NavLink to='/'>Home</NavLink>
        </nav>
      </header>
      <StepWizard>
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
        {/* <StepFive /> */}
      </StepWizard>
    </>
  );
}

export default Hash