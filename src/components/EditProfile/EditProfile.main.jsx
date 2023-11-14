import React from 'react'
import Input from '../common/Input'

export default function MainEditProfile() {
  return (
    <>
     <main className="flex w-96.5 px-4 flex-col items-start gap-3">
       
    <section className="flex flex-col items-center gap-5 self-stretch">
     <Input type = 'name' />
     
      <fieldset className=" flex h-24.3 mt-3 items-start self-stretch py-4 px-3 box-border rounded border border-solid border-neutral/500 focus-within:border-twitter-blue-default gap-y-2.5 group/input">
        <legend className="font-medium font-Inter box-border py-0 px-1 inline-flex text-xs not-italic text-neutral/500 leading-1.2 group-focus-within/input:text-twitter-blue-default">
          Bio</legend>
        <input className="w-full h-full flex  bg-neutral/1000 font-Inter text-xl text-twitter-white-100 font-normal leading-1.2 not-italic placeholder-neutral/500 group-focus-within/input:outline-none peer" type="text" placeholder="Bio" />
      </fieldset>
      <Input type = 'location' />
      <Input type = 'website' />
    </section>
  </main> 
    </>
  )
}
