import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// getAnalytics(app);
import firebaseConfig from "./firebase.config";
const firebaseInitialization=()=>{
    initializeApp(firebaseConfig);
}
export default firebaseInitialization;