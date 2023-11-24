
import './App.css'
import { AuthProvider } from './context/auth/AuthProvider';
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
import HomeFeed from './pages/HomeFeed';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/ComposeTweet",
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
  <RouterProvider router={router} />
</AuthProvider>
  </>

   )
}

export default App;



