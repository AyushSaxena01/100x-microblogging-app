import React, { useState } from 'react'
import { HomeContext } from './HomeContext'


export function HomeProvider({children}) {
    
    const [details, setDetails] = useState({
        Meta: {comments:11, reposts:289, likes:786, views:99.9},
        Post: {id:0, 
          text:"hey!!", 
          postedAt:'1 min ago', 
          postedBy: {userid:2, userName:'@Anexas', userFullName:'Ayush Saxena', userImage:'src/assets/avtar.png'},
         
        },
        tweets:[]
        });


  return (
    <>
     <HomeContext.Provider value = {{details, setDetails}}>
        {children}
     </HomeContext.Provider> 
    </>
  )
}

