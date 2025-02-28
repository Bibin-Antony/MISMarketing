// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MarketingPage from './routes/MarketingPage';
import ThankYou from './components/ThankYou';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketingPage />} />
        <Route path="/Thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};

export default App;