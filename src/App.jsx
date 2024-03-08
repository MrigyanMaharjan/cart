import React from 'react';
import Navbar from './components/Navbar.jsx';
import Items from './components/Items.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import More from './components/More.jsx';
import Contact from './components/Contact.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
  <div className='overflow-x-hidden  '> 
       <Router>
      <>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Items />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/more' element={<More />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </>
    </Router>
    </div>

  );
}

export default App;
