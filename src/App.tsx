
// import './App.css'
import Product from "./components/Product.tsx"
import Nav from "./components/Nav.tsx"
import { useState } from "react";


function App() {
  const [cartCount, setCartCount] = useState<number>(0); 
  const [currentImg, setCurrentImg] = useState<string>(
    "/images/image-product-1.jpg"
  );
  const [qty, setQty] = useState<number>(0);
  return (
    <>
      <Nav cartCount={cartCount} setCartCount={setCartCount}  currentImg={currentImg} setCurrentImg={setCurrentImg} qty={qty} setQty={setQty}/>
      <Product cartCount={cartCount} setCartCount={setCartCount} currentImg={currentImg} setCurrentImg={setCurrentImg} qty={qty} setQty={setQty}/>
    </>
  );
}

export default App;

