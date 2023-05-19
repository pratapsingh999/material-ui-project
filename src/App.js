import React from 'react'
// import Sidenavbar from './sidenavbar'
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/settings';
import Analytics from './pages/Analytics';
import Users from './pages/Users'
import Products from './pages/Products';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Sidenavbar/> */}
      <Route path='/' exact element={<Home/>}/>
      <Route path='/about' exact element={<About/>}/>
      <Route path='/analytics' exact element={<Analytics/>}/>
      <Route path='/users' exact element={<Users/>}/>
      <Route path='/settings' exact element={<Settings/>}/>
      <Route path='/products' exact element={<Products/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App