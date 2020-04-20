import React from 'react'

import './style.scss'

function Footer() {
  const date = new Date();
  
  return (
    <footer className='landing-section'>
     <span className='footer-text'>Made by Dapplica {date.getFullYear()} </span>
    </footer>
  )
}

export default Footer