import React, { useState } from 'react'
import { FaUser, FaPhone, FaLock } from "react-icons/fa";
import  './LoginSignup.css'

const LoginSignup = () => {

  const [action, setAction] = useState("Sign Up");

  return (
    <>
        <div className="container">
          <h1 className="hero">{action}</h1>
          <div className="inputs">
            {action === "Login"? <div></div>: <div className="input">
              <FaUser/>
              <input type="text" placeholder='Name'/><br />
            </div>}
            
            <div className="input">
              <FaPhone />
              <input type="number" placeholder='Phone no.'/><br />
            </div>
            <div className="input">
              <FaLock />
              <input type="password" placeholder='Password'/>
            </div>
          </div>
          <div className="submit-container">
            <div className={action === "Login" ? "submit gray" : "submit"} onClick= {()=> {setAction("Sign Up");
              alert("You signed in")
            }}>Sign Up</div>
            <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick= {()=> {setAction("Login");
              alert("You logged in")
            }}>Login</div>
          </div>
        </div>
    </>
  )
}

export default LoginSignup