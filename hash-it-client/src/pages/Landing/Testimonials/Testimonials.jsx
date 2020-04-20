import React, { useState } from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import Line from 'components/common/Line'

import './style.scss'

function Testimonials() {
  const [value, setValue] = useState(1)

  return (
    <section className='landing-section'>
      <h1 className='hashIt-title'>
        Testimonials
      </h1>

      <div className='carousel-wrapper'>
        <Carousel
          clickToChange
          value={value}
          onChange={(value) => setValue(value)}
          slidesPerPage={2}
          className='carousel-slider'
          infinite
          centered>
          {
            [
              {
                description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.`,
                position: 'John Doe, CEO Company'
              },
              {
                description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.`,
                position: 'John Doe, CEO Company'
              },
              {
                description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.`,
                position: 'John Doe, CEO Company'
              }
            ].map(({ description, position }, index) => (
              <div key={index} className='carousel-item'>
                <p className='carousel-item-desc'>
                  {description}
                </p>

                <div className='carousel-line-wrapper'>
                  <Line width="50%" />
                </div>

                <span className='carousel-position'>{position}</span>
              </div>
            ))
          }

        </Carousel>
      </div>
    </section>
  )
}

export default Testimonials