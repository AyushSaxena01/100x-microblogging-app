import React from 'react'
import { TweetContext } from '../../context/tweet/TweetContext'
import avatar from '../../assets/avtar.png'
import TextArea from '../common/TextArea'
import { useContext } from 'react'

export default function MainComposeTweet() {
  const {tweetText, setTweetText} = useContext(TweetContext);

  function onChangeText (e){
    setTweetText({
      text:e.target.value,
      count:e.target.value.length,  
    });
   }

  return (
    <>
      <main className="flex w-96.5 py-3 px-4 justify-between items-center">
    <div className="flex items-start gap-x-3">
      <img className="w-9 h-9 rounded-full" src={avatar} alt="Avtar" />
      <TextArea value={tweetText.text} onChange={onChangeText} type = 'tweet' />
    </div>
  </main> 
    </>
  )
}
