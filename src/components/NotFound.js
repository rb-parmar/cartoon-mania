import React from 'react';
import { NavLink } from 'react-router-dom';

function NotFound() {

  
  return (
    <section className='grid'>
      <div>
        <h1>404</h1>
        <p>Page not found</p>
        <button className='return'><NavLink to='/'>Home</NavLink></button>
      </div>
    </section>
  )
}

export default NotFound