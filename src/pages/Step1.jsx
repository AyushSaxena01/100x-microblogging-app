import React, { useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthContext'

import Header from '../components/login/Steps.header';
import Main from '../components/login/Step1.main'

export default function Step1() {
  const {loggedIn} = useContext(AuthContext);
  return (
  <>
  <div className="bg-neutral/1000 flex flex-col items-center gap-y-3 justify-start h-screen pt-0 flex-shrink-0">
    <Header step ="1"/>
    <Main />
  </div>
  {console.log(loggedIn)}
  </>
  )
}
