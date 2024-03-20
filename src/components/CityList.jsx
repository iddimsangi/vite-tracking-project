import React from 'react'
import styles from './CityList.module.css'
import CityItem from './CityItem'
import Spinner from './Spinner'
const CityList = ({cities, isLoading}) => {
  return (
   <>
  {isLoading ? <Spinner/> :  <ul className={styles.cityList}>
      {cities.map((city) => <CityItem city={city} key={city.id} />)}
    </ul>}
   </>
  )
}

export default CityList