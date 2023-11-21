// import React from 'react'
// import Header from '../components/ComposeTweet/ComposeTweet.header'
// import ComposeTweetMain from '../components/ComposeTweet/ComposeTweet.main'
// import Footer from '../components/ComposeTweet/ComposeTweet.footer'
// import { useState, useContext } from 'react'
// import { HomeContext } from '../context/HomeContext'
// import { HomeProvider } from '../context/HomeProvider'

// function ComposeTweet({ userid=2, userName='@Anexas', userFullName='Ayush Saxena',userImage='src/assets/avtar.png'}) {

// const {details, setDetails} = useContext(HomeContext);

// function onChangeText (e){
//   setDetails((details,e)=>{
//     return ({
//      ...details,postDetails:{...details.postDetails,Post:{...details.postDetails.Post,text:e.target.value}}
//     });
//   });
//  }
 
//  const handleTweet = ()=>{
  
//   setDetails((details)=>{
//     return({
//       ...details,postDetails:{...details.postDetails,Post:{...details.postDetails.Post,postedBy:{ userid:userid, userName:userName, userFullName:userFullName,userImage:userImage}}}
//     });
//   });

//  setDetails((details)=>{
//   return({
//     ...details,tweets:[...details.tweets,details.postDetails]
//   })
//  })
 
//  }
 
//   // function onChangeText (e){
//   //  setTweetText(e.target.value);
//   // }

//   // const handleTweet = ()=>{
//   //   const newObj = {text:tweetText,id:tweet.length+1};
//   //   setTweet([...tweet,newObj]);
//   //   setTweetText('');
//   // }

//   return (
//     <>
//      <div className="flex flex-col items-center bg-neutral/1000  justify-start h-screen">
//     <HomeProvider>
//   <Header postButton={handleTweet} />
//  <ComposeTweetMain text={details.postDetails.Post.text} onChangeText={onChangeText} />
//  {console.log(details.tweets)}
//  </HomeProvider>
 
//  <Footer />
// </div>

//     </>
//   )
// }

// export default ComposeTweet;

import React, { useContext } from 'react';
import Header from '../components/ComposeTweet/ComposeTweet.header';
import ComposeTweetMain from '../components/ComposeTweet/ComposeTweet.main';
import Footer from '../components/ComposeTweet/ComposeTweet.footer';
import { HomeContext } from '../context/HomeContext';
import { HomeProvider } from '../context/HomeProvider';

function ComposeTweet({ userid = 2, userName = '@Anexas', userFullName = 'Ayush Saxena', userImage = 'src/assets/avtar.png' }) {
  
  const { details , setDetails } = useContext(HomeContext);

  function onChangeText(e) {
    setDetails((prevDetails) => ({
      ...prevDetails,
        Post: { ...prevDetails.Post, text: e.target.value },
      }));
  }

  const handleTweet = () => {

    const newPost = {...details.Post,postedBy: { userid, userName, userFullName, userImage }}
    setDetails((prevDetails) => ({
      ...prevDetails,
        Post: {
          ...newPost, text:''
        },
      tweets: [...prevDetails.tweets, newPost],
    }));
  };

  return (
    <HomeProvider>
    <div className="flex flex-col items-center bg-neutral/1000  justify-start h-screen">
     
        <Header postButton={handleTweet} />
        <ComposeTweetMain text={details.postDetails.Post.text} onChangeText={onChangeText} />
        {console.log(details.tweets)} {/* This should be details.tweets, not just tweets */}
      
      <Footer />
    </div>
    </HomeProvider>
  );
}

export default ComposeTweet;
