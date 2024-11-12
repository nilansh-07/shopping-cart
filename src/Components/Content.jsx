import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import { Route, Routes } from 'react-router-dom';

function Content(props) {
    return (
        <div className='content'>
           <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/contact' element={<Contact/>}/>
           </Routes>
        </div>
    );
}

export default Content;