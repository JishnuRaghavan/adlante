import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
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
import CheckoutPage from "./pages/CheckoutPage";

export default function App() {
  const noHeaderRoutes  = ['/checkout-page','sign-in','sign-up'];

  useScrollToTop();
  useHeaderScrollingEffect();

  return (
    <>
      {!noHeaderRoutes.includes(location.pathname) && <HeaderAdelante />} 
      <Outlet />
      {!noHeaderRoutes.includes(location.pathname) && <FooterAdelante />}
    </>
  );
}