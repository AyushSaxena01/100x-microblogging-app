import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { TweetProvider } from '../../context/tweet/TweetProvider';
import Add from '../common/Add.icon'
import Post from '../Tweet/Post'

export default function MainHomeFeed () {

let parsedTweets;
    const storedTweets = localStorage.getItem('tweet');

    if(storedTweets !== 'undefined'){
      parsedTweets=JSON.parse(storedTweets);
      console.log(parsedTweets);
    }else{
      console.log('storedTweets is undefined');
      parsedTweets=[];
    }

    const navigate = useNavigate();
   
  return (
    <>
    <main className="flex flex-col   w-96.5  overflow-y-scroll">
        <ul>
        {
          parsedTweets.map((element)=>{
          return (
            <li key={element.Post.id}>
              <Post Meta={element.Meta} Post={element.Post} />
            </li>
            )
          })
        }
        </ul>
    <Add onClick={()=>{navigate('/ComposeTweet')}}/>
</main>

    </>
  )
}
