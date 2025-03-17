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
import Counter from './components/Counter/Counter';
import QrCode from './components/QrCode/QrCode';
import PassGenerate from './components/PasswordGenerator/PassGenerate';
import DarkMode from './components/DarkMode/DarkMode';
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator';
import CustomTab from './components/Tab/CustomTab';
import Calculator from './components/CalculatorApp/Calculator';
import HorizontalSlider from './components/ImageGsap/HorizontalSlider';
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
        <Route path='/counter' element={<Counter />} />
        <Route path='/qr_code' element={<QrCode />} />
        <Route path='/password_generate' element={<PassGenerate />} />
        <Route path='/dark_mode' element={<DarkMode />} />
        <Route path='/scroll_indicator' element={<ScrollIndicator />} />
        <Route path='/tab' element={<CustomTab />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/gsap' element={<HorizontalSlider />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
