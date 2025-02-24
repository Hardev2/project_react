import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import HomePage from './Pages/HomePage';
import MainLayout from './Layout/MainLayout';
import Accordion from './components/accordion/accordion';
import HexColor from './components/HexColor/HexColor';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/accordion' element={<Accordion />} />
        <Route path='/hex' element={<HexColor />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
