  import { initializeApp, getApps } from 'firebase/app';
  import { getAuth } from 'firebase/auth';
   
  const firebaseConfig = {
    apiKey: "AIzaSyCYn2sf4VTekcYUgBWGgXloxQg4OzBjDAs",
    authDomain: "sveltefirebase-e07ff.firebaseapp.com",
    projectId: "sveltefirebase-e07ff",
    storageBucket: "sveltefirebase-e07ff.appspot.com",
    messagingSenderId: "846335092916",
    appId: "1:846335092916:web:fa5053bec076b17e728fe1"
  };
   
  // Initialize Firebase
  let firebaseApp;
   
  if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
  }
   
  // Auth
  const auth = getAuth(firebaseApp);
   
  export { firebaseApp, auth };