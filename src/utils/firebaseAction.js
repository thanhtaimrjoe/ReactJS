import { app } from "./firebase";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export default async function getAllDocsByCollection(collectionName) {
  const db = getFirestore(app);
  const col = collection(db, collectionName);
  const snapshot = await getDocs(col);
  const colList = snapshot.docs.map((doc) => doc.data());
  return colList;
}
