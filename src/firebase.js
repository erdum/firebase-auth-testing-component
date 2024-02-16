import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAAupNg47zrYYM9ICNdNAO67_AEjMbOOyM",
  authDomain: "rental-bay-test.firebaseapp.com",
  projectId: "rental-bay-test",
  storageBucket: "rental-bay-test.appspot.com",
  messagingSenderId: "79972544181",
  appId: "1:79972544181:web:d210c760c726816f8058fc"
};

const app = initializeApp(firebaseConfig);

export default app;
