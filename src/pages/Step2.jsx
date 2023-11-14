import React from 'react'
import Header from '../components/login/Steps.header'
import Main from '../components/login/Step2.main'

export default function Step2() {
  return (
    <>
    <div className="bg-neutral/1000 flex flex-col items-center gap-y-3 justify-start h-screen pt-0 flex-shrink-0">
  <Header step = '2'/>
  <Main />
</div>     
    </>
  )
}
