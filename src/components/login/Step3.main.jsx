import Button from "../common/Button";
import React from 'react'
import InputCode from "../common/InputCode";
import PropTypes from 'prop-types';

export default function MainStep3({onChangeCode, onClickButton}) {

  MainStep3.propTypes={
    onChangeCode:PropTypes.func.isRequired,
    onClickButton:PropTypes.func.isRequired
  }

  return (
    <>
        <main className="w-96.5 px-3.8">
    {/* form */}
    <div className="flex flex-col items-start gap-y-8 self-stretch">
      <div className="flex flex-col items-start gap-y-2 self-stretch">
        <span className="font-Inter text-2xl not-italic font-bold leading-1.2 text-neutral/50">We sent you a code</span>
        <span className="font-Inter text-sm not-italic font-normal leading-1.2 text- text-neutral/500">Enter it below to verify janedoe@gmail.com</span>
      </div>
      <div className="flex flex-col items-end gap-y-3 self-stretch">
        <InputCode  onChangeCode={onChangeCode} type='code' />
        <span className="font-Inter text-sm not-italic font-normal leading-1.2 text-twitter-blue-default">Didn’t receive a code?</span>        
      </div>
    </div>
  </main>
  <footer className="flex flex-grow flex-shrink-0 basis-0 px-3.8 w-96.5 pb-5">
    <div className="flex pt-20 pb-0 flex-col justify-end items-center gap-y-0.3 flex-grow flex-shrink-0 basis-0">
      <Button type="defaultwhite"  size="l" colour="black" dimension='whitebutton' onClick={onClickButton}>
       Next
      </Button>
    </div>
  </footer>
    </>
  )
}
