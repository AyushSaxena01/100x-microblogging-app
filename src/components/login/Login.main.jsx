import React from 'react';
import Button from '../common/Button';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth/AuthContext'
import { useNavigate } from 'react-router-dom';

export default function MainLogin(){

  const navigate = useNavigate();
  const {loggedIn, setLoggedIn } = useContext(AuthContext);

    return(
    <>
        <main className="flex  w-96.5 flex-shrink-0">
        <section className="flex flex-col w-96.5 gap-y-10 py-0 px-7 items-start">
          <section className="flex flex-col gap-y-3 items-start self-stretch">
            <span className="text-neutral/50 text-3.5xl not-italic font-extrabold font-Inter leading-1.2">
              Happening now
            </span>
            <span className="text-neutral/50 text-base not-italic font-medium font-Inter leading-1.2">
              Join today.
            </span>
          </section>
          <Button type="defaultwhite" size="m" colour = 'black' dimension='whitebutton' onClick={
              ()=>{
                navigate("/step1")                  
              }}>
          Create account
          </Button>
          <div className="flex flex-row gap-x-1 items-center justify-center self-stretch">
            <div>
              <hr className="w-35  border border-neutral-700" />
            </div>
            <div className="text-neutral-50 text-center not-italic text-base leading-1.2 font-normal">or</div>
            <div>
              <hr className="w-35 border border-neutral-700" />
            </div>
          </div>
          <div className="flex flex-col gap-y-5 items-start self-stretch">
            <span className="text-neutral/50 not-italic font-medium leading-1.2 text-xl font-Inter ">
              Already have an account?
            </span>
            <Button type="outlined" size="l" colour = 'blue' dimension='blackbutton' onClick={
              ()=>{
                setLoggedIn({...loggedIn,isLoggedIn:true});
                navigate("/HomeFeed")                  
              }}>
            Sign in
            </Button>
          </div>
        </section>
      </main>
    </>
    );

}