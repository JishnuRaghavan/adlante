import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import PrivateRoute from "./components/PrivateRoute";
import HeaderAdelante from "./components/HeaderAdelante";
import FooterAdelante from "./components/FooterAdelante";
import Shop from "./pages/Shop";
import ProductView from "./pages/shop components/ProductView";
import useScrollToTop from "./utils/useScrollToTop";
import useHeaderScrollingEffect from "./utils/useHeaderScrollingEffect";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  useScrollToTop(); // Called inside a component rendered under BrowserRouter
  useHeaderScrollingEffect();
  return (
    <>
      <HeaderAdelante />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/shop-page" element={<Shop />} />
        <Route path="/product/:productID" element={<ProductView />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <FooterAdelante />
    </>
  );
}
