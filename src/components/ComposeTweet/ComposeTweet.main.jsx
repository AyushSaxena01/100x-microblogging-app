import React from 'react'
import avatar from '../../assets/avtar.png'
import TextArea from '../common/TextArea'
import { useState } from 'react'
export default function MainComposeTweet(text,onChangeText) {

  return (
    <>
      <main className="flex w-96.5 py-3 px-4 justify-between items-center">
    <div className="flex items-start gap-x-3">
      <img className="w-9 h-9 rounded-full" src={avatar} alt="Avtar" />
      <TextArea value={text} onChange={onChangeText} type = 'tweet' />
    </div>
  </main> 
    </>
  )
}
