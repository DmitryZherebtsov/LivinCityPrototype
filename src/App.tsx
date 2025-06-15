import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import Header from './Header/header';
import MapPage from './MapPage/MapPage';
import EventDetail from './EventDetail/EventDetail';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path='/' element={<MainPage />} />

        <Route path='/Map' element={<MapPage />} />

        <Route path="/events/:id" element={<EventDetail />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
