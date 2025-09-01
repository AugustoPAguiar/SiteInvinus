import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import MerchandisePage from './pages/MerchandisePage';
import AboutPage from './pages/AboutPage';
import CalendarPage from './pages/CalendarPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="merchandise" element={<MerchandisePage />} />
      </Route>
    </Routes>
  );
}

export default App;