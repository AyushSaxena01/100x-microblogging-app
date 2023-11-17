import React from 'react'
import PropTypes from 'prop-types';

export default function Button({dimension='whitebutton',disabled,size='m',colour='white',type='defaultWhite',children,...rest}) {
    let Size;

    const baseClass='flex justify-center items-center box-border self-stretch shadow-btn backdrop-blur-23.6px';
    const txtBase = 'text-base leading-1.2 not-italic font-bold text-center font-Inter';

    if(dimension==="blackbutton"){
       Size = {l:'rounded-8xl py-2 px-6',
       m:'rounded-4xl py-2 px-5 inline-flex',                    
       s:'py-1.5 px-4 rounded-8xl inline-flex'
       } 
    } else if(dimension==="bluebutton"){
        Size = {l: 'p-5 rounded-12xl',
        m:'py-3.8 px-2.8 rounded-12xl inline-flex',                      
        s:'py-3 px-6 rounded-4xl inline-flex'
        }
    } else if(dimension==="whitebutton"){
       Size = {l:'rounded-8xl py-3 px-6',
       m:'rounded-8xl py-2 px-6',
       s:'w-[5.313rem] rounded-4xl py-2 px-5 inline-flex'
      }
    }
    
   const Type = {
    outlined:'bg-black border border-solid  border-stroke-0',
    defaultblue:'bg-twitter-blue-default hover:bg-twitter-blue-hover',
    defaultwhite:'bg-neutral/50  hover:bg-neutral/200'
   }

    
    const Disabled = disabled ? 'opacity-50' : '';

    const Colour = {
      white:'text-neutral/50',
      blue:'text-twitter-blue-default',
      black:'text-neutral/1000'
    }

    Button.propTypes = {
      disabled:PropTypes.bool,
      dimension:PropTypes.oneOf(['whitebutton','bluebutton','blackbutton']).isRequired,
      size:PropTypes.oneOf(['s','m','l']).isRequired,
      colour:PropTypes.oneOf(['white','black','blue']).isRequired,
      type:PropTypes.oneOf(['defaultblue','defaultwhite','outlined']).isRequired,
      children:PropTypes.node,

    }

              
    const styles = `${baseClass} ${Type[type]} ${Size[size]} ${Disabled}${txtBase} ${Colour[colour]}`;
    
  return (
    <>

    <button className={styles} {...rest} >
    {children}
    </button>
                
    </>
  )
}
