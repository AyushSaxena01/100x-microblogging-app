import React, { useState } from "react";
import PropTypes from 'prop-types';


export default function InputCode({onChangeCode, type}) {
   
  const Type={
    password:'Password',
    code:'Verification Code'
  }

    const [typeAttribute, setTypeAttribute] = useState('password');

    const toggleVisibility = ()=>{
        setTypeAttribute('text');
        document.querySelector("#codeInput").focus();
    }
    const toggleInvisibility = ()=>{
      setTypeAttribute('password');
    }


    InputCode.propTypes = {
      onChangeCode:PropTypes.func.isRequired,
      type:PropTypes.string.isRequired,
    }

  return (
    <>
     <fieldset className=" flex items-center justify-between self-stretch py-4 px-3 box-border rounded border border-solid border-neutral/500 focus-within:border-twitter-blue-default gap-y-2.5 group/input">
          <legend className="font-medium font-Inter box-border py-0 px-1 flex justify-center items-center text-xs not-italic text-neutral/500 leading-1.2 group-focus-within/input:text-twitter-blue-default">
          {Type[type]}
          </legend>
          <input id="codeInput" type={typeAttribute} className="w-full flex bg-neutral/1000 font-Inter text-xl text-twitter-white-100 font-normal leading-1.2 not-italic placeholder-neutral/500 group-focus-within/input:outline-none peer" placeholder={Type[type]} onChange={onChangeCode} onBlur={toggleInvisibility} />
          {typeAttribute==='password' && <button className="group" onClick={toggleVisibility}>
            <svg className="fill-none w-6 h-6 stroke-[#737373] group-focus:stroke-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25">
              <path d="M2 12.0256C2 12.0256 5 5.02563 12 5.02563C19 5.02563 22 12.0256 22 12.0256C22 12.0256 19 19.0256 12 19.0256C5 19.0256 2 12.0256 2 12.0256Z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 15.0256C13.6569 15.0256 15 13.6825 15 12.0256C15 10.3688 13.6569 9.02563 12 9.02563C10.3431 9.02563 9 10.3688 9 12.0256C9 13.6825 10.3431 15.0256 12 15.0256Z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>}
        </fieldset>
    </>
  );
}
