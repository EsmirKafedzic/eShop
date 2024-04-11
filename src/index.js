import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import store from "./store/store"

//pages
import ProductPage from './pages/ProductPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import { Provider } from 'react-redux';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartProductsPage from './pages/CartProductsPage';
import FavoriteProductsPage from './pages/FavoriteProductsPage';

const router = createBrowserRouter([
  //mainRouter
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <ProductPage/>
      },
      {
        path: "/login",
        element: <LoginPage/>
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetailsPage/>
      },
      {
        path: "/cartPoroducts",
        element: <CartProductsPage/>
      },
      {
        path: "favoriteProducts",
        element: <FavoriteProductsPage/>
      }
    ]
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}/> */}
      <Provider store={store}> {/* Wrap your App component with Provider */}
    <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>
);
