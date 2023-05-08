import { getDocs, collection, getDoc,query,doc } from "firebase/firestore";
import db from "./services/firebase/firebaseConfig";
import { createProductsAdapted } from "./adapters/productAdapter";

export const getProductos = async () => {
    const collectionRef = collection(db, "products/");
    console.log("0) Creo collection ref", collectionRef);

    const queryRef = query (collectionRef);
    console.log ("1)  Creo la query", queryRef);

    const queryResult = await getDocs(queryRef);
    console.log ("2) Ejecuto la query", queryResult);

    const productsAdapted = queryResult.docs.map((doc) => createProductsAdapted(doc));
    
    console.log ("resultados:", productsAdapted);

    return productsAdapted;
}
