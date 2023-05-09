import { getDocs, collection, query, where, limit } from "firebase/firestore";
import db from "./services/firebase/firebaseConfig";
import { createProductsAdapted } from "./adapters/productAdapter";

export const getProductos = async (category) => {
    const collectionRef = collection(db, "products/");
  
    const queryRef = category
      ? query(collectionRef, where("category", "==", category))
      : query(collectionRef);
  
    const queryResult = await getDocs(queryRef);
  
    const productsAdapted = queryResult.docs.map((doc) => createProductsAdapted(doc));
  
    return productsAdapted;
  };

 

 