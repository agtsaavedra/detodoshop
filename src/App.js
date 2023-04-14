
import './styles/styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { data } from "./services/data"
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ItemsListContainer from './components/ItemsListContainer';
import ItemDetailsContainer from './components/ItemDetailsContainer';


function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, [])
  console.log(products);
  return (

    <BrowserRouter>
      <NavBar products={products} />
      <Routes>
        <Route path='/' element={<HomePage products={products} />}></Route>
        <Route path='/:category' element={<ItemsListContainer products={products} />}></Route>
        <Route path='/:item/:id' element={<ItemDetailsContainer products={products}/>}></Route>
      </Routes>
    </BrowserRouter>



  );
}

export default App;
