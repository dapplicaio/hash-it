import React from 'react'
import featuresIco from 'assets/images/features-ico.png'

import './style.scss'

function Features() {
  return (
    <section className='landing-section'>
      <h1 className='hashIt-title'>
        Features
      </h1>

      <p className='features-small-text'>
      </p>
      <div className='subBlocks'>
        {
          [
            {
              title: 'Protect via Blockchain',
              text: 'Blockchain literally stores your hashed data forever. You will be able to refer to these data anytime from multiple places'
            },
            {
              title: 'Keep track of versions',
              text: 'As much as you modify and edit your stuff you can save all of the versions of your creatives, referring back by date of record in blockchain'
            },
            {
              title: 'PowerUp with Cloud',
              text: 'As an advanced option we can store also original files, so you wont need to find it anywhere. Files can be stored as password protected archives '
            },
          ].map(({ title, text }, index) => (
            <div key={index} className='features-subBlock'>
              <img src={featuresIco} alt='' />
              <div className='features-data-wrapper'>
                <h2 className='features-subBlock-title'>{title}</h2>
                <p className='features-subBlock-text'>{text}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Features