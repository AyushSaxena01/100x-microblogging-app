import React from 'react'
import cancel from '../../assets/cancel.svg'

export default function CancelIcon({...rest}) {
  return (
    <>
      <button {...rest}>
        <img className="shrink-0 w-6 h-6" src={cancel} alt="cancel" />
      </button>
    </>
  )
}
