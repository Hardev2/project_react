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
import StarRating from './components/StarRating/StarRating';
import ImageSlider from './components/ImageSlider/ImageSlider';
import LoadMore from './components/LoadMore/LoadMore';
import TreeNav from './components/TreeNav/TreeNav';
import { sideMenu } from './components/TreeNav/data';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/accordion' element={<Accordion />} />
        <Route path='/hex' element={<HexColor />} />
        <Route path='/star' element={<StarRating noOfStars={10} />} />
        <Route path='/slider' element={<ImageSlider />} />
        <Route path='/load_more' element={<LoadMore />} />
        <Route path='/tree_nav' element={<TreeNav menus={sideMenu} />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
