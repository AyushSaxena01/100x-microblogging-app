import React from 'react'
import Cancel from '../common/Cancel.icon'
import Button from '../common/Button'

export default function HeaderComposeTweet({postButton}) {
  return (
    <>
      <header className="flex w-96.5 py-3 px-4 justify-between items-center">
      <a href="homefeed.html">
        <Cancel />
      </a>
   <Button type='defaultblue' dimension='blackbutton' size='m' colour='white' onClick={postButton} >
   Post
   </Button>
  </header>
    </>
  )
}
