import React, { useState } from 'react'
import { AuthContext } from './AuthContext'

export function AuthProvider({children}) {
    const [loggedIn, setLoggedIn] = useState({
isLoggedIn:false,
name:'',
email:'',
dobMonth:'',
dobDay:'',
dobYear:'',
    });
 
  return (
    <>
      <AuthContext.Provider value = {{loggedIn, setLoggedIn}}>
{children}
      </AuthContext.Provider>
    </>
  )
}


