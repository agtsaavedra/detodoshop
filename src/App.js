
import './styles/styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import ItemsListContainer from './components/ItemsListContainer';
import ItemDetailsContainer from './components/ItemDetailsContainer';
import { getProductos } from './data/getData';
import { data } from './data/services/data';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsFirestore = getProductos();

    getProductsFirestore.then((getProductsFirestore => {
      setProducts(getProductsFirestore);
    }))
    
    
  }, [])
 console.log("productos del appjs",products);
  return (

    <BrowserRouter>
      <NavBar products={products} />
      <Routes>
        <Route path='/' element={<ItemsListContainer products={products} />}></Route>
        <Route path=':category' element={<ItemsListContainer products={products} />}></Route>
        <Route path='/:item/:id' element={<ItemDetailsContainer products={products}/>}></Route>
      </Routes>
    </BrowserRouter>



  );
}

export default App;
