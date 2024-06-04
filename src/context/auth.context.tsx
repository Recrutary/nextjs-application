import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { User, onAuthStateChanged, signInWithPopup, OAuthProvider } from 'firebase/auth';
import { auth } from '../lib/firebase.config';

interface AuthContextProps {
  user: User | null;
  signInWithLinkedIn: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  signInWithLinkedIn: () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithLinkedIn = () => {
    const provider = new OAuthProvider('linkedin.com');
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      router.push('/login');
    });
  };

  return (
    <AuthContext.Provider value={{ user, signInWithLinkedIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
