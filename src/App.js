import "react-multi-carousel/lib/styles.css";
import Header from './components/Header';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Product from "./ui/Product";
import Category from "./ui/Category";
import NotFound from "./ui/NotFound";
import Cart from "./ui/Cart";
import Favorite from "./ui/Favorite";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
     <>
     <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/category' element={<Category/>} />
        <Route path='/category/:id' element={<Category />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/profile' element={<Login/>} />
        <Route path='/register' element={<Registration/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
     </>
  );
}

export default App;
