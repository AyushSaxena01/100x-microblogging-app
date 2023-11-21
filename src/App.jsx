
import './App.css'
import { useState , useContext } from 'react';
import { AuthProvider } from './context/AuthProvider';
import { AuthContext } from './context/AuthContext'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from "./pages/Login";
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Step4 from './pages/Step4';
import UserProfile from './pages/UserProfile'
import EditProfile from './pages/EditProfile';
import ComposeTweet from './pages/ComposeTweet';
import Test from './pages/test2';
import HomeFeed from './pages/HomeFeed';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/composetweet",
    element: <ComposeTweet />,
  },
  {
    path: "/Step1",
    element: <Step1 />,
  },
  {
    path: "/Step2",
    element: <Step2 />,
  },
  {
    path: "/Step3",
    element: <Step3 />,
  },
  {
    path: "/Step4",
    element: <Step4 />,
  },
  {
    path: "/HomeFeed",
    element: <HomeFeed /> ,
  },
  {
    path: "/UserProfile",
    element: <UserProfile />,
  },
  {
    path: "/EditProfile",
    element: <EditProfile /> ,
  },
]);

function App() {

  return (
  <>
<AuthProvider>
  {/* <TwitterApp /> */}
  <RouterProvider router={router} />
</AuthProvider>
  </>

   )
}

export default App;



