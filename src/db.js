import Firebase from "firebase/app";
import config from "./firebase.config.js"
require("firebase/firestore");

let fap = Firebase.initializeApp(config);
export const db = fap.firestore();
export const listColl = db.collection("lists")

export const categories = [
  "fruits",
  "vegetables",
  "dairy",
  "cereals",
  "canned",
  "cooking",
  "meat",
  "frozen",
  "household",
  "misc"]

