import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default (context, inject) => {
    let fireApp;
    if (!firebase.apps.length) {
    fireApp = firebase.initializeApp({
        apiKey: "API_KEY",
        authDomain: "AUTO_DOMAIN",
        databaseURL: "DATABASE_URL",
        projectId: "PROJECT_ID",
        storageBucket: "STORAGE_BUCKET",
        messagingSenderId: "MESSAGING_SENDER_ID",
        appId: "APP_ID"
});
} else {
fireApp = firebase.app();
}
inject("fireApp", fireApp);
};
