import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "../pages/cart";
import { Intropages } from "../pages/pages";
import { Rootapp } from "../pages/rootpage/rootapp";


export function Routerapp() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Intropages />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Filter" element={<Rootapp />} />
      </Routes>
    </Router>
  );
}
