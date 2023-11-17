import React from 'react'

export default function EditProfileButton({...rest}) {
  return (
    <div>
     <button {...rest} className="inline-flex py-2 px-5 justify-center items-center rounded-4xl border border-solid border-stroke-0">
  <span className="font-Inter text-base not-italic leading-1.2 font-bold text-neutral/50">
    Edit profile
  </span>
</button>

    </div>
  )
}
