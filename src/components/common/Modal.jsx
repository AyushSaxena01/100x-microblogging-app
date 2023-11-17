import React from 'react'
import CancelIcon from './Cancel.icon'
import { createPortal } from 'react-dom';

export default function Modal({children, onClickCancel}) {
  return createPortal(
    <>
      <div className='flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-transparent'>
      <div className="fixed flex py-2.5 px-3.8 flex-col items-start gap-y-3 rounded-2xl bg-neutral/1000 mix-blend-mode: normal">
        <div className="flex w-110 py-3 px-4 items-center gap-x-5">
         <CancelIcon onClick={onClickCancel}/>
          <span className="font-Inter text-m not-italic font-bold leading-1.2 text-neutral/50">Modal</span>
        </div>
        <div className="flex h-35 pt-5 pr-5 pb-5 pl-5 flex-col items-start gap-y-2.5 self-stretch text-white">
        {children}
        </div>
      </div>
      </div>
    </>
  ,document.querySelector('#modal'))
}
