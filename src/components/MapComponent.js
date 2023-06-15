import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({filterRestaurants}) => {
  const containerStyle = {
    width: '400px',
    height: '400px'
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
      <div>
        <form onSubmit={handleLocationSubmit}>
          <input type="text" name="location" placeholder="Enter a location" />
          <button type="submit">Submit</button>
        </form>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={markerPosition || defaultCenter}
          zoom={10}
        >
          {markerPosition && <Marker position={markerPosition} />}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default Map;
