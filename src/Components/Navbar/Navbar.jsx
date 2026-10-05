import React from 'react'
import './Navbar.css'


const Navbar= (propObj)=> {

  return (
    <div class="navbar">
      <div id="links">
      <a href={propObj.home}>
        <h3 class="navItem">Home</h3>
      </a>
      <a href={propObj.buyers}>
        <h3 class="navItem">Buyers</h3>
      </a>
      <a href={propObj.signInLogin}>
        <h3 class="navItem">Sign In</h3>
      </a>
      </div>
    </div>
  )
}

export default Navbar