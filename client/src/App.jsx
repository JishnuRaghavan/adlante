import { Outlet } from "react-router-dom";
import HeaderAdelante from "./userComponents/HeaderAdelante";
import FooterAdelante from "./userComponents/FooterAdelante";
import useScrollToTop from "./utils/useScrollToTop";
import useHeaderScrollingEffect from "./utils/useHeaderScrollingEffect";
import LoadStylesheets from "./adminComponents/LoadStylesheets";

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