// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
//   apiKey: "AIzaSyAQsYJfgojB2xfa9-qFiKLbGAQby0fDBW4",
//   authDomain: "product-information-57ea4.firebaseapp.com",
//   projectId: "product-information-57ea4",
//   storageBucket: "product-information-57ea4.appspot.com",
//   messagingSenderId: "542241918344",
//   appId: "1:542241918344:web:12f6c71db7add970097e3d",
//   measurementId: "G-90JWR3YG8X"
// apiKey: "AIzaSyCbeVQw2MlQOSE-97UyMx7IJKiSgvVqYYY",
//   authDomain: "crud-b15f0.firebaseapp.com",
//   projectId: "crud-b15f0",
//   storageBucket: "crud-b15f0.appspot.com",
//   messagingSenderId: "286952407725",
//   appId: "1:286952407725:web:b225d47ef9b394479b3c24",
//   measurementId: "G-1MDC27LYW2"

// apiKey: "AIzaSyCscTEP-si2HvuKkjCsgfQ_oVt_FRFU340",
// authDomain: "pratap-project-bbab5.firebaseapp.com",
// projectId: "pratap-project-bbab5",
// storageBucket: "pratap-project-bbab5.appspot.com",
// messagingSenderId: "935354552187",
// appId: "1:935354552187:web:fdb4c9e87d1747500977de",
// measurementId: "G-CWCSTBN7PS"

apiKey: "AIzaSyB4_VfJCTKPW5_10_cZ52UragTmQWd5JN0",
  authDomain: "material-u-project.firebaseapp.com",
  projectId: "material-u-project",
  storageBucket: "material-u-project.appspot.com",
  messagingSenderId: "473764886983",
  appId: "1:473764886983:web:08c62f62a3b040e7f701e2",
  measurementId: "G-1QFQH4NK0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);