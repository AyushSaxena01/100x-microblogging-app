import React from 'react'
import Avtar from '../common/Avtar'
import CommentIcon from '../common/Comment.icon'
import RetweetIcon from '../common/Retweet.icon'
import LikesIcon from '../common/Likes.icon'
import ReachIcon from '../common/Reach.icon'
import ShareIcon from '../common/Share.icon'


export default function Tweet() {
  return (
    <>
     <div className="flex self-stretch py-2 px-4 items-start box-border border-b border-solid border-neutral/700">
    <div className="flex flex-start flex-col">
      <Avtar imgUrl='src/assets/avtar.png'  />
      <div className="flex flex-row gap-x-4 justify-start">
        <section className="pl-12">
        </section>
        <section className="-mt-6 flex flex-col gap-y-2">
          <span className="font-Inter text-base not-italic font-normal leading-1.2 text-neutral/50">
            Writing gets easier after the first sentence.<br /><br />Lifting gets easier after the first
            set.<br /><br />People think and think and think until they finally decide to act. Their attention
            shifts
            from internal to external, and the difficulty they created in their mind vanishes.
          </span>
          <div className="flex py-3 px-0 justify-between items-center self-stretch w-full">
              <CommentIcon count = '11' />

             <RetweetIcon />
      
              <LikesIcon />
            
              <ReachIcon count='99.99'/>
      
              <ShareIcon />
          
          </div>
        </section>
      </div>
    </div>
  </div>
    </>
  )
}
