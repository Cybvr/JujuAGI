import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles/App.css';  // Add this line
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Router>
      <App />
    </Router>
);

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch((error) => {
        console.error('ServiceWorker registration failed: ', error);
      });
  });
}