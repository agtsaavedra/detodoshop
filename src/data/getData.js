import { getDocs, collection, query, where, limit, addDoc } from "firebase/firestore";
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


export const uploadOrder = async (cart, total) => {
  
  
  const docRef = await addDoc(collection(db, "orders"), {
    date: new Date(),
    products: cart,
    total: total,
  });
  
  const id = docRef.id; // obtiene el ID del documento recién creado
  console.log(id);
  return id;

};