import styles from "./Homepage.module.css";
import AppNavs from "../components/AppNavs";

import React from 'react'
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <main className={styles.homepage}>
      <AppNavs/>
    <section>
      <h1>
        You travel the world.
        <br />
        WorldWise keeps track of your adventures.
      </h1>
      <h2>
        A world map that tracks your footsteps into every city you can think
        of. Never forget your wonderful experiences, and show your friends how
        you have wandered the world.
      </h2>
      <NavLink to={'/App'} className="cta">Starting Tracking Now</NavLink>
    </section>
  </main>
  )
}

export default Homepage
