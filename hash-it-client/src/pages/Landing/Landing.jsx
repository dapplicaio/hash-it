import React from 'react'

import Features from './Features'
import Footer from './Footer/Footer'
import Gallery from './Gallery'
import GetInTouch from './GetInTouch'
// import Navigation from './Navigation'
import Main from './Main'
import PreLastBlock from './PreLastBlock'
import Testimonials from './Testimonials'

import './style.scss'

function Landing() {
  return (
    <>
      {/* <header>
        <Navigation />
      </header> */}
      <Main />
      <div className='other-background'>
        <Features />
        <GetInTouch />
        <PreLastBlock />
        <Footer />
      </div>
    </>
  )
}

export default Landing