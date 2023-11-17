import React from 'react'
import Tweet from '../Tweet/Post'
import PropTypes from 'prop-types';


export default function TextArea({value,onChange,type='Enter placeholder'}) {

    const Type={
        tweet:"What's happening?!",
    }
    TextArea.propType={
      vlue:PropTypes.string.isRequired,
      onChange:PropTypes.func.isRequired,
      type:PropTypes.string,
    }
  return (
    <>
       <textarea className="flex font-Inter text-xl text-twitter-white-100 font-normal leading-1.2 not-italic bg-transparent items-center flex-shrink-0 self-stretch focus:outline-none box-border caret-twitter-blue-default resize-none" placeholder={Type[type]} cols={20} rows={5}  value={value} onChange={(e)=>{onChange(e)}}/>
    </>
  )
}
