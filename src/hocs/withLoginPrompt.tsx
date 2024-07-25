import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext'; // Adjust this import path as needed
import LoginPopup from '../components/LoginPopup'; // Adjust this import path as needed

const withLoginPrompt = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return (props: P) => {
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const { currentUser } = useAuth();

    useEffect(() => {
      let timer: NodeJS.Timeout;
      if (!currentUser) {
        timer = setTimeout(() => {
          setShowLoginPopup(true);
        }, 2000);
      }
      return () => clearTimeout(timer);
    }, [currentUser]);

    if (showLoginPopup && !currentUser) {
      return <LoginPopup />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoginPrompt;