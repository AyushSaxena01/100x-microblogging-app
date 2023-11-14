import React, { useState } from 'react'
import Header from '../components/login/Steps.header'
import Main from '../components/login/Step3.main'


export default function Step3() {


  const[isVerified, setIsVerified]=useState({
    verified:true,
    code:'',
  });

  const onChangeCode = (e) => {
    setIsVerified({...isVerified,code:e.target.value});
  }

  const onClickButton = ()=>{
    const length = isVerified['code'].length;
    if(length > 4  || length < 4){
      alert('Please enter correct verification code!');
    } 
  }

  return (
    <>
    <div className="bg-neutral/1000 flex flex-col items-center gap-y-3 justify-start h-screen pt-0 flex-shrink-0">
 <Header step = '3' />
<Main onChangeCode={onChangeCode} onClickButton={onClickButton}/>
</div> 
{console.log(isVerified)}
    </>
  )
}
