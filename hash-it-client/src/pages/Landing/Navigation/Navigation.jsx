import React from 'react'

import './style.scss'

function Navigation() {
  return (
    <nav className='header-navigation'>
      <ul className='navigation-list'>
        {
          [
            {
              value: 'Features',
              path: '#'
            },
            {
              value: 'About',
              path: '#'
            },
            {
              value: 'Testimonials',
              path: '#'
            },
            {
              value: 'Mobile',
              path: '#'
            },
            {
              value: 'Contact',
              path: '#'
            },
          ].map(({ value, path }, index) => (
            <li className='navigation-item' key={index}>
              <a href={path}>{value}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navigation