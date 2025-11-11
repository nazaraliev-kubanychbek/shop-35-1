import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CartPage from "./pages/CartPage/CartPage";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import { categoryStore } from "./store/store";
import './style.scss';

function App() {
  const fetchCategory = categoryStore( s => s.fetchCategory);

  useEffect(()=>{
    fetchCategory()
  },[fetchCategory])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/product/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
