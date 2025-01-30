import React from 'react'
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from './Pages/Login'
import Navbar from './Components/Navbar'
import Books from './Pages/Books';
import "./Components/style/navbar.css"

const App = () => {
  return (
  //  <Routes> 
  //   <Route>  <Login/> </Route>
  //  </Routes>
<>
<Books/>
</>
  )
}

export default App

