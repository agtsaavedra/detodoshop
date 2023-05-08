export const createProductsAdapted = (doc) => {
    

    const fields = doc.data();
    

    const productAdapter = {
        id: doc.id,
        category: fields.category,
        items: fields.items,
    }

    return productAdapter;
}