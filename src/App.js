import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Banner from './components/Banner/Banner';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './Context/Context'
import { NotificationProvider } from './Mensaje/Mensaje'



function App() {
 
  
  
  return (
    <div className="App-header">
    <div className="App">
      <Banner/>
      <NotificationProvider>
      <CartContextProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/category/:categoryId' element={<ItemListContainer />} />
      <Route path='/item/:id' element={<ItemDetailContainer />} />
      <Route path='/cart' element={<Cart />} />
      </Routes>
      </BrowserRouter>
      </CartContextProvider>
      </NotificationProvider>
     <Footer/>
    </div>
    </div>
  );
}

export default App;
