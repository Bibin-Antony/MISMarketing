// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MarketingPage from './routes/MarketingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketingPage />} />
      </Routes>
    </Router>
  );
};

export default App;