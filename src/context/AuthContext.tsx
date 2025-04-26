'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut, User, UserCredential } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from '@/lib/firebase';

const AuthContext = createContext<{ user: User | null }>({ user: null });

const provider = new GoogleAuthProvider();

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
    const googleAuth =():Promise<UserCredential>=>{
        return signInWithPopup(auth, provider)
    }
    
    const signOutAuth = () => {
        return signOut(auth)
    }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);  
    });

    return () => unsubscribe();  // Cleanup listener when unmount
  }, []);
  const info = {user, googleAuth,signOutAuth}
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
