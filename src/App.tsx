import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AllToolsPage from './pages/AllToolsPage';
import ToolTemplate from './pages/ToolTemplate';
import LoginPage from './pages/LoginPage';
import PricingPage from './pages/PricingPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className={darkMode ? 'dark' : ''}>
      {!isLoginPage && <Header darkMode={darkMode} setDarkMode={setDarkMode} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-tools" element={<AllToolsPage />} />
        <Route path="/tool/:toolId" element={<ToolTemplate />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;