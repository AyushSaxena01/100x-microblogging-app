import React from 'react'
import Add from '../common/Add.icon'
import Tweet from '../Tweet/Post'
export default function MainUserProfile() {
  return (
    <>
       <main className="flex flex-col  w-96.5">
<Tweet />
<Tweet />
<Tweet />
  <a href="compose.html" className="flex justify-end ">
   <Add />
  </a>
</main>

    </>
  )
}
