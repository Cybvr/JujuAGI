// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AllToolsPage from './pages/AllToolsPage';
import ToolTemplate from './pages/ToolTemplate';
import LoginPage from './pages/LoginPage';
import PricingPage from './pages/PricingPage';
import LegalPage from './pages/LegalPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import FAQPage from './pages/FAQPage';
import SettingsPage from './pages/SettingsPage';
import SignupPage from './pages/SignupPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';

  return (
    <div className={darkMode ? 'dark' : ''}>
      {!isLoginPage && !isSignupPage && <Header darkMode={darkMode} setDarkMode={setDarkMode} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-tools" element={<AllToolsPage />} />
        <Route path="/tool/:toolId" element={<ToolTemplate />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      {!isLoginPage && !isSignupPage && <Footer />}
    </div>
  );
}

export default App;