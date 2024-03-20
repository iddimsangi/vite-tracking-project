import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'
import AppLayout from './pages/AppLayout'
const App:React.FC = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Pricing' element={<Pricing/>}/>
        <Route path='Product' element={<Product/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='App' element={<AppLayout/>}/>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
</BrowserRouter>
  )
}

export default App
