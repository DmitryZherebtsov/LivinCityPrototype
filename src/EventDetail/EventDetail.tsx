import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './EventDetail.css';

// Імпорти картинок
import musicEventImg from '../assets/music_event.jpg';
import foodFestivalImg from '../assets/food_festival.jpg';
import standupShowImg from '../assets/standup_show.jpg';

const eventDetails = {
  1: {
    title: 'Music Event',
    date: 'June 1, 2025',
    location: 'Central Park, Paris',
    description: `Enjoy an evening of live music in the heart of Paris. Featuring top local bands, food stalls, and a vibrant atmosphere. Bring a friend and make it a night to remember!`,
    imageUrl: musicEventImg,
  },
  2: {
    title: 'Food Festival',
    date: 'June 7, 2025',
    location: 'Le Marais, Paris',
    description: `Taste a variety of dishes from around the world at Paris's annual Food Festival. From street food favorites to gourmet delicacies, there's something for every palate.`,
    imageUrl: foodFestivalImg,
  },
  3: {
    title: 'Stand-Up Show',
    date: 'June 14, 2025',
    location: 'Comedy Club, Paris',
    description: `Laugh out loud with the funniest comedians from France and beyond. A night full of jokes, stories, and non-stop entertainment.`,
    imageUrl: standupShowImg,
  },
};

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  // Перевірка на існування події
  if (!eventDetails[numericId as keyof typeof eventDetails]) {
    return (
      <div className="event-detail not-found">
        <h2>Event not found</h2>
        <Link to="/map">Back to map</Link>
      </div>
    );
  }

  const event = eventDetails[numericId as keyof typeof eventDetails];

  return (
    <div className="event-detail">
      <Link to="/map" className="back-link">← Back to map</Link>
      <div className="detail-container">
        <img src={event.imageUrl} alt={event.title} className="event-image" />
        <div className="info">
          <h1>{event.title}</h1>
          <p className="date-location">
            <strong>{event.date}</strong> &middot; {event.location}
          </p>
          <p className="description">{event.description}</p>
          <button className="btn-book">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
