import React from 'react'
import Button from '../common/Button'
import PropTypes from 'prop-types';
import InputCode from '../common/InputCode';

export default function MainStep4({onChangeCode, onClickButton}) {

  MainStep4.propTypes={
    onChangeCode:PropTypes.func.isRequired,
    onClickButton:PropTypes.func.isRequired
  }
  return (
    <>
       <main className="w-96.5 px-3.8">
    {/* form */}
    <div className="flex flex-col items-start gap-y-8 self-stretch">
      <div className="flex flex-col items-start gap-y-2 self-stretch">
        <span className="font-Inter text-2xl not-italic font-bold leading-1.2 text-neutral/50">You’ll need a password</span>
        <span className="font-Inter text-sm not-italic font-normal leading-1.2 text- text-neutral/500">Make sure it’s 8 characters or more</span>
      </div>
     <InputCode onChangeCode={onChangeCode} type='password'></InputCode>
    </div>
  </main>
  <footer className="flex flex-grow flex-shrink-0 basis-0 px-3.8 w-96.5 pb-5">
    <div className="flex pt-20 pb-0 flex-col justify-end items-center gap-y-0.3 flex-grow flex-shrink-0 basis-0">
      <Button type="defaultwhite" text="Next"  size="l" colour="black" dimension = 'whitebutton' onClick={onClickButton}>
        Next
      </Button>
    </div>
  </footer>
    </>
  )
}
