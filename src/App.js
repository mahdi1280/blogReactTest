import React from "react";
import HomePage from "./Pages/HomePage";
import {useRoutes} from 'hookrouter';
import BlogPage from "./Pages/BlogPage";
import PostPage from "./Pages/PostPage";
import NotFoundPage from "./Pages/NotFoundPage";
import './style.css';

const routes = {
  '/': () => <HomePage />,
  '/blog': () => <BlogPage />,
  '/post/:id': ({id}) => <PostPage id={id}/>
};

export function App(){
  const routeResult = useRoutes(routes);
  return routeResult ||  <NotFoundPage/>
}
  
  
