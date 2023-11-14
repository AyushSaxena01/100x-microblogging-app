import React from 'react';
import logo from '../../assets/100.svg';
import X from '../../assets/Group 27162.svg';
import Logo from '../common/Logo100x';

export default function HeaderLogin () {
    return(
    <>
        <header className="flex flex-col  w-96.5 flex-shrink-0">
        <section className="flex gap-x-32  w-96.5 justify-center  items-center py-3 px-4">
          <div className="flex justify-center items-end gap-0.4">
            <img className="w-10.5 h-4.5" src={logo} alt />
            <img className="w-3.2 h-3.3" src={X} alt />
          </div>
        </section>
      </header>
    </>
    );
  
}

