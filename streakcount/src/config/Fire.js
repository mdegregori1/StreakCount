import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyDsDHfUc-neimPc4HPejFgqjjl4YXSlg90",
    authDomain: "streakcount.firebaseapp.com",
    databaseURL: "https://streakcount.firebaseio.com",
    projectId: "streakcount",
    storageBucket: "streakcount.appspot.com",
    messagingSenderId: "220609774547",
    appId: "1:220609774547:web:31e7e924117c41d5e06526",
    measurementId: "G-ZB5VGME74L"
  };
  // Initialize Firebase
  let fire = firebase.initializeApp(firebaseConfig);

  firebase.analytics();

  export default fire;