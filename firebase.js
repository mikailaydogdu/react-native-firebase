import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDuN7O0scQoRadfqeLcBqEklrYelTG2mAk",
  authDomain: "fir-auth-537be.firebaseapp.com",
  projectId: "fir-auth-537be",
  storageBucket: "fir-auth-537be.appspot.com",
  messagingSenderId: "260850582260",
  appId: "1:260850582260:web:836b0874118be8a238d4a1"
};


const  app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth};