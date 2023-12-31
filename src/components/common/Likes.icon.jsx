import React, { useState } from 'react'

export default function LikesIcon() {

  const [likes,setLikes] = useState(123); 

const  onclick = ()=>{
setLikes(likes+1);
}

  return (
    <>
     <button className="flex justify-center items-center gap-1.3" onClick={onclick}>
              <svg className="w-3.8 h-3.35 stroke-neutral/500 stroke-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" fill="none">
                <path d="M8.05399 3.86097L7.42929 3.08431C5.70486 0.940381 2.54605 1.29364 1.2602 3.77422C0.639749 4.97116 0.608864 7.40027 1.17783 8.627C3.09371 12.7578 6.68209 14.7113 7.37 15.0559C7.44712 15.0945 7.5172 15.1431 7.58984 15.1896C7.91175 15.3957 8.32284 15.3698 8.62234 15.112C8.67869 15.0635 12.8049 13.2092 14.9302 8.627C15.4991 7.40027 15.4682 4.97116 14.8478 3.77422C13.5619 1.29364 9.8745 0.697805 8.05399 3.86097Z" />
              </svg>
              <span className="font-Inter font-sm not-italic font-normal leading-1.2 text-neutral/500">{likes}</span>
            </button> 
    </>
  )
}
