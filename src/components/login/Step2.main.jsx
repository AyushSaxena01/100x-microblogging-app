import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';

import correct from '../../assets/correct.svg'

import Button from '../common/Button'

export default function MainStep2() {
  const navigate = useNavigate();
  const { loggedIn } = useContext(AuthContext);

  const fullDate = ()=>{
 
const fullDate = new Date(loggedIn.dobYear, loggedIn.dobMonth, loggedIn.dobDay);

const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formatter = new Intl.DateTimeFormat('en-US', options);

return  formatter.format(fullDate).toString();

  }

  const date= fullDate();

  const redirect = ()=>{
    navigate('/step3');
  }

  

  return (
    <>
       <main className="w-96.5 px-3.8">
    {/* form */}
    <div className="flex flex-col items-start gap-y-5 self-stretch">
      <span className="text-neutral/50 font-inter font-bold text-2xl not-italic leading-1.2">Create your account</span>
      <div className="flex flex-col items-center self-stretch gap-y-8">
        {/* Name */}
        <fieldset className="flex items-center justify-between self-stretch py-4 px-3 box-border rounded border border-solid border-neutral/500 focus-within:border-twitter-blue-default gap-y-2.5 group/input">
          <legend className="font-medium font-Inter box-border py-0 px-1 inline-flex text-xs not-italic text-neutral/500 leading-1.2 group-focus-within/input:text-twitter-blue-default">
            Name
          </legend>
          <input className="w-full flex bg-neutral/1000 font-Inter text-xl text-twitter-white-100 font-normal leading-1.2 not-italic placeholder-neutral/500 group-focus-within/input:outline-none peer" type="text" placeholder="Name" value={loggedIn.name}/>
          <img className="w-6 h-6" src={correct} alt="correct icon" />
        </fieldset>
        <fieldset className=" flex items-center justify-between self-stretch py-4 px-3 box-border rounded border border-solid border-neutral/500 focus-within:border-twitter-blue-default gap-y-2.5 group/input">
          <legend className="font-medium font-Inter box-border py-0 px-1 inline-flex text-xs not-italic text-neutral/500 leading-1.2 group-focus-within/input:text-twitter-blue-default">
            Email
          </legend>
          <input type="email" className="w-full flex bg-neutral/1000 font-Inter text-xl text-twitter-white-100 font-normal leading-1.2 not-italic placeholder-neutral/500 group-focus-within/input:outline-none peer" placeholder="Email" value={loggedIn.email}/>
          <img className="w-6 h-6" src={correct} alt="correct icon" />
        </fieldset>        
        {/* Date */}
        <fieldset className=" flex items-center justify-between self-stretch py-4 px-3 box-border rounded border border-solid border-neutral/500 focus-within:border-twitter-blue-default gap-y-2.5 group/input">
          <legend className="font-medium font-Inter box-border py-0 px-1 inline-flex text-xs not-italic text-neutral/500 leading-1.2 group-focus-within/input:text-twitter-blue-default">
            Date of Birth
          </legend>
          <input type="text" className="w-full flex bg-neutral/1000 font-Inter text-xl text-twitter-white-100 font-normal leading-1.2 not-italic placeholder-neutral/500 group-focus-within/input:outline-none peer" placeholder="Date Of Birth" value={date} />
          <img className="w-6 h-6" src={correct} alt="correct icon" />
        </fieldset>
      </div>
    </div>
  </main>
  <footer className="flex flex-grow flex-shrink-0 basis-0 px-3.8 w-96.5 pb-5">
    <div className="flex pt-20 pb-0 flex-col justify-end items-center gap-y-5 flex-grow flex-shrink-0 basis-0 self-stretch">
    <Button type="defaultblue" size="l" colour = 'white' dimension='bluebutton' onClick={redirect}>
      Sign up
    </Button>
    </div>
    {console.log(date)}
  </footer>
    </>
  )
}
