import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({filterRestaurants}) => {
  const containerStyle = {
    width: '1800px',
    height: '500px'
  };

  const defaultCenter = {
    lat: 51.5074,
    lng: -0.1278
  };

  const [markerPosition, setMarkerPosition] = useState(null);

  const handleLocationSubmit = (event) => {
    event.preventDefault();
    const { location } = event.target.elements;
    const enteredLocation = location.value;

    filterRestaurants(enteredLocation);

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: enteredLocation }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const { lat, lng } = results[0].geometry.location;
        setMarkerPosition({ lat: lat(), lng: lng() });
      } else {
        console.error('Error in fetching location', status);
      }
    });
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAgmr5dRTvUA9AizSfjGLRQQk0yNmO185M">
      <div >
        <form id="customer-location-form" onSubmit={handleLocationSubmit}>
          <input id="location-input" type="text" name="location" placeholder="Enter your current location" />
          <button id="enter-location-input-button"type="submit">Enter</button>
        </form>

        <div id="map">
        <GoogleMap 
          mapContainerStyle={containerStyle}
          center={markerPosition || defaultCenter}
          zoom={10}
        >
          {markerPosition && <Marker position={markerPosition} />}
        </GoogleMap>
      </div>
      </div>
    </LoadScript>

  );
};

export default Map;
