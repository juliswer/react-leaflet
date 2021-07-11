import React from 'react';

import { MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = () => {

    const position = [51.505, -0.09];

    return (
        <MapContainer center={position} zoom={13} >

        </MapContainer>
    )
}

export default MapView