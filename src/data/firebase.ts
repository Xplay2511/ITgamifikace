import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from 'firebase/analytics'; // Optional, only if you want analytics

const firebaseConfig = {
  apiKey: 'AIzaSyBPfo4YVc6PFgVyhrE3GZjJI0mFulpBKDc',
  authDomain: 'itgamifikace.firebaseapp.com',
  projectId: 'itgamifikace',
  storageBucket: 'itgamifikace.appspot.com',
  messagingSenderId: '693204035422',
  appId: '1:693204035422:web:73a27dc87d8c3d30f7d1cf',
  measurementId: 'G-ENKMC867HX'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const analytics = getAnalytics(app); // Optional 