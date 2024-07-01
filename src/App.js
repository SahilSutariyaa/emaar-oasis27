
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import Slider from './Components/Slider/Slider';
import Word from './Components/Word/Word';
import Aboutus from './Components/About Us/Aboutus';
import Gallary from './Components/Gallary/Gallary';
import Mirage from './Components/Mirage/Mirage';
import Location from './Components/Location/Location';
import Amenite from './Components/Amenite/Amenite';
import Navbar from './Components/Navbar/Navbar'



const App = () => {


  return (
    <>

      <Navbar />
      <Slider />
      <Word />
      <Aboutus />
      <Gallary />
      <Mirage />
      <Amenite />
      <Location />
    </>
  )
}

export default App
