import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvzjuFkGU731UPt-hH2sjVuzjXxE8z7gw",
  authDomain: "react-notes-app-db593.firebaseapp.com",
  databaseURL: "https://react-notes-app-db593.firebaseio.com",
  projectId: "react-notes-app-db593",
  storageBucket: "",
  messagingSenderId: "775929808687",
  appId: "1:775929808687:web:026d31ea223e442e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
