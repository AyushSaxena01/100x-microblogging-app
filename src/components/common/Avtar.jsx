import React from 'react'
import PropTypes from 'prop-types';

export default function Avtar({imgUrl, userName, userHandle}) {

    Avtar.propTypes={
        imgUrl:PropTypes.string.isRequired
    }

  return (
    <>
     <div className="flex flex-row items-start gap-x-4 self-stretch">
        <button className="w-12 h-12 flex-shrink-0 rounded-6xl">
          <img className="rounded-full" src={imgUrl} alt="Avtar" />
        </button>
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
