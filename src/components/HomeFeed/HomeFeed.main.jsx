import React from 'react'
import Add from '../common/Add.icon'
import Tweet from '../../components/Tweet/Tweet'
import Tweet2 from '../../components/common/tweet2'
export default function MainHomeFeed() {
  return (
    <>
      <main className="flex flex-col   w-96.5  overflow-y-scroll">
 <Tweet />
 <Tweet />
 <Tweet />
 <Tweet />
  <a href="compose.html" className=" flex justify-end ">
    <Add />
  </a>
</main>

    </>
  )
}
