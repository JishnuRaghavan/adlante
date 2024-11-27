import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import PageNotFound from "./pages/PageNotFound"
import PrivateRoute from "./components/PrivateRoute"
import HeaderAdelante from "./components/HeaderAdelante"
import FooterAdelante from "./components/FooterAdelante"
import Shop from "./pages/Shop"
import ProductView from "./pages/shop components/ProductView"

export default function App() {
  return (
    <BrowserRouter>
      <HeaderAdelante />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/shop-page" element={<Shop />} >

        </Route>
        <Route path="/product/:productID" element={<ProductView />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <FooterAdelante />
    </BrowserRouter>
  )
}