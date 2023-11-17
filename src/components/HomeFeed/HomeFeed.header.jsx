import React from "react";
import logo from '../../assets/100.svg';
import x from '../../assets/Group 27162.svg';
import Avtar from "../common/Avtar";
import Nav from "./Nav";

export default function HeaderHomeFeed() {
  return (
    <>
      <header className="flex flex-col  w-96.5 fixed bg-neutral/1000">
        <div className="flex flex-row  w-96.5">
          <section className="flex gap-x-32  w-96.5 justify-start  items-center py-3 px-4">
            <a href="userprofile.html">
                {/* Profile picture */}
              <Avtar imgUrl='src/assets/avtar.png' size='s'/>
            </a>
            <div className="flex justify-center items-end gap-0.4">
              {/* 100 img */}
              <img
                className="w-10.5 h-4.5"
                src={logo}
                alt = '100'
              />
              {/* X img */}
              <img
                className="w-3.2 h-3.3"
                src={x}
                alt = 'x'
              />
            </div>
          </section>
        </div>
       <Nav />
      </header>
    </>
  );
}
