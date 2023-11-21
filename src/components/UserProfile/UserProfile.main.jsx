import React from 'react'
import Add from '../common/Add.icon'
import Post from '../Tweet/Post'
export default function MainUserProfile() {
  return (
    <>
       <main className="flex flex-col  w-96.5">
<Post />
<Post />
<Post />
  <a href="compose.html" className="flex justify-end ">
   <Add />
  </a>
</main>

    </>
  )
}
