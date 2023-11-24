import React, { useState } from "react";
import { UserContext } from './UserContext'

export function UserProvider({children}){

    const [userDetails, setUserDetails] = useState({
        User: {
            id:0,
            username:'',
            userFullName:'',
            bio:'',
            userImage:'',
            Userbackground:'',
            following:0, 
            followers:0, 
            bioLink:'', 
            joinedAt:''} 
    });

    return(
        <>
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
        </>
    )
}

