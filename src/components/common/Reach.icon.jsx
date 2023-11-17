import React from 'react'
import Reach from '../../assets/reach-sv.svg'

export default function ReachIcon({count, ...rest}) {
  return (
    <>
            <button className="flex items-start gap-1.3" {...rest}>
              <img src={Reach} alt="reach" />
              <span className="font-Inter font-sm not-italic font-normal leading-1.2 text-neutral/500">{count}</span>
            </button> 
    </>
  )
}
