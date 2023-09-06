import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import SharedLayout from "./components/SharedLayout";
import Catalog from "./pages/Catalog";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />

        <Route path="/catalog" element={<Catalog />} />

        <Route path="/favorites" element={<Favorites />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
