import React from 'react';
import './MainPage.css';

import arrowIcon from '../assets/arrow.svg';
import { Link } from 'react-router-dom';

const MainPage: React.FC = () => {
  return (
    <div className="main-page">

      <div className="hero-overlay">
        <h1>Looking for<br />something interesting?</h1>
        <form className="search-form">
          <div className="form-group">
            <label>Enter Your City</label>
            <div className="select-wrapper">
              <select>
                <option>Paris</option>
                <option>London</option>
                <option>New York</option>
              </select>
              <img src={arrowIcon} alt="Arrow" className="arrow" />
            </div>
          </div>
          <div className="form-group">
            <label>Select event category</label>
            <div className="select-wrapper">
              <select>
                <option>Music</option>
                <option>Sport</option>
                <option>Food</option>
              </select>
              <img src={arrowIcon} alt="Arrow" className="arrow" />
            </div>
          </div>
          <div className="form-group">
            <label>Date</label>
            <input type="date" defaultValue="2025-05-16" />
          </div>
          <button type="submit" className="btn-find"><Link to="/Map">Find Event</Link></button>
        </form>
      </div>
    </div>
  );
};

export default MainPage;