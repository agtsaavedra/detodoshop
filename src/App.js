import ItemsListContainer from './components/ItemsListContainer';
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
      <Route path='/' element={<ItemsListContainer greetings="hola"/>}></Route>
    </Routes>
    </BrowserRouter>
    
   

  );
}

export default App;
