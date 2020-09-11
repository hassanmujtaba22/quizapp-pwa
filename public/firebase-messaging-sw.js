importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCiwPTPCUNvOEt5qwf2lLH6To_3cwaZawk",
    authDomain: "quizapp-pwa-d0451.firebaseapp.com",
    databaseURL: "https://quizapp-pwa-d0451.firebaseio.com",
    projectId: "quizapp-pwa-d0451",
    storageBucket: "quizapp-pwa-d0451.appspot.com",
    messagingSenderId: "484463723525",
    appId: "1:484463723525:web:56d564a3bafd920116486c"
});


firebase.messaging();
