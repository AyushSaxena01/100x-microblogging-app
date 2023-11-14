import React, { useState } from 'react'
import Header from '../components/login/Steps.header';
import Main from '../components/login/Step1.main'

  export default function Step1() {

    const [details,setDetails] = useState({
      name:'',
      email:'',
      dobMonth:'',
      dobDay:'',
      dobYear:''
    });

    const emailCheck = ()=>{
      let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if(emailRegex.test(details['email'])){
        return;
      } else {
        alert("enter valid email");
      }
    }

    const onChangeName = (e)=>{
      setDetails({...details,name:e.target.value})
    }

    const onChangeEmail = (e)=>{
      setDetails({...details,email:e.target.value})
    }

    const onChangeMonth = (e)=>{
      setDetails({...details,dobMonth:e.target.value})
    }

    const onChangeDay = (e)=>{
      setDetails({...details,dobDay:e.target.value})
    }

    const onChangeYear = (e)=>{
      setDetails({...details,dobYear:e.target.value})
    }

  return (
  <>
  <div className="bg-neutral/1000 flex flex-col items-center gap-y-3 justify-start h-screen pt-0 flex-shrink-0">
    <Header step ="1"/>
    <Main onChangeName={onChangeName} onChangeDay = {onChangeDay} onChangeEmail={onChangeEmail} onChangeMonth = {onChangeMonth} onChangeYear={onChangeYear} onSubmit={emailCheck} />
  </div>
  {console.log(details)}
  </>
  )
}
