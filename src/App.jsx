import React from 'react';
import Navbar from './components/Navbar.jsx';
import Items from './components/Items.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import More from './components/More.jsx';
import Contact from './components/Contact.jsx';
import Cart from './components/Cart.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cartstate from './context/cartstate.jsx';
import { Itemstate } from './context/cartstate.jsx';


const App = () => {
  return (
    <Cartstate>
    <Itemstate>
  <div className='overflow-x-hidden  '> 
       <Router>
      <>
        <Navbar />
        <Routes>
          <Route path='/items' element={<Items />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/more' element={<More />} />
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </>
    </Router>
    </div>
    </Itemstate>
    </Cartstate>
  );
}

export default App;
