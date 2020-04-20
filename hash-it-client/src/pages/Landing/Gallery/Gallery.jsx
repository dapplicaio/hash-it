import React from 'react'

import defaultImage from 'assets/images/gallery.jpg'

import './style.scss'

function Gallery() {
  return (
    <section className='landing-section'>
      <h1 className='hashIt-title'>
        Gallery
      </h1>

      <p className='features-small-text'>
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
        quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
      </p>

      <div className='gallery'>
        {
          [
            { image: defaultImage },
            { image: defaultImage },
            { image: defaultImage },
          ].map(({ image }, index) => (
            <div key={index} className='galery-subBlock'>
              <img src={image} alt='' />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Gallery