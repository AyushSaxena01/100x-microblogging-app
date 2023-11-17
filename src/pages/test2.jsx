import React from 'react'
import ProfileHeader from '../components/UserProfile/ProfileHeader'
import Main from '../components/UserProfile/UserProfile.main'
import Footer from '../components/HomeFeed/HomeFeed.footer'

export default function UserProfile() {

    const User = {
        id:1,
        username:'@ayush',
        userFullName:'Ayush saxena',
        bio:'Guitar player, lead guitar - Maniac',
        userImage:'../../assets/avtar.png',
        Userbackground:'src/assets/wall.png',
        following:222,
        followers:789,
        bioLink:'maniac.io',
        joinedAt: '20  july 1999'
    }
    

  return (
    <>
      <div className="flex flex-col items-center bg-neutral/1000 justify-start h-full">
      <ProfileHeader User={User} />
      <Main />
      <Footer />
  
</div>

    </>
  )
}
