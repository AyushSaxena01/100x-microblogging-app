import React from 'react'
import wallimg from '../../assets/wall.png'
import avatar from '../../assets/avtar.png'
import EditPhoto from '../EditProfile/EditPhoto.icon'
import CancelIcon from '../EditProfile/Cancel.icon'
import Arrowleft from '../../assets/arrow-left.svg'

export default function HeaderEditProfile() {
  return (
    <>
     <header className="flex w-96.5 px-4 flex-col items-start gap-3">
      <section className="flex py-3 px-0 justify-between items-center self-stretch">
        <div className="flex items-center gap-5">
          <a href="userprofile.html"><button><img className="w-6 h-6" src={Arrowleft} alt="arrow" /></button></a> 
          <span className="font-Inter text-base not-italic leading-1.2 font-bold text-neutral/50">
            Edit profile
          </span>
        </div>
        <a href="userprofile.html">
          <button className="bg-neutral/50 py-2 px-5 rounded-4xl flex justify-center items-center box-border hover:bg-neutral/200 disabled:opacity-50 backdrop-blur-23.6px shadow-btn">
            <span className="text-neutral/1000 text-sm font-bold not-italic leading-1.2 font-Inter text-center">
              Save
            </span>
          </button>
        </a>
      </section>
      <section className="relative">
        <div className="flex items-center justify-center  self-stretch">
          <img className="w-82.5 h-48.5 shrink-0" src={wallimg} alt="Cover pic" />
          <img className="h-4.25 w-4.25 shrink-0 rounded-full object-cover self-start border-4 border-black border-solid absolute top-36 left-4" src={avatar} alt />
          <div className="absolute top-40 left-8">
            <EditPhoto />
          </div>
          <div className="flex justify-center items-center flex-row w-full h-full absolute gap-2">
          <EditPhoto />
          <CancelIcon />
          </div>
        </div>
    </section>
    </header> 
    </>
  )
}
