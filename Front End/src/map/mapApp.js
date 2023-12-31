import * as tt from '@tomtom-international/web-sdk-maps'
import { useEffect, useRef, useState } from 'react'
const MapApp = () =>{
    const mapElement = useRef()
    const [map, setMap] = useState({})

    useEffect(() => {
        let map = tt.map({
            key: process.env.REACT_APP_TOM_TOM_API_KEY,
            container: mapElement.current,
        
    })
    setMap(map)
}, [] )
}
export default MapApp;