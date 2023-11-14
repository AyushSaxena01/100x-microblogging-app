import React from 'react'
import avatar from '../../assets/avtar.png'
import CommentIcon from '../common/Comment.icon'
import RetweetIcon from '../common/Retweet.icon'
import LikesIcon from '../common/Likes.icon'
import ReachIcon from '../common/Reach.icon'
import ShareIcon from '../common/Share.icon'


export default function Tweet() {
  return (
    <>
      <div className="flex self-stretch py-2 px-4 items-start gap-x-4 box-border border-b border-solid border-neutral/700">
        <button className="w-12 h-12 flex-shrink-0 rounded-6xl">
          <img className="rounded-full" src={avatar} alt="Avtar" />
        </button>
        <div className="flex flex-start flex-col gap-y-2">
          <div className="flex flex-col items-start gap-y-0.3 self-stretch">
            <div className="flex flex-row items-center gap-x-2 self-stretch">
            <button>
              <span className="font-Inter text-base not-italic font-medium leading-1.2 text-neutral/50">Name</span>
            </button>
            <button >
              <span className="font-Inter text-base not-italic font-normal text-neutral/500">@handle •
                10h</span>
            </button>
            </div>
            <span className="font-Inter text-base not-italic font-normal leading-1.2 text-neutral/50">
              Writing gets easier after the first sentence. <br /><br /> Lifting gets easier after the first
              set.
              <br /><br /> People think and think and think until they finally decide to act. Their attention
              shifts
              from internal to external, and the difficulty they created in their mind vanishes.
            </span>
          </div>
          <div className="flex py-3 px-0 justify-between items-center self-stretch w-full">
            <CommentIcon />
            <RetweetIcon />
            <LikesIcon />
            <ReachIcon />
           <ShareIcon />
          </div>
        </div>
      </div>
    </>
  )
}
