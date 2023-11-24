import React from 'react'
import { TweetProvider } from "../context/tweet/TweetProvider";

import Header from '../components/HomeFeed/HomeFeed.header'
import Main from '../components/HomeFeed/HomeFeed.main'
import Footer from '../components/HomeFeed/HomeFeed.footer'

export default function HomeFeed() {
  return (
    <>
      <div className="flex flex-col items-center bg-neutral/1000 justify-start h-screen">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}
