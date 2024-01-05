import React from 'react';
import './App.css';
import { pageRoutes } from './Routers';
import { useRoutes } from 'react-router-dom';
import './../src/MediaQueries.css'


export default function App() {


  let routers = useRoutes(pageRoutes)



  return (
    <>
      {routers}
    </>
  )
}


