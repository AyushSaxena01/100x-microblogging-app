import React , { useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthContext'
import { useNavigate } from 'react-router-dom';

import Header from '../components/login/Steps.header'
import Main from '../components/login/Step4.main'

export default function Step4() {
  const navigate = useNavigate();
  const {loggedIn, setLoggedIn } = useContext(AuthContext);
  const[password, setPassword]=useState('');

  const onChangeCode = (e) => {
    setPassword(e.target.value);
  }

  const onClickButton = ()=>{
  
    if( password.length >= 8 &&
      /[A-Z]/.test(password) &&   // At least one uppercase letter
      /[a-z]/.test(password) &&   // At least one lowercase letter
      /\d/.test(password) &&      // At least one digit
      /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)){
        setLoggedIn({...loggedIn,isLoggedIn:true});
      navigate('/HomeFeed');
    } else{
      alert('Please enter valid password!');
    }

   
  }

  return (
    <>
      <div className="bg-neutral/1000 flex flex-col items-center gap-y-3 justify-start h-screen pt-0 flex-shrink-0">
 <Header step='4' />
 <Main onChangeCode={onChangeCode} onClickButton={onClickButton} />
</div>
    </>
  )
}
