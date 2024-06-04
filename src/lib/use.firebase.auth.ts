// src/lib/use.firebase.auth.ts
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { auth } from './firebase.config';
import { User, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';

const formatAuthUser = (user: User) => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName || '',
  imageUrl: user.photoURL || '/images/avatar/placeholder.svg',
  code: '',
  type: 'patient',
  teams: []
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const authStateChanged = async (authState: User | null) => {
    if (!authState) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const provider = new GoogleAuthProvider();

  const loginWithGoogle = () => signInWithPopup(auth, provider);

  const signOut = () => auth.signOut().then(() => router.push('/')).then(clear);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  const getToken = async () => {
    if (auth.currentUser) {
      return await auth.currentUser.getIdToken();
    }
    return null;
  };

  return {
    authUser,
    loading,
    loginWithGoogle,
    signOut,
    getToken,
  };
}
