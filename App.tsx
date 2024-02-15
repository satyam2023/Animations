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


function App(): React.JSX.Element {
  return (
    <>
  <MovingTextBanner/>
  <FadingView/>
    </>
  );
}



export default App;
