import React from 'react'

export default function Post({Meta: {comments, reposts, likes, views},Post: {id, text, postedAt, postedBy: { userid, userName, userFullName,userImage } }}) {
  return (
    <>
       <span className="font-Inter text-base not-italic font-normal leading-1.2 text-neutral/50">
            {Post[text]} 
       </span>
    </>
  )
}
