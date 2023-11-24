import React from 'react'
import { useNavigate } from 'react-router-dom';

import Cancel from '../common/Cancel.icon'
import Button from '../common/Button'
import PropTypes from 'prop-types';

export default function HeaderComposeTweet({postButton}) {
  const navigate = useNavigate();


  HeaderComposeTweet.protype={
    postButton:PropTypes.func.isRequired
  }

  return (
    <>
      <header className="flex w-96.5 py-3 px-4 justify-between items-center">
        <Cancel onClick={()=>{navigate('/HomeFeed')}}/>
   <Button type='defaultblue' dimension='blackbutton' size='m' colour='white' onClick={postButton} >
   Post
   </Button>
  </header>
    </>
  )
}
