 import React, { useEffect } from 'react';
 import {GoogleMap, LoadScript} from '@react-google-maps/api'


 
 const Map = () => {
   const containerStyle = {
     width: '400px',
     height: '400px'
   };
 
   const center = {
     lat: 51.5074, 
     lng: -0.1278 
   };
 
   return (
     <LoadScript googleMapsApiKey="AIzaSyAgmr5dRTvUA9AizSfjGLRQQk0yNmO185M">
       <GoogleMap
         mapContainerStyle={containerStyle}
         center={center}
         zoom={10}
       >
       </GoogleMap>
     </LoadScript>
   );
 };
 
 export default Map;
 