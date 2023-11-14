import React from 'react'
import add from '../../assets/Add.svg'
export default function AddIcon() {
  return (
    <>
      <button className=" bg-twitter-blue-default inline-flex fixed  bottom-18 p-4 mr-4.3 rounded-full items-end">
      <img className="w-8  h-8" src={add} alt='add icon' />
    </button>
    </>
  )
}
