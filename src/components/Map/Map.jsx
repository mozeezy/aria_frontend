import { useState, useEffect, useRef } from "react";
import './Map.css'
import * as tt from '@tomtom-international/web-sdk-maps'
import "@tomtom-international/web-sdk-maps/dist/maps.css"

const Maps = () => {
  const mapElement = useRef()
  const [map, setMap] = useState({});
  const [longitude, setLongitude] = useState(-79.347015);
  const [latitude, setLatitude] = useState(43.651070);

  useEffect(() => {
    let map = tt.map({
      key: process.env.REACT_APP_TOM_TOM_API_KEY,
      container: mapElement.current,
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,
      },
      center: [longitude, latitude],
      zoom: 14
  })

  setMap(map)

  const addMarker = () => {
    const element = document.createElement('div')
    element.className = 'marker'
    const marker = new tt.Marker({
      draggable: true,
      element: element,
    })
    .setLngLat([longitude, latitude])
    .addTo(map)
    marker.on('dragend', () => {
      const lngLat = marker.getLngLat()
      setLongitude(lngLat.lng)
      setLatitude(lngLat.lat)
    })
  }
  addMarker()
  return () => map.remove()
  }, [])

  return (
 
    <>
    <div ref={mapElement} className="map">
      <div className="search-bar">
        <h1>Where to go?</h1>
        <input
        type="text" 
        id="longitude" 
        className="longitude" 
        placeholder="Enter Longitude" 
        onChange={((e) => {setLongitude(e.target.value)})} />
        <input
        type="text" 
        id="latitude" 
        className="latitude" 
        placeholder="Enter Latitude" 
        onChange={((e) => {setLatitude(e.target.value)})} />
      </div>
    </div>
    </>
   
  )
}

export default Maps;

