import { Routes, Route } from "react-router-dom";
import Addproduct from "./Addproduct";
import Cart from "./Cart";
import EditProduct from "./EditProduct";
import Homepage from "./Homepage";
import Login from "./Login";
import Productpage from "./Productpage";

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Addproduct" element={<Addproduct />} />
        <Route path="/Productpage/:productId" element={<Productpage />} />
        <Route path="/Productpage/:productId/edit" element={<EditProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
};
