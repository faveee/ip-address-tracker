import "./App.css";
import { useState, useEffect, useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

const App = () => {
  const [address, setAddress] = useState([]);
  const [ipAddress, setIpAddress] = useState(""); //162.212.154.31

  // const address = {
  //   apiKey: process.env.PUBLIC_URL
  // }
  // address[ip, setIp] = useState()
  // address[locationData, setLocationData] = useState()
  // address[timezoneData, setTimezoneData] = useState()
  // address[ispData, setIspData] = useState()

  const fetchData = () => {
    // https://geo.ipify.org/api/v2/country,city?apiKey=at_7SeAmbKbP4axsH6NqfjiCVnMudlXw&ipAddress=8.8.8.8
    fetch(
      "https://geo.ipify.org/api/v2/country,city?apiKey=at_Hv7lYhpHjdlCBl3NRDxLmhlI0PLis&ipAddress=" +
        ipAddress
    )
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setAddress(data);
      });
  };

  const handleSearch = () => {
    fetchData(); //Fetch data for the new IP address when button is clicked
  };

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
    <div className="w-screen h-screen">
      <div
        className="w-screen h-[220px]"
        style={{
          backgroundImage: `url(/pattern.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center">
          <p className="text-white text-xl pt-8">IP Address Tracker</p>
        </div>
        <div className="flex py-12 justify-center">
          <input
            type="search"
            className="w-96 p-2.5 z-20 text-sm text-gray-900 bg-gray-50 rounded-l-lg border dark:bg-gray-700 dark:border-gray-600 dark:placeholder-pink-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search for any IP address or domain"
            required
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
          />
          <button
            type="submit"
            className="p-2 text-sm bg-gray-900 rounded-r-lg border border-gray-900 hover:bg-red-500 focus:ring-4 focus:outline-none"
            onClick={handleSearch}
          >
            {" "}
            <svg
              fill="#ffffff"
              width="19px"
              height="24px"
              viewBox="-15.36 -15.36 542.72 542.72"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              stroke-width="0.00512"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
              </g>
            </svg>
          </button>
        </div>

        <div className="py-4">
          <p>IP Address: {address.ip}</p>
          <p>Timezone: {address.location ? address.location.timezone : ""}</p>
          <p>
            Location:{" "}
            {address.location
              ? `${address.location.city}, ${address.location.region}, ${address.location.country}`
              : ""}
          </p>
          <p>ISP: {address.isp}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
// 37.38605
// -122.08385

        {
          /* IP Address
            Location
            Timezone
            Isp */
        }