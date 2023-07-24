import React from "react";
import { useMemo } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const MapDisplay = ({ address }) => {
  const position = useMemo(() => {
    if (address.location) return [address.location.lat, address.location.lng];

    return [51.505, -0.09];
  }, [address]);

  const Map = useMemo(() => {
    return () => (
      <MapContainer center={position} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} />
      </MapContainer>
    );
  }, [position]);

  return (
    <div>
      <Map />
    </div>
  );
};

export default MapDisplay;
