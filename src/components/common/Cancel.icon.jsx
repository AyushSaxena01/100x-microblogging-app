import React from 'react'
import cancel from '../../assets/cancel.svg'

export default function CancelIcon() {
  return (
    <>
      <button>
        <img className="shrink-0 w-6 h-6" src={cancel} alt="cancel" />
      </button>
    </>
  )
}
