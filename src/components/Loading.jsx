import React from 'react'
import logo from '../logo.svg';
import '../styles/Loader.css'

function Loading() {
  return (
    <div className='loader'>
        <div className='load-pic'>
            <img src={logo} alt="loading"/>
        </div>
        <p>Loading.....</p>
        
    </div>
  )
}

export default Loading