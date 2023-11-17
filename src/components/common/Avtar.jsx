import React from 'react'
import PropTypes from 'prop-types';

export default function Avtar({imgUrl, userName, userHandle,size='m'}) {

    Avtar.propTypes={
        imgUrl:PropTypes.string.isRequired,
        size:PropTypes.string.isRequired
    }

   const Size = {
    s:'w-9 h-9',
    m:'w-12 h-12',
    l:''
   }

  return (
    <>
     <div className="flex flex-row items-start gap-x-4 self-stretch">
        
          <img className={`${Size[size]} rounded-full shrink-0`} src={imgUrl} alt="Avtar" />
        
        {
             (userHandle !== undefined && userName !== undefined) && (
                <button className="flex flex-row items-start gap-x-2 self-stretch">
                <span className="font-Inter text-base not-italic font-medium leading-1.2 text-neutral/50">{userName}</span>
                <span className="font-Inter text-base not-italic font-normal text-neutral/500">{userHandle} •
                  10h</span>
              </button>
             )
        }
      </div> 
    </>
  )
}
