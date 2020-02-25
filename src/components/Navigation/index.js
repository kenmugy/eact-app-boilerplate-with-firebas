import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Navigation = () => {
  return (
    <nav className='navbar-fixed green accent-3'>
      <div className='container '>
        <ul>
          <li>
            <NavLink to={ROUTES.SIGN_IG}>Sign In</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.LANDING} exact>Landing</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.ACCOUNT}>Account</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.ADMIN}>Admin</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
