import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Shop from './pages/Shop.jsx';
import ProductView from './pages/shop components/ProductView.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Profile from './pages/Profile.jsx';

AOS.init();

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/shop-page',
        element:<Shop />
      },
      {
        path:'/product/:productID',
        element:<ProductView />
      },
      {
        path:'/checkout-page',
        element:<CheckoutPage />
      },
      {
        path:'/profile',
        element:<Profile />
      },
      {
        path:'/sign-in',
        element:<SignIn />
      },
      {
        path:'sign-up',
        element:<SignUp />
      }
    ],
    errorElement:<PageNotFound />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RouterProvider router={appRouter} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
