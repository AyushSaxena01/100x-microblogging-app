
import React from 'react';
import ReachIcon from './Reach.icon';
import CommentIcon from './Comment.icon';
import LikeIcon from './Likes.icon';
import RetweetIcon from './Retweet.icon';
import ShareIcon from './Share.icon';
import Avtar from './Avtar'

  export default function tweet2() {
  return (
  <>
  <div className="flex w-117 py-2 px-4 items-start box-border border-b border-solid border-neutral/700">
    <div className="flex flex-start flex-col">
      <Avtar imgUrl='src/assets/avtar.png' userHandle='@anexas' userName='Ayush' />
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
            <button className="flex justify-center items-center gap-1.3">
              <CommentIcon />
              <span className="font-Inter font-sm not-italic font-normal leading-1.2 text-neutral/500">11</span>
            </button>
            <button className="flex justify-center items-center gap-1.3">
             <RetweetIcon />
              <span className="font-Inter font-sm not-italic font-normal leading-1.2 text-neutral/500">270</span>
            </button>
            <button className="flex justify-center items-center gap-1.3">
              <LikeIcon />
              <span className="font-Inter font-sm not-italic font-normal leading-1.2 text-neutral/500">1869</span>
            </button>
            <button className="flex items-start gap-1.3">
              <ReachIcon />
              <span className="font-Inter font-sm not-italic font-normal leading-1.2 text-neutral/500">99.6k</span>
            </button>
            <button>
              <ShareIcon />
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>
  </>
  )
}

