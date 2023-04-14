import ItemsListContainer from './components/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import './styles/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {data} from "./data"
import { useEffect, useState } from 'react';
function App() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    setProducts(data);
  }, [])
  
  return (

    <BrowserRouter>
    <NavBar products={products}/>
    <Routes>
      <Route path='/' element={<Home products={products}/>}></Route>
      <Route path='/:category' element={<ItemsListContainer products={products}/>}></Route>
      <Route path='/:category/:id' element={<ItemDetailContainer products={products}/>}></Route>
    </Routes>
    </BrowserRouter>
    
   

  );
}

export default App;
