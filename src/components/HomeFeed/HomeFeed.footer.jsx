import React from 'react'
import { useNavigate } from 'react-router-dom';

import HomeIcon from '../common/HomeFeed.icon'
import MyProfileIcon from '../common/MyProfile.icon'

export default function FooterHomeFeed() {
  const navigate = useNavigate();
  return (
    <>
   <footer className="flex flex-row fixed bottom-0 py-5 px-6 justify-center items-center gap-x-10 border-t border-solid border-neutral/800 bg-neutral/1000 w-96.5">
  {/* <div className="flex py-3 px-8 justify-center items-center gap-2.5 -translate-y-16 absolute rounded-9xl bg-searchbar-fill">
    <span className="font-Inter text-m leading-1.2 font-normal not-italic text-neutral/50">Copied to clipboard.</span>
  </div> */}

  <HomeIcon onClick = {()=>{navigate('/HomeFeed')}} />
    <MyProfileIcon onClick = {()=>{navigate('/UserProfile')}}/>
</footer>
    </>
  )
}
