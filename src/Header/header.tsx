import burgerMenu from '../assets/burger_menu.svg';
import searchIcon from '../assets/search_icon.svg';
import pinIcon from '../assets/pin.svg';
import siteLogo from '../assets/SiteLogo.svg';
import userProfile from '../assets/user_profile.svg';
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <header className="header">
        <div className="header-left">
          <button className="icon-btn">
            <img src={burgerMenu} alt="Menu" />
          </button>
          <Link to="/" className="nav-link"><img src={siteLogo} alt="Logo" className="logo" /></Link>
        </div>
        <div className="header-center">
          <div className="search-bar">
            <img src={searchIcon} alt="Search" />
            <input type="text" placeholder="Search events" />
          </div>
          <div className="location-bar">
            <img src={pinIcon} alt="Location" />
            <input type="text" placeholder="Choose a location" />
          </div>
          <button className="search-btn">
            <img src={searchIcon} style={{ filter: 'invert(0%)' }} alt="Go" />
          </button>
        </div>
        <div className="header-right">
          <Link to="/events" className="nav-link">List Of Events</Link>
          <Link to="/features" className="nav-link">Features</Link>
          <Link to="/about" className="nav-link">About</Link>
          <button className="icon-btn">
            <img src={userProfile} alt="Profile" />
          </button>
        </div>
      </header>
  )
}

export default header