import { Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { NewProducts } from "./components/NewProducts";
import { OrderConfirmed } from "./components/OrderConfirmed";
import { Products } from "./components/Products";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='order-confirmed' element={<OrderConfirmed />} />
          <Route path='products' element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path='featured' element={<FeaturedProducts />} />
            <Route path='new' element={<NewProducts />} />
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
