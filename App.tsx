/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import FadingView from './src/views/FadingView/FadingView';
import Banner from './src/components/TextBanner/Banner';
import MovingTextBanner from './src/components/TextBanner/Banner';
import TabItem from './src/components/TabItems/TabItem';
import DragAndDropCard from './src/views/DraggingCard/Drag';
import { View } from 'react-native';
import Slider from './src/views/ImageSlider/Slider';
import MovingSignupButton from './src/views/SignUp/SignUp';
import CardSwiper from './src/views/CardSwiper/CardSwipper';

import ImageCarousel from './src/views/Trial/Corusel';
import RippleEffect from './src/views/Ripple/Ripple';



function App(): React.JSX.Element {
  return (
    <>
     {/* <Banner/> */}
    {/* <DragAndDropCard heading="Draggable box" paragraph="You can move me anywhereWith the help og the cursor"/> */}
    {/* <TabItem/> */}
 {/* <FadingView/>  */}
  {/* <Slider/> */}
  {/* <Trial/> */}
  {/* <ImageCarousel/> */}
  {/* <MovingSignupButton/> */}
{/* <CardSwiper/> */}
<RippleEffect/>
</>
 
  );
}



export default App;
