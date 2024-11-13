import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Users from './Components/Users/Users';

import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';
import UserDetails from './Components/UserDetails/UserDetails';
//import App from './App.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
                {
                  path:"/about",
                  element:<About></About>
                },
                {
                  path:"/contact",
                  element:<Contact></Contact>
                },
                {
                  path:"/users",
                  loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
                  element:<Users></Users>
                },
                {
                  path:"/posts",
                  loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
                  element:<Posts></Posts>
                },
                {
                  path:"/post/:postid",
                  loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`),
                  element:<PostDetails></PostDetails>
                },
                {
                  path:"/user/:userid",
                  loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
                  element:<UserDetails></UserDetails>
                }
    ]    
  },
  // {
  //   path:"/header",
  //   element:<Header></Header>
  // }
 
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
