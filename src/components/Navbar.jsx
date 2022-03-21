import React ,{useContext}from 'react'
import logo from '../logo.svg';
import '../styles/Navbar.css'
import {Context} from '../components/Store'

function Navbar() {
  const [state, setState] =useContext(Context);
  return (
    <div className='navbar'>
      <div className='marginpp'>
        {/* Logo */}
          <div className='logo'>
          <img src={logo} className="App-logo" alt="logo" />
          </div>

          {/* Search Input area */}
          <div className='search'>
              <input type="text" placeholder='search user' onChange={(event)=>{
                setState(event.target.value);
              }}></input>
          </div>
      </div>
        
    </div>
  )
}

export default Navbar