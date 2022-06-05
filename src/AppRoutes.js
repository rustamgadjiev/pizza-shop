import { Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Main } from "./pages/Main";
import { NoMatch } from "./pages/NoMatch";

export const AppRoutes = ({ searchValue }) => {
  return (
    <Routes>
      <Route path="/" element={<Main searchValue={searchValue} />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
