
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAJd3ljViZuhVcjSFufZZQkfpE9E5DBr3k",
    authDomain: "netflix-clone-fef3c.firebaseapp.com",
    projectId: "netflix-clone-fef3c",
    storageBucket: "netflix-clone-fef3c.appspot.com",
    messagingSenderId: "886581049061",
    appId: "1:886581049061:web:9dedbe81d7ded58627860c",
    measurementId: "G-LL41M28F5H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);
