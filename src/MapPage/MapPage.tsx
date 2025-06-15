import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapPage.css';

import categoryIcon from '../assets/category.svg';
import pinIcon from '../assets/pin.svg';
import dateIcon from '../assets/date.svg';
import distanceIcon from '../assets/distance.svg';

const eventIcon = new L.Icon({
  iconUrl: pinIcon,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

interface Event {
  id: number;
  position: [number, number];
  title: string;
  date: string;
  category: string;
}

const events: Event[] = [
  { id: 1, position: [48.8566, 2.3522], title: 'Music Event', date: 'June 1, 2025', category: 'Music' },
  { id: 2, position: [48.8606, 2.3376], title: 'Food Festival', date: 'June 7, 2025', category: 'Food' },
  { id: 3, position: [48.8530, 2.3499], title: 'Stand-Up Show', date: 'June 14, 2025', category: 'Stand-Up' },
];

const MapPage: React.FC = () => {
  return (
    <div className="map-page">
      <div className="map-container">
        <MapContainer center={[48.8566, 2.3522]} zoom={13} scrollWheelZoom={true} className="leaflet-map">
          <TileLayer
            attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          {events.map(ev => (
            <Marker key={ev.id} position={ev.position} icon={eventIcon}>
              <Popup>
                <div className="popup-content">
                  <strong>{ev.title}</strong><br />
                  <small>{ev.date}</small><br />
                  <Link to={`/events/${ev.id}`} className="popup-link">See more &rarr;</Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="sidebar">
        <h2>Category</h2>
        <div className="filter-group">
          <img src={categoryIcon} alt="Category" />
          <span>All Categories</span>
        </div>

        <h2>Date</h2>
        <div className="filter-group">
          <img src={dateIcon} alt="Date" />
          <span>All Dates</span>
        </div>

        <h2>Distance</h2>
        <div className="filter-group">
          <img src={distanceIcon} alt="Distance" />
          <span>All Distances</span>
        </div>

        <h2>Events</h2>
        <div className="events-list">
          {events.map(ev => (
            <div key={ev.id} className="event-item">
              <strong>{ev.title}</strong>
              <div className="event-meta">
                <small>{ev.date}</small>
                <Link to={`/events/${ev.id}`} className="event-link">→</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapPage;
