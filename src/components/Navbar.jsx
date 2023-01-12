import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav
    className='navbar navbar-dark navbar-expand-lg bg-primary'
    style={{padding: '10px'}}>
    <div className="navbar-brand">
      Note App
    </div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink
          to="/"
          className="nav-link"
          exact='true'
        >Главное</NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/about"
          className="nav-link"
        >Информация</NavLink>
      </li>
    </ul>
  </nav>
)

export default Navbar;
