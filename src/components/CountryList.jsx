import React from 'react'
import styles from './CountryList.module.css'
import CountryItem from './CountryItem'
const CountryList = () => {
  return (
    <ul className={styles.countryList}>
        <CountryItem/>
    </ul>
  )
}

export default CountryList