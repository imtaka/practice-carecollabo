import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "API_KEY",
        authDomain: "AUTO_DOMAIN",
        databaseURL: "DATABASE_URL",
        projectId: "PROJECT_ID",
        storageBucket: "STORAGE_BUCKET",
        messagingSenderId: "MESSAGING_SENDER_ID",
        appId: "APP_ID"
    })
}

export default firebase