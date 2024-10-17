// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import './index.css';
import { Nav } from './Components/Nav';
import {Home} from './Components/Home';
import {About} from './Components/About';
import { Carreer } from './Components/Carreer';
import { Franchise } from './Components/Franchise';
import Technologies from './Components/Technologies';
import ContactUS from './Components/ContactUs';
import { IEE } from './Components/IEE';
import Services from './Components/Services';
import { PhdGuide } from './Components/PhdGuide';
import { Footer } from './Components/Footer';

function App() {
  return (
    <Router>
    <Nav/>
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/carreer' element={<Carreer/>} />
      <Route path='/franchise' element={<Franchise/>} />
      <Route path='/technologies' element={<Technologies/>} />
      <Route path='/contact' element={<ContactUS/>} />
      <Route path='/iee' element={<IEE/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/phdguide' element={<PhdGuide/>} />
    </Routes>
    <Footer/>
</Router>
  );
}

export default App;