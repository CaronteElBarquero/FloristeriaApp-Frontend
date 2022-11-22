import  { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import data from "../../../assets/data.json";
import Markers from "./VenueMarkers";


import "leaflet/dist/leaflet.css";

const MapView = (props) => {
  
  const [state, setState] = useState({
    currentLocation: { lat: 14.553283735222315, lng: -86.6661085176019 },
    zoom: 23,
    data,
  });


  return (
    <MapContainer center={state.currentLocation} zoom={state.zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers venues={state.data.venues} />
    </MapContainer>
  );
};

export default MapView;
