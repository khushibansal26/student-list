import {initializeApp} from 'firebase/app';

import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyD8KkuldT9JHws1SL1v_kCz18QHSnbZ1UU",
    authDomain: "project-1-d8ae3.firebaseapp.com",
    projectId: "project-1-d8ae3",
    storageBucket: "project-1-d8ae3.appspot.com",
    messagingSenderId: "191812858892",
    appId: "1:191812858892:web:303a65dee2844bdbf5ea29"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

    // Initialize Firebase
  export const db= getFirestore(app);