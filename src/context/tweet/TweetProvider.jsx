import React, { useEffect, useState } from "react";
import { TweetContext } from "./TweetContext";

export function TweetProvider({children}){

    const [tweet, setTweet] = useState([]);
    const [tweetText, setTweetText] = useState({
        text:'',
        count:'0'
    });
    
    useEffect(()=>{
        const storedArray = localStorage.getItem('tweet');
        if(storedArray !== 'undefined'){
            setTweet(JSON.parse(storedArray));
        } 
    },[]);

    useEffect(()=>{
        localStorage.setItem('tweet',JSON.stringify(tweet));
    },[tweet]);

    return(
        <>
        <TweetContext.Provider value = {{tweet, setTweet, tweetText, setTweetText}}>
            {children}
        </TweetContext.Provider>
        </>
    )
}

