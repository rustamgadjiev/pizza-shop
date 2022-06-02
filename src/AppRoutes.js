import { Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Main } from "./pages/Main";
import { NoMatch } from "./pages/NoMatch";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
