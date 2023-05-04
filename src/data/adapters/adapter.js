export const adaptProductsData = (doc) => {
    
    const { id, category, items } = doc.data();
    
    const itemsAdapter = items.map(item => ({
        idProduct: item.idProduct,
        nameProduct: item.nameProduct,
        price: item.price,
        quantity: item.quantity,
        img: item.img,
        description: item.description
      }));
      
      

    const dataAdapted = { 
        id: doc.id, 
        category: doc.category,
        items: itemsAdapter
    }
    console.log("data adaptada" ,dataAdapted);
    return dataAdapted

}