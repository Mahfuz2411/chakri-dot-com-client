import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4nOshKSPMJkKzu6adhcXaE5oLcsA85Yw",
  authDomain: "chakridotcom1.firebaseapp.com",
  projectId: "chakridotcom1",
  storageBucket: "chakridotcom1.appspot.com",
  messagingSenderId: "625323369906",
  appId: "1:625323369906:web:aac9ac2f51d8a103bc30ab",
  measurementId: "G-53XWLQ15VT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;