
import './App.css';
import { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

const App = () => {
  const [address, setAddress] = useState([])

// const address = {
//   apiKey: process.env.PUBLIC_URL
// }
// address[ip, setIp] = useState()
// address[locationData, setLocationData] = useState()
// address[timezoneData, setTimezoneData] = useState()
// address[ispData, setIspData] = useState()

  const fetchData = () => {
    fetch("https://geo.ipify.org/api/v2/country?apiKey=at_7SeAmbKbP4axsH6NqfjiCVnMudlXw&ipAddress=8.8.8.8")
   .then(response => {
    return response.json()
   })

   .then(data => {
    setAddress(data)
   })

  }
  
  useEffect(() =>{
    fetchData()
  }, [])

  

  return (
        <div className="w-full h-full">
      <div
        className="w-screen h-[220px]"
        style={{
          backgroundImage: `url(/pattern.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
          <div className='flex flex-col items-center gap-10'>
          <p className="text-white text-xl pt-8">IP Address Tracker</p>
            <input className='w-96 bg-white p-3  rounded-l-lg text-sm text-cyan-700 ' type="text" placeholder='Search for any IP address or domain' required />
            <button className='absolute top-12 right-14 w-4 bg-black p-3 text-white hover:cursor-pointer' type='submit'>x</button>
            </div>

            
            {/* IP Address
            Location
            Timezone
            Isp */}
          </div>

          {/* California lat and long */}
          <MapContainer center={[6.524379, 3.379206]} zoom={12} >
          <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
                {/* {address.map(address => (
                <Marker key={address.id} position={[address.ip, address.location, address.timezone, address.isp]}
                /> */}
                ))}
          </MapContainer>
    </div>
  );
}

export default App


