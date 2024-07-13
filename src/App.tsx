import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AllToolsPage from './pages/AllToolsPage';
import ToolTemplate from './pages/ToolTemplate';
import LoginPage from './pages/LoginPage';
import PricingPage from './pages/PricingPage';
import Legal from './pages/Legal';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import FAQPage from './pages/FAQPage';
import SettingsPage from './pages/SettingsPage';
import SignupPage from './pages/SignupPage';
import CategoryPage from './pages/CategoryPage';
import InstallPrompt from './components/InstallPrompt';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode: boolean) => !prevMode);
  };

  return (
    <AuthProvider>
      <div className={darkMode ? 'dark' : ''}>
        {!isLoginPage && !isSignupPage && (
          <Header darkMode={darkMode} setDarkMode={toggleDarkMode} />
        )}
        <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/all-tools" element={<AllToolsPage />} />
            <Route path="/tool/:toolId" element={<ToolTemplate />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
        {!isLoginPage && !isSignupPage && <Footer />}
        <InstallPrompt />
      </div>
    </AuthProvider>
  );
}

export default App;