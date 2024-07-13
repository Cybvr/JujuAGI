import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "jujuagi.firebaseapp.com",
  projectId: "jujuagi",
  storageBucket: "jujuagi.appspot.com",
  messagingSenderId: "703732102986",
  appId: "1:703732102986:web:e2c9490e669c41cd40f3b3",
  measurementId: "G-6EB4TE29CN"
};

// Add this line here
console.log("API Key:", import.meta.env.VITE_FIREBASE_API_KEY);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Analytics
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { analytics };