import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBf1GQDmUsGFAZs3aCrNhCJ0Rdl3mjEGIE",
  authDomain: "cart-11a9a.firebaseapp.com",
  projectId: "cart-11a9a",
  storageBucket: "cart-11a9a.appspot.com",
  messagingSenderId: "379629450397",
  appId: "1:379629450397:web:dbe7a7e031760526b3d074"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

