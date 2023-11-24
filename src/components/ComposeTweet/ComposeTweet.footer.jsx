import React, { useContext } from 'react'
import { TweetContext } from '../../context/tweet/TweetContext'

export default function FooterComposeTweet() {
 
  const {tweetText} = useContext(TweetContext);
  const wordCount = ()=>{
   
  }

  return (
    <>
      <footer className="flex w-96.5 py-3 px-4 items-center gap-5 border-t border-solid border-neutral/800 fixed bottom-0">
    <div className="font-inter text-sm not-italic leading-1.2 font-normal text-neutral/50">
      {tweetText.count}/280
    </div>
  </footer> 
    </>
  )
}
