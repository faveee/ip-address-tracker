import "./App.css";
import { useState, useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

const App = () => {
  const [address, setAddress] = useState([]);
  const [ipAddress, setIpAddress] = useState(""); //162.212.154.31
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = () => {
    fetch(
      "https://geo.ipify.org/api/v2/country,city?apiKey=at_Hv7lYhpHjdlCBl3NRDxLmhlI0PLis&ipAddress=" +
        ipAddress
    )
      .then((response) => {
        if (!response.ok) {
          throw Error("Invalid IP Address");
        }
        return response.json();
      })

      .then((data) => {
        setAddress(data);
        setErrorMessage("");
      })

      .catch((error) => {
        setAddress([]);
        setErrorMessage("Error! " + error.message);
        console.error(error);
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
      {errorMessage && (
        <div className="text-red-600 text-center p-2 bg-black">
          {errorMessage}
        </div>
      )}
      <div
        className="w-screen h-[220px] relative"
        style={{
          backgroundImage: `url(/pattern.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center">
          <p className="font-display text-white text-xl pt-8">
            IP Address Tracker
          </p>
        </div>
        <div className=" flex justify-center py-12">
          <input
            type="search"
            className="w-64 p-2.5 z-20 text-sm text-gray-900 bg-gray-50 rounded-l-lg sm:w-96"
            placeholder="Search for any IP address or domain"
            required
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
          />
          <button
            type="submit"
            className="p-2 text-sm bg-gray-900 rounded-r-lg border-gray-900 hover:bg-red-500"
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
              strokeWidth="0.00512"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
              </g>
            </svg>
          </button>
        </div>

        <div className="absolute inset-x-5 top-[170px] z-50">
          <div className="flex flex-row justify-evenly divide-x divide-trueGray-50/75 bg-white shadow-slate-50 text-slate-500 font-display p-10 rounded-lg ">
            {/* flex flex-col justify-around gap-4 text-center text-3xl
            font-extrabold */}
            <h2>IP Address</h2>
            <p className="text-black">{address.ip}</p>
            <h2>Location</h2>
            <p className="text-black">
              {" "}
              {address.location
                ? `${address.location.city}, ${address.location.region}, ${address.location.country}`
                : ""}
            </p>
            <h2>Timezone</h2>
            <p className="text-black">
              {address.location ? address.location.timezone : ""}
            </p>
            <h2>ISP</h2>
            <p className="text-black font-bold">{address.isp}</p>
          </div>
        </div>
        <div className="">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default App;

{
  /* IP Address
            Location
            Timezone
            Isp */
}
