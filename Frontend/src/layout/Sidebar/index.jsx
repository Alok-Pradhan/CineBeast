// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../../assets/cineBeast.png';
import { NavLink } from 'react-router-dom';
import './index.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-details">
        <img src={logo} className='logo' alt="profileImg" />
      </div>
      <ul className="nav- p-0 align-middle">
        <li className="nav-item mt-1 icon-container">
          <NavLink to="/" className="nav-link">
            <i className="fa-regular fa-circle-user"></i>
            <span className="tooltip">My Space</span>
          </NavLink>
        </li>
        <li className="nav-item mt-1 icon-container">
          <NavLink to="/search" className="nav-link">
            <i className="fa-solid fa-magnifying-glass"></i>
            <span className="tooltip">Search</span>
          </NavLink>
        </li>
        <li className="nav-item mt-1 icon-container">
          <NavLink to="/" className="nav-link">
            <i className="fa-solid fa-house "></i>
            <span className="tooltip">Home</span>
          </NavLink>
        </li>
        <li className="nav-item mt-1 icon-container">
          <NavLink to="/tv" className="nav-link">
            <i className="fa-solid fa-tv"></i>
            <span className="tooltip">TV</span>
          </NavLink>
        </li>
        <li className="nav-item mt-1 icon-container">
          <NavLink to="/movies" className="nav-link">
            <i className="fa-solid fa-clapperboard"></i>
            <span className="tooltip">Movies</span>
          </NavLink>
        </li>
        <li className="nav-item mt-1 icon-container">
          <NavLink to="/sports" className="nav-link">
            <i className="fa-solid fa-volleyball"></i>
            <span className="tooltip">Sports</span>
          </NavLink>
        </li>
        <li className="nav-item mt-1 icon-container">
          <NavLink to="/categories" className="nav-link">
            <i className="fa-solid fa-icons"></i>
            <span className="tooltip">Categories</span>
          </NavLink>
        </li>
        <li className="profile">
          <div className="profile-details">
          <img src={logo} className='logo' alt="profileImg" />
            <div className="name_job">
              {/* <div className="text-light">Alok</div> */}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
