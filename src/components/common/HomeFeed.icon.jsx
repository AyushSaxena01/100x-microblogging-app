import React from 'react'

export default function HomeFeedIcon({...rest}) {
  return (
    <>
       <button className="group" {...rest}>
      <svg className="w-6 h-6 fill-white  group-focus:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z" />
      </svg>
      <svg className="w-6 h-6  fill-white hidden group-focus:flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z">
        </path></svg>
    </button>
    </>
  )
}
