import React from 'react'
import cancel from '../../assets/cancel.svg';
import PropTypes from 'prop-types';

export default function HeaderSteps({step}) {

  HeaderSteps.propTypes = {
    step:PropTypes.string.isRequired,
  }

  return (
  <>
    <header className="flex items-center w-96.5 pt-0 px-3.8">
      <div className="flex py-3 px-0 items-center self-stretch gap-x-5">
        <button>
          <img className='w-6 h-6' src={cancel} alt=''></img>
        </button>
        <span className="text-neutral/50 font-Interr font-bold not-italic leading-1.2 text-m">
          Step {step} of 4
        </span>
      </div>
    </header>
  </>
  )
}
