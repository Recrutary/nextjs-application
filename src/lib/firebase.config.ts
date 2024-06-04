import { initializeApp } from 'firebase/app';
import { getAuth, OAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyApFTvHjiaXgGxGGJ4YrT5GfRSPeKTpv4A",
  authDomain: "recrutary-frb.firebaseapp.com",
  projectId: "recrutary-frb",
  storageBucket: "recrutary-frb.appspot.com",
  messagingSenderId: "874710423193",
  appId: "1:874710423193:web:c720baa0f1f55d6dd2ca08",
  measurementId: "G-7B42KG6CTW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

if (typeof window !== "undefined") {
  getAnalytics(app);
}

export { app, auth, OAuthProvider };
