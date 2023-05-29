import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="container hflex">
        <h1>Cartoon Mania</h1>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li>Movies</li>
            <li>Theaters</li>
            <li>Gift Cards</li>
            <li>Help</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;