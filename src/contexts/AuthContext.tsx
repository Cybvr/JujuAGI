import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  User, 
  signOut, 
  signInWithPopup, 
  GoogleAuthProvider,
  FacebookAuthProvider,
  updateProfile as firebaseUpdateProfile
} from 'firebase/auth';
import { auth } from '../firebase';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signIn: (provider: 'google' | 'facebook') => Promise<void>;
  logOut: () => Promise<void>;
  updateProfile: (profileData: { displayName?: string; photoURL?: string }) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  loading: true,
  signIn: async () => {},
  logOut: async () => {},
  updateProfile: async () => {}
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signIn = async (provider: 'google' | 'facebook') => {
    let authProvider;
    switch(provider) {
      case 'google':
        authProvider = new GoogleAuthProvider();
        break;
      case 'facebook':
        authProvider = new FacebookAuthProvider();
        break;
      default:
        throw new Error('Unsupported provider');
    }
    await signInWithPopup(auth, authProvider);
  };

  const logOut = async () => {
    await signOut(auth);
  };
  const updateProfile = async (profileData: { displayName?: string; photoURL?: string }) => {
    if (!currentUser) throw new Error('No user logged in');
    await firebaseUpdateProfile(currentUser, profileData);
    // Update the local user state to reflect changes
    setCurrentUser({ ...currentUser, ...profileData });
  };

  const value = {
    currentUser,
    loading,
    signIn,
    logOut,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}