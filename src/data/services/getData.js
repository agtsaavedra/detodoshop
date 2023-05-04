import { adaptProductsData } from "../adapters/adapter";
import { getDocs, collection, query, where, doc, getDoc,addDoc ,documentId, orderBy, setDoc } from "firebase/firestore"
import db from "./firebase/firebaseConfig";


export const fetchProductsss = async () => {
    try {
        const docRef = doc(db, 'products');
        const response = await getDoc(docRef);
        const productAdapted = adaptProductsData(response);
        return productAdapted;

    } catch (error) {
        console.error(error);
    }
};

export const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = [];
      querySnapshot.forEach((doc) => {
        const productAdapted = adaptProductsData(doc);
        productsData.push(productAdapted);
      });
      return productsData;
    } catch (error) {
      console.error(error);
    }
  };

