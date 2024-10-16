import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/home';
import Navbar from './Components/Navbar/nav';
import About from './Components/About/About';
// import Products from './Components/Products/products';
// import Nutritions from './Components/Nutritions/nutritions';
import Blog from './Components/Blogpage/Blogpage';
import Shop from './Components/Shop/Shop';
import Contact from './Components/contact/contact';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Shop/Cart';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/blog" element={<Blog />} />
       <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
         {/* <Route path="/products" element={<Products />} />
        <Route path="/nutritions" element={<Nutritions />} />
        
         */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
