import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductosList from "./pages/products/ProductosList"
import { useEffect } from "react";
import { useCategoriesStore } from "./store/categoriesStore";
import { useProductsStore } from "./store/productsStore";
import { useAuthStore } from "./store/authStore.js";

function App() {

  const { loadCategories } = useCategoriesStore()
  const { loadProducts } = useProductsStore()
  const { initAuth } = useAuthStore()

  useEffect(() => {
      initAuth().then(() => {
        loadCategories()
        loadProducts()
    })
  }, []);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ProductosList />} />
      </Routes>
    </Router>
  )
}

export default App
