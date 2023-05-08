export const createProductsAdapted = (doc) => {
    console.log ("3) Ingrese a createProductsAdapter", doc);

    const fields = doc.data();
    console.log ("4) La data esta cooked", fields);

    const productAdapter = {
        id: doc.id,
        category: fields.category,
        items: fields.items,
    }

    return productAdapter;
}