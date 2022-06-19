import { app } from "./firebase";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export async function getAllDocsByCollection(collectionName) {
  const db = getFirestore(app);
  const col = collection(db, collectionName);
  const snapshot = await getDocs(col);
  const colList = snapshot.docs.map((doc) => doc.data());
  return colList;
}

export async function checkUser(collectionName, user) {
  const db = getFirestore(app);
  const col = collection(db, collectionName);
  const queryCol = query(col, where("username", "==", user.username));
  const snapshot = await getDocs(queryCol);
  if (snapshot.docs.length > 0) {
    var userData = snapshot.docs[0].data();
    if (userData.password === user.password) {
      return snapshot.docs[0].data();
    } else {
      return "Not Found";
    }
  } else {
    return "Not Found";
  }
}

export async function fetchAllCategory(collectionName) {
  const db = getFirestore(app);
  const col = collection(db, collectionName);
  const snapshot = await getDocs(col);
  const result = snapshot.docs.map((doc) => doc.data());
  return result;
}

export async function fetchAllProduct(collectionName) {
  const db = getFirestore(app);
  const col = collection(db, collectionName);
  const snapshot = await getDocs(col);
  const result = await Promise.all(
    snapshot.docs.map(async (doc) => {
      var data = doc.data();
      var categoryName = await findCategoryNameByID(
        "category",
        data.categoryID
      );
      data.categoryName = categoryName;
      return data;
    })
  );
  return result;
}

export async function findCategoryNameByID(collectionName, categoryID) {
  const db = getFirestore(app);
  const col = collection(db, collectionName);
  const queryCol = query(col, where("id", "==", categoryID));
  const snapshot = await getDocs(queryCol);
  var data = snapshot.docs[0].data();
  return data.name;
}

export async function fetchProductInfoByID(collectionName, productID) {
  const db = getFirestore(app);
  const col = collection(db, collectionName);
  const queryCol = query(col, where("productID", "==", productID));
  const snapshot = await getDocs(queryCol);
  var data = snapshot.docs[0].data();
  return data;
}

export async function fetchEpisodesByID(collectionName, productID) {
  const db = getFirestore(app);
  const col = collection(db, collectionName);
  const queryCol = query(col, where("productID", "==", productID));
  const snapshot = await getDocs(queryCol);
  const result = snapshot.docs.map((doc) => doc.data());
  return result;
}

export async function fetchCharactersByID(collectionName, productID) {
  const db = getFirestore(app);
  const col = collection(db, collectionName);
  const queryCol = query(col, where("productID", "==", productID));
  const snapshot = await getDocs(queryCol);
  const result = snapshot.docs.map((doc) => doc.data());
  return result;
}
