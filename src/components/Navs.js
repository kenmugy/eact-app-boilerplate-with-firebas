import React from 'react';
import { Link } from 'react-router-dom';

export default function Navs() {
  return (
    <nav className='indigo'>
      <div className='container'>
        <a href className='brand-logo left'>
          Demo
        </a>
        <ul className='right'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contacts'>contacts</Link>
          </li>
          <li>
            <Link to='/user'>User</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
