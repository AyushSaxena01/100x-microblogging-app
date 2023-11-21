import React from "react";
import PropTypes from 'prop-types';

export default function Input({type, onChange}) {

    const Type={
        name:"Name",
        location:"Location",
        website:"Website"
    }

    Input.propTypes = {
      type:PropTypes.string.isRequired,
      onChange:PropTypes.func.isRequired,
    }

  return (
    <>
      <fieldset className="h-auto mt-3 flex items-center justify-between self-stretch py-4 px-3 box-border rounded border border-solid border-neutral/500 focus-within:border-twitter-blue-default gap-y-2.5 group/input">
        <legend className="font-medium font-Inter box-border py-0 px-1 inline-flex text-xs not-italic text-neutral/500 leading-1.2 group-focus-within/input:text-twitter-blue-default">
          {Type[type]}
        </legend>
        <input
          className="w-full flex bg-neutral/1000 font-Inter text-xl text-twitter-white-100 font-normal leading-1.2 not-italic placeholder-neutral/500 group-focus-within/input:outline-none peer"
          type='text' onChange={(e)=>{onChange(e)}}
          placeholder={Type[type]}
        />
      </fieldset>
    </>
  );
}
