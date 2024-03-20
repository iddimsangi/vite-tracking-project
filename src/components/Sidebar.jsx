import React from 'react'
import Logo from './Logo'
import Styles from './Sidebar.module.css'
import AppSideNav from './AppSideNav'
import { Outlet } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className={Styles.sidebar}>
        <Logo/>
        <AppSideNav/>
        <Outlet/>
        <footer className={Styles.footer}>
            <p className={Styles.copyright}>&copy;published and created by Iddimsangi</p>
        </footer>
    </div>
  )
}

export default Sidebar