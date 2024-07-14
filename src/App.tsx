import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import InstallPrompt from './components/InstallPrompt';

const HomePage = lazy(() => import('./pages/HomePage'));
const AllToolsPage = lazy(() => import('./pages/AllToolsPage'));
const PDFtoJPG = lazy(() => import('./components/tools/pdf/PDFtoJPG'));
const JPGtoPDF = lazy(() => import('./components/tools/pdf/JPGtoPDF'));
const MergePDF = lazy(() => import('./components/tools/pdf/MergePDF'));
const SplitPDF = lazy(() => import('./components/tools/pdf/SplitPDF'));
const RemoveBackground = lazy(() => import('./components/tools/images/RemoveBackground'));
const ImageResizer = lazy(() => import('./components/tools/images/ImageResizer'));
const ImageConverter = lazy(() => import('./components/tools/images/ImageConverter'));
const ImageCompressor = lazy(() => import('./components/tools/images/ImageCompressor'));
const ToolTemplate = lazy(() => import('./pages/ToolTemplate'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const Legal = lazy(() => import('./pages/Legal'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';
  const isDashboardPage = location.pathname === '/dashboard';

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
      <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white ${darkMode ? 'dark' : ''}`}>
        {!isLoginPage && !isSignupPage && !isDashboardPage && (
          <Header darkMode={darkMode} setDarkMode={toggleDarkMode} />
        )}
        <main className={`${isDashboardPage ? 'dashboard-main' : ''}`}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/all-tools" element={<AllToolsPage />} />
              <Route path="/tool/pdf-to-jpg" element={<PDFtoJPG />} />
              <Route path="/tool/jpg-to-pdf" element={<JPGtoPDF />} />
              <Route path="/tool/merge-pdf" element={<MergePDF />} />
              <Route path="/tool/split-pdf" element={<SplitPDF />} />
              <Route path="/tool/remove-background" element={<RemoveBackground />} />
              <Route path="/tool/image-resizer" element={<ImageResizer />} />
              <Route path="/tool/image-converter" element={<ImageConverter />} />
              <Route path="/tool/image-compressor" element={<ImageCompressor />} />
              <Route path="*" element={<AllToolsPage />} />
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
          </Suspense>
        </main>
        {!isLoginPage && !isSignupPage && !isDashboardPage && <Footer />}
        <InstallPrompt />
      </div>
    </AuthProvider>
  );
}

export default App;