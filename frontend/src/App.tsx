import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CarsPage from './pages/SpacesPage';
import LoginPage from './pages/LoginPage';
import CarBookingPage from './pages/BookingPage';
import MyReservationsPage from './pages/MyReservationsPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/cars" replace />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/booking/:id" element={<CarBookingPage />} />
          <Route path="/reservations" element={<MyReservationsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
