import React from "react";
import { useNavigate } from 'react-router-dom';
import { TweetContext } from "../context/tweet/TweetContext";
import { TweetProvider } from "../context/tweet/TweetProvider";
import Header from "../components/ComposeTweet/ComposeTweet.header";
import ComposeTweetMain from "../components/ComposeTweet/ComposeTweet.main";
import Footer from "../components/ComposeTweet/ComposeTweet.footer";
import { useState, useContext } from "react";

function Post() {
  const { tweet, setTweet, tweetText, setTweetText  } = useContext(TweetContext);
  const navigate = useNavigate();
  const handleTweet = () => {
    // const newObj = { text: tweetText, id: tweet.length + 1 };

    const newObj = {  
      
      Meta: {
        comments:90, 
        reposts:60, 
        likes:800, 
        views:30},
      Post: {
        id:tweet.length+1, 
        text:tweetText, 
        postedAt:'', 
        postedBy: { 
          userid:2, 
          userName:'@Anexas', 
          userFullName:'Ayush Saxena',
          userImage:'src/assets/avtar.png'
        }
      }
    
    };

    setTweet([...tweet, newObj]);
    setTweetText({ text: "", count: 0 });
    // setTimeout(()=>{navigate('/HomeFeed')},1000);
  };

  return (
    <>
      <Header postButton={handleTweet} />
      <ComposeTweetMain />
      <Footer />
      {console.log(tweet)}
    </>
  );
}

function ComposeTweet() {
  return (
    <>
      <div className="flex flex-col items-center bg-neutral/1000  justify-start h-screen">
          <TweetProvider>
            <Post />
          </TweetProvider>
      </div>
    </>
  );
}

export default ComposeTweet;
