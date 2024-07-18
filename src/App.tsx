import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNavBar from './components/MobileNavBar';
import Loading from './components/Loading';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import InstallPrompt from './components/InstallPrompt';
import DataDeletionPage from './pages/DataDeletionPage';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';

const HomePage = lazy(() => import('./pages/HomePage'));
const AllToolsPage = lazy(() => import('./pages/AllToolsPage'));
const PDFtoJPG = lazy(() => import('./components/tools/pdf/PDFtoJPG'));
const JPGtoPDF = lazy(() => import('./components/tools/pdf/JPGtoPDF'));
const MergePDF = lazy(() => import('./components/tools/pdf/MergePDF'));
const SplitPDF = lazy(() => import('./components/tools/pdf/SplitPDF'));
// Convert tools
const ExcelToPDF = lazy(() => import('./components/tools/convert/ExcelToPDF'));
const CSVToExcel = lazy(() => import('./components/tools/convert/CSVToExcel'));
const XMLToJSON = lazy(() => import('./components/tools/convert/XMLToJSON'));
const XMLToCSV = lazy(() => import('./components/tools/convert/XMLToCSV'));

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
const ResumeWriter = lazy(() => import('./components/tools/writing/ResumeWriter'));
const TextCaseConverter = lazy(() => import('./components/tools/writing/TextCaseConverter'));

const EssayWriter = lazy(() => import('./components/tools/writing/EssayWriter'));
const GrammarChecker = lazy(() => import('./components/tools/writing/GrammarChecker'));
const PlagiarismDetector = lazy(() => import('./components/tools/writing/PlagiarismDetector'));
const WordCount = lazy(() => import('./components/tools/writing/WordCountTool'));
const CharacterCount = lazy(() => import('./components/tools/writing/CharacterCountTool'));
const LoremIpsum = lazy(() => import('./components/tools/writing/LoremIpsumGenerator'));

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';
  const isDashboardPage = location.pathname.startsWith('/dashboard');

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
    <ErrorBoundary>
      <AuthProvider>
        <ScrollToTop />
        <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white ${darkMode ? 'dark' : ''}`}>
          {!isLoginPage && !isSignupPage && !isDashboardPage && (
            <Header darkMode={darkMode} setDarkMode={toggleDarkMode} />
          )}
          <main className="pb-16 md:pb-0">
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
                <Route path="/tool/resume-writer" element={<ResumeWriter />} />
                <Route path="/tool/essay-writer" element={<EssayWriter />} />
                <Route path="/tool/grammar-checker" element={<GrammarChecker />} />
                <Route path="/tool/text-case-converter" element={<TextCaseConverter />} />
                <Route path="/tool/plagiarism-detector" element={<PlagiarismDetector />} />
                <Route path="/tool/word-count" element={<WordCount />} />
                <Route path="/tool/character-count" element={<CharacterCount />} />
                <Route path="/tool/lorem-ipsum" element={<LoremIpsum />} />
                <Route path="/tool/excel-to-pdf" element={<ExcelToPDF />} />
                <Route path="/tool/csv-to-excel" element={<CSVToExcel />} />
                <Route path="/tool/xml-to-json" element={<XMLToJSON />} />
                <Route path="/tool/xml-to-csv" element={<XMLToCSV />} />
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
                <Route path="/data-deletion" element={<DataDeletionPage />} />
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
          {!isLoginPage && !isSignupPage && <MobileNavBar />}
          <InstallPrompt />
        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;