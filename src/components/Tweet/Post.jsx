import React from 'react'
import Avtar from '../common/Avtar'
import CommentIcon from '../common/Comment.icon'
import RetweetIcon from '../common/Retweet.icon'
import LikesIcon from '../common/Likes.icon'
import ReachIcon from '../common/Reach.icon'
import ShareIcon from '../common/Share.icon'


export default function Post({
  Meta: {comments, reposts, likes, views},
  Post: {id, text, postedAt, 
    postedBy: { userid, userName, userFullName,userImage }
  }
}) {
  return (
    <>
     <div className="flex self-stretch w-full py-2 px-4 items-start box-border border-b border-solid border-neutral/700">
    <div className="flex self-stretch flex-start flex-col">
      <Avtar imgUrl={userImage} userHandle={userName} userName={userFullName} size='m'/>
      <div className="flex flex-row gap-x-4 justify-start">
        <section className="pl-12">
        </section>
        <section className="-mt-6 flex flex-col w-full self-stretch gap-y-2">
          <div className="flex font-Inter text-base not-italic font-normal w-full self-stretch leading-1.2 text-neutral/50">
           {text.text}
          </div>
          <div className="flex py-3 px-0 justify-between items-center self-stretch w-full">
              <CommentIcon count = {comments} />

             <RetweetIcon count = {reposts}/>
      
              <LikesIcon />
            
              <ReachIcon count={views}/>
      
              <ShareIcon />
          
          </div>
        </section>
      </div>
    </div>
  </div>
    </>
  )
}
