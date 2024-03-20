import React from 'react'
import { NavLink } from 'react-router-dom'
import Styles from './AppSideNav.module.css'

const AppSideNav = () => {
  return (
    <nav className={Styles.nav}>
   <ul>
        <li>
        <NavLink to={"cities"}>Cities</NavLink>
        </li>
       <li>
       <NavLink to={"countrylist"}>Countries</NavLink>
       </li>
    </ul>
    </nav>
 
  )
}

export default AppSideNav