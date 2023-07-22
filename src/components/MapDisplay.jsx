import React, { useMemo } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const MapDisplay = ({ address }) => {
  const position = useMemo(() => {
    if (address.location) return [address.location.lat, address.location.lng];

    return [51.505, -0.09];
  }, [address]);

  return (
    <div>
      <MapContainer center={position} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} />
      </MapContainer>
    </div>
  );
};

export default MapDisplay;
