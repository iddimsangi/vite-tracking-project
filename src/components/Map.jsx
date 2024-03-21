import React from 'react'
import styles from './Map.module.css'
import { useSearchParams } from 'react-router-dom'

const Map = () => {
const[searchParams, setSearchParams] = useSearchParams();
const lat = searchParams.get('lat')
const lng = searchParams.get('lng')
  return (
    <div className={styles.mapContainer}>Map Pos : lat={lat} lng={lng}
        <button onClick={() => setSearchParams({
            lat:324242424, lng:42561788181
        })}>Click</button>
    </div>
  )
}

export default Map