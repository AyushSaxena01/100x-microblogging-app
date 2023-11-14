import React from 'react'
import Header from '../components/UserProfile/UserProfile.header'
import Main from '../components/UserProfile/UserProfile.main'
import Footer from '../components/HomeFeed/HomeFeed.footer'

export default function UserProfile() {
  return (
    <>
      <div className="flex flex-col items-center bg-neutral/1000 justify-start h-full">
      <Header />
      <Main />
      <Footer />
  
</div>

    </>
  )
}
