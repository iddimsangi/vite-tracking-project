import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import Styles from '../components/PageNav.module.css'

const AppNavs = () => {
  return (
   <nav className={Styles.nav}>
    <Logo/>
    <ul>
      
        <li>
            <NavLink to={'/Pricing'}>Pricing</NavLink>
        </li>
        <li>
            <NavLink to={'/Product'}>Product</NavLink>
        </li>
        <li>
            <NavLink to={'/Login'} className={Styles.ctaLink }>Login</NavLink>
        </li>
    </ul>
   </nav>
  )
}

export default AppNavs