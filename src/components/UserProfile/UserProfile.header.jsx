import React from 'react'
import wallimg from '../../assets/wall.png'
import avatar from '../../assets/avtar.png'
import Button from '../common/Button'
import LinkIcon from '../../assets/Link Icon.svg'
import Calendar from '../../assets/calendar-sv.svg'
import EditProfileButton from './EditProfileButton'

export default function HeaderUserProfile() {
  return (
    <>
        <header className="flex flex-col  w-96.5  bg-neutral/1000">
    <img className="w-96.5 h-37 flex-shrink-0" src={wallimg} alt="wallpaper" />
    <section className="flex px-3 flex-col justify-center items-center">
      {/* profile */}
      <img className="h-4.25 w-4.25 shrink-0 rounded-full object-cover self-start border-4 border-black border-solid absolute top-28" src={avatar} alt />
      <section className="flex w-full items-center justify-end pt-2">
        <a href="editprofile.html">
            <Button type='outlined' text='Edit profile' colour='white' size='m' dimension='blackbutton' />
        </a>
      </section>
      <section className="flex w-full  flex-col justify-center items-center gap-4 pb-2">
        <div className="flex flex-col self-stretch justify-end items-start gap-1">
          <span className="font-Inter text-xl not-italic leading-1.2 font-bold text-neutral/50">
            aarushe reddy 
          </span>
          <span className="font-Inter text-m not-italic leading-1.2 font-normal text-neutral/500">@aarushe_reddy</span>
        </div>
        <span className="font-Inter text-base not-italic leading-1.2 font-normal text-neutral/50">
          Digital Goodies Team - Web &amp; Mobile UI/UX development; Graphics; Illustrations
        </span>
        <div className="flex self-start items-start gap-5">
          <section className="flex items-center gap-1">
            <img className="w-3.4 h-3.8" src={LinkIcon} alt />
            <span className="font-Inter text-base not-italic leading-1.2 font-normal text-twitter-blue-default">pixsellz.io</span>
          </section>
          <section className="flex items-center gap-1">
            <img className="h-3.4 w-3.4" src={Calendar} alt />
            <span className="font-Inter text-base not-italic leading-1.2 font-normal text-neutral/500">Joined September 2018</span>
          </section>
        </div>
        <div className="flex items-end self-start gap-5">
          <div className="flex items-start gap-1">
            <span className="font-Inter text-base not-italic leading-1.2 font-normal text-neutral/50">
              217
            </span>
            <span className="font-Inter text-base not-italic leading-1.2 font-normal text-neutral/500">
              Following
            </span>
          </div>
          <div className="flex items-start gap-1">
            <span className="font-Inter text-base not-italic leading-1.2 font-normal text-neutral/50">
              118
            </span>
            <span className="font-Inter text-base not-italic leading-1.2 font-normal text-neutral/500">
              Followers
            </span>
          </div>
        </div>
      </section>
    </section>
  </header>
    </>
  )
}
