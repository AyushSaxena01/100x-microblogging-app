/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "neutral/50":"#f9f9f9",
        "neutral/100":"#F4F4F4",
        "neutral/200":"#E4E4E4",
        "neutral/300":"#D3D3D3",
        "neutral/400":"#A2A2A2",
        "neutral/500":"#737373",
        "neutral/600":"#525252",
        "neutral/700":"#404040",
        "neutral/800":"#262626",
        "neutral/900":"#171717",
        "neutral/950":"#0A0A0A",
        "neutral/1000":"#FFFFFF",
        "twitter-white-100":"rgba(255, 255, 255, 1)",
        "twitter-blue-default":"#1D9BF0",
        "twitter-blue-disabled":"#1E5D87",
        "twitter-blue-hover":"#1871CA",
        "blue-wash":"#75BEEF",
        "button-stroke":"#546A7A",
        "searchbar-fill":"#212327",
        "card-fill":"#16181C",
        "success":"#00BE74",
        "error":"#8B141A",
        "stroke":["rgba(29, 155, 240, 0.24)","rgba(255, 255, 255, 0.24)"],
        "neutral/1000":"#000000",
        "secondary":"rgba(255, 255, 255, 0.6)",
        "background":"rgba(0, 0, 0, 0.60)",
  
      },
      fontFamily:{
        "Inter":['Inter','sans-serif'],
        
      },
      fontSize:{
        "3.5xl":"1.9375rem",
        "2.5xl":"1.625rem",
        "2lg":"1.1875rem",
        "2base":"1.0625rem",
        "m":"0.9375rem",
        "s":"0.8125rem",
        "xxs":"0.625rem"
      },
      lineHeight:{
        "1.2":"1.2"
      },
      width:{
       
        "3.1":"0.65625rem",
        "3.2":"0.76688rem",
        "3.4":"0.90625rem",
        "3.8":"0.91025rem",
        "3.85":"0.95625rem",
        "3.9":"0.97719rem",
        "4.2":"1.11525rem",
        "4.6":"1.1875rem",
        "10.5":"2.56013rem",
        "4.25":"4.25rem",
        "34":"8.50806rem",
        "35":"9.71875rem",
        "43":"10.75rem",
        "80.5":"20.875rem",
        "81":"21.75rem",
        "82":" 22.125rem",
        "82.5":"22.375rem",
        "96.5":"24.375rem",
        "90":"26.625rem",
        "99":"27.125rem",
        "100":"27.625rem",
        "101":"28.4375rem",
        "110":"30.125rem",
        "112":"32rem",
        "117":"37.375rem",
        
      },
      height:{
        "0.1":"0.0625rem",
        "0.4":"0.1875rem",
        "3.2":"0.75494rem",
        "3.3":"0.81819rem",
        "3.35":"0.85338rem",
        "3.4":"0.90625rem",
        "3.8":"0.91025rem",
        "3.85":"0.93rem",
        "3.9":"0.97719rem",
        "4.4":"1.0625rem",
        "4.6":"1.1875rem",
        "4.5":"1.12663rem",
        "9.9":"2.4375rem",
        "14.5":"3.625rem",
        "4.25":"4.25rem",
        "24.3":" 6.375rem",
        "35":"8.9375rem",
        "36.5":"9.07738rem",
        "37":"9.375rem",
        "48.5":"12.4375rem",
        "88":"22.1875rem",
        "130.4":"51.5rem",
      },
      backdropBlur:{
        "23.6px":"23.668209075927734px"
      },
      boxShadow:{
        "btn":"0px 8px 16px 0px rgba(0, 0, 0, 0.25);"
      },
      borderRadius:{
        "12xl":"624.9375rem",
        "6xl":"12.5rem",
        "9xl":"6.25rem",
        "8xl":"4.0625rem",
        "4xl":"1.875rem"
      },
      borderWidth:{
        "3":"3px",
        "0.5":"0.5px",
      },
      padding:{
        "0.3":"0.09894rem",
        "0.4":"0.11138rem",
        "3.8":"0.9375rem",
        "4.3":"1.38rem",
        "2.8":"5.8125rem",
        "41":"10.121rem",
        "57":"14.78125rem",
        "63":"15.4375rem",
        
      },
      margin:{
        "4.3":"1.38rem",
      },
      gap:{
        "0.3":"0.0625rem",
        "0.4":"0.125rem",
        "1.3":"0.3125rem",
        "3.8":"0.9375rem",
        "24.5":"6.25rem",
        
      },
      spacing:{
        "18":"74px",
        "20.5":"5.625rem",
        "68":"16.6875rem",
      },
      strokeWidth:{
        "1.5":"1.5px",
      }
    },
  },
  plugins: [],
}

