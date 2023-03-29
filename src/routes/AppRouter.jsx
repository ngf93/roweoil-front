import React from 'react';
import {createHashRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Catalog from '../pages/Catalog';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />}/>
      <Route path="catalog" element={<Catalog/>} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />
};

export default AppRouter;