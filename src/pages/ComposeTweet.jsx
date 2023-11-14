import React from 'react'
import Header from '../components/ComposeTweet/ComposeTweet.header'
import ComposeTweetMain from '../components/ComposeTweet/ComposeTweet.main'
import Footer from '../components/ComposeTweet/ComposeTweet.footer'
import { useState } from 'react'

export default function ComposeTweet() {

  const [tweetText,setTweetText] = useState('');
  const [tweet, setTweet] = useState([]);
 
  function onChangeText (e){
   setTweetText(e.target.value);
  }

  const handleTweet = ()=>{
    const newObj = {text:tweetText,id:tweet.length+1};
    setTweet([...tweet,newObj]);
    setTweetText('');
  }

  return (
    <>
     <div className="flex flex-col items-center bg-neutral/1000  justify-start h-screen">
  <Header postButton={handleTweet} />
 <ComposeTweetMain text={tweetText} onChange={onChangeText} />
 {console.log(tweet)}
 <Footer />
</div>

    </>
  )
}
