
import './styles/styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import ItemsListContainer from './components/ItemsListContainer';
import ItemDetailsContainer from './components/ItemDetailsContainer';
import Checkout from './components/Checkout';
import { getProductos } from './data/getData';
import { CartContext, ShoppingCartProvider } from './context/CartContext';


function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsFirestore = getProductos();

    getProductsFirestore.then((getProductsFirestore => {
      setProducts(getProductsFirestore);
    }))
    
    
  }, [])

  const [cart, setCart] = useState([]);
  return (

    <BrowserRouter>
      <ShoppingCartProvider value={[cart, setCart]}>
      <NavBar products={products} />
      <Routes>
        <Route path='/' element={<ItemsListContainer/>}></Route>
        <Route path='/:category' element={<ItemsListContainer/>}></Route>
        <Route path='/:item/:id' element={<ItemDetailsContainer products={products}/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>
    



  );
}

export default App;
