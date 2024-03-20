import React,{useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'
import AppLayout from './pages/AppLayout'
import CityList from './components/CityList'
import {CityObjectT} from './pages/PropsTypesT'
import CountryList from './components/CountryList'

const URL_BASE:string = 'http://localhost:9800/';

const App:React.FC = () => {
const[cities, setCities] = useState<CityObjectT[]>([]);
const[isLoading, setIsLoading] = useState<boolean>(false);
useEffect(() => {
const fetchCities = async() =>{
  setIsLoading(true);
  await new Promise(resolve => setTimeout(resolve, 1000));
  try {
    const res = await fetch(`${URL_BASE}cities`);
    const data = await res.json()
    setCities(data);  
  } catch (error) {
    console.log("error:",error);
    
  }finally{
    setIsLoading(false)
  }
}
fetchCities()
},[])
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Pricing' element={<Pricing/>}/>
        <Route path='Product' element={<Product/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='App' element={<AppLayout/>}>
         <Route path='cities' element={<CityList cities={cities} isLoading={isLoading}/>}></Route>
            <Route path='countrylist' element={<CountryList/>}></Route>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
</BrowserRouter>
  )
}

export default App
