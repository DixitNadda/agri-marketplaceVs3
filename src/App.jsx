import { useState } from 'react'
// import './App.css'
import LoginSignup from './Components/LoginSignup/LoginSignup'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>

      <Navbar home="#home" buyers="#buyers" signInLogin="#signUp" />
      <div id="home">
        <Hero /> </div>

      <div id="signUp">
        <LoginSignup/> </div>
    </>
  )
}

export default App
