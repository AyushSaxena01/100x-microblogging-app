import React from 'react';
import Header from '../components/login/Login.header';
import Main from '../components/login/Login.main';

export default function Login() {
  return (
  <div className="flex flex-col items-center gap-y-32  bg-neutral/1000 justify-start  h-screen">
   <Header />
   <Main />
  </div>
  )
}


 
   