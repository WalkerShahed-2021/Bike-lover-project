import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initailaizAthuntication = () =>{
    initializeApp(firebaseConfig);
}
export default initailaizAthuntication;

/* 
yarn add firebase@9.6.3
yarn remove firebase@9.6.3
npm i -g firebase
*/