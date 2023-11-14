import React from 'react'
import Reach from '../../assets/reach-sv.svg'

export default function ReachIcon() {
  return (
    <>
     <button className="flex items-start gap-1.3">
              <img src={Reach} alt="reach" />
              <span className="font-Inter font-sm not-italic font-normal leading-1.2 text-neutral/500">99.6k</span>
            </button> 
    </>
  )
}
