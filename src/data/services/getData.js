import { adaptProductsData } from "../adapters/adapter";
import { getDocs, collection, query, where, doc, getDoc,addDoc ,documentId, orderBy, setDoc } from "firebase/firestore"
import db from "./firebase/firebaseConfig";


export const fetchProducts = async () => {
    try {
        const docRef = doc(db, 'products');
        const response = await getDoc(docRef);
        const productAdapted = adaptProductsData(response);
        return productAdapted;

    } catch (error) {
        console.error(error);
    }
};
//fetch principal, se llama en itemslistdetails (no muestra nada da error base de datos)
// 

 
