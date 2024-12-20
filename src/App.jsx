import { Routes, Route, useLocation } from "react-router-dom";
import HomePages from "./pages/HomePages";
import ShopPages from "./pages/ShopPages";
import AboutPages from "./pages/AboutPages";
import AllProductPages from "./pages/AllProductPages";
import LearnMore1 from "./pages/LearnMore1";
import LoginPages from "./pages/LoginPages";

import NavbarComponents from "./components/NavbarComponents";
import ContactPages from "./pages/ContactPages";
import FooterComponents from "./components/FooterComponents";
import RegisterPages from "./pages/RegisterPages";

function App() {
  const location = useLocation();

  const hideNavbarFootersRoutes = ["/login", "/register"];

  return (
    <div>
      {!hideNavbarFootersRoutes.includes(location.pathname) && (
        <NavbarComponents />
      )}
      <Routes>
        <Route path="/" Component={HomePages} />
        <Route path="shop" Component={ShopPages} />
        <Route path="contact" Component={ContactPages} />
        <Route path="about" Component={AboutPages} />
        <Route path="allproduct" Component={AllProductPages} />
        <Route path="learnmore1" Component={LearnMore1} />
        <Route path="login" Component={LoginPages} />
        <Route path="register" Component={RegisterPages} />
      </Routes>

      {!hideNavbarFootersRoutes.includes(location.pathname) && (
        <FooterComponents />
      )}
    </div>
  );
}

export default App;
