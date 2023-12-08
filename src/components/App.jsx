import Layout from "layout/Layout";
import Catalog from "pages/Catalog/Catalog";
import Favorites from "pages/Favorites/Favorites";
import Homepage from "pages/Homepage/Homepage";
import { Navigate, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
