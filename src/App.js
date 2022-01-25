import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sale from "./pages/sale/Sale";
import Purchase from "./pages/purchase/Purchase";
import Product from "./pages/product/Product";
import Supplier from "./pages/supplier/Supplier";

function App() {
  return <Layout />;
}

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Sale />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/add-product" element={<Product />} />
          <Route path="/add-supplier" element={<Supplier />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
