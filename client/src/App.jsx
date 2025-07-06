import { Outlet } from "react-router-dom";
import HeaderAdelante from "./components/HeaderAdelante";
import FooterAdelante from "./components/FooterAdelante";
import useScrollToTop from "./utils/useScrollToTop";
import useHeaderScrollingEffect from "./utils/useHeaderScrollingEffect";

export default function App() {
  const noHeaderRoutes  = ['/checkout-page','/sign-in','/sign-up'];

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