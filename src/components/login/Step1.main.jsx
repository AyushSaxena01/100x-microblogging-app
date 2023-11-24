import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/auth/AuthContext'
import { useNavigate } from 'react-router-dom';

import Button from '../common/Button'
import Input from '../common/Input'
import InputEmail from '../common/InputEmail'
import Dob from '../common/Dob'

export default function MainStep1() {

  const navigate = useNavigate();
  const {loggedIn, setLoggedIn } = useContext(AuthContext);

  const emailCheck = ()=>{
   const email = loggedIn['email'];
    if(email.includes('@') && email.includes('.com')){
      navigate('/step2');
    } else {
      alert("enter valid email");
    }
  }

  const onChangeName = (e)=>{
    setLoggedIn({...loggedIn,name:e.target.value})
  }

  const onChangeEmail = (e)=>{
    setLoggedIn({...loggedIn,email:e.target.value})
  }

  const onChangeMonth = (e)=>{
    setLoggedIn({...loggedIn,dobMonth:e.target.value})
  }

  const onChangeDay = (e)=>{
    setLoggedIn({...loggedIn,dobDay:e.target.value})
  }

  const onChangeYear = (e)=>{
    setLoggedIn({...loggedIn,dobYear:e.target.value})
  }

  return (
    <>
       <main className="w-96.5 px-3.8">
      {/* form */}
      <div className="flex flex-col items-start gap-y-5 self-stretch">
        <span className="text-neutral/50 font-inter font-bold text-2xl not-italic leading-1.2">Create your account</span>
        <div className="flex flex-col items-center self-stretch gap-y-8">
          <Input onChange={onChangeName} type="name" />
          <InputEmail onChangeEmail={onChangeEmail} />
          <div className="flex flex-col items-start gap-y-2 self-stretch">
            <span className="text-neutral/50 font font-Inter text-m not-italic font-bold leading-1.2">Date of birth</span>
            <p className="text-secondary font-Inter text-sm not-italic font-normal leading-1.2">
              This will not be shown publicly. Confirm your own age, even if this
              account is for a business, a pet, or something else.
            </p>
          </div>
          {/* Date */}
          <div className="flex items-center gap-x-3 self-stretch">
           <Dob onChangeMonth={onChangeMonth} onChangeDay={onChangeDay} onChangeYear={onChangeYear}/>
          </div>
        </div>
      </div>
    </main>
    <footer className="flex flex-grow flex-shrink-0 basis-0 px-3.8 w-96.5 pb-5">
      <div className="flex pt-20 pb-0 px-5 flex-col justify-end items-center gap-y-0.3 flex-grow flex-shrink-0 basis-0">
      <Button type="defaultwhite"  size="m" colour = 'black' dimension='whitebutton' onClick={emailCheck}>Create account</Button>
      </div>
    </footer>
    </>
  )
}
