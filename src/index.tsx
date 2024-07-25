import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles/App.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <App />
  </Router>
);

// Commenting out service worker registration for now
// if ('serviceWorker' in navigator && import.meta.env.PROD) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.getRegistrations().then(function(registrations) {
//       for(let registration of registrations) {
//         registration.unregister();
//       }
//     }).then(() => {
//       navigator.serviceWorker.register('/service-worker.js')
//         .then((registration) => {
//           console.log('ServiceWorker registration successful with scope: ', registration.scope);
//         })
//         .catch((error) => {
//           console.error('ServiceWorker registration failed: ', error);
//         });
//     });
//   });
// }