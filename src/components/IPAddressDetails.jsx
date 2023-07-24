import React from "react";

const IPAddressDetails = ({ address }) => {
  return (
    <div className="details absolute left-0 right-0 mx-auto top-[135px] md:-bottom-16 md:divide-x border-2 sm:space-x-3 bg-white rounded-2xl flex flex-col md:flex-row justify-between items-center w-3/4 h-74 md:h-32 px-8 z-[9999] py-4 md:py-0 text-center">
      <div>
        <span className="text-gray-400 text-xs font-bold font-display uppercase">
          IP Address
        </span>
        <p className="text-gray-900 text-lg font-bold font-display">
          {address.ip}
        </p>
      </div>
      <div>
        <span className="text-gray-400 text-xs font-bold font-display uppercase">
          Location
        </span>
        <p className="text-gray-900 text-lg font-bold">
          {address.location
            ? `${address.location.city}, ${address.location.region}, ${address.location.country}`
            : ""}
        </p>
      </div>
      <div>
        <span className="text-gray-400 text-xs font-bold font-display uppercase">
          Timezone
        </span>
        <p className="text-gray-900 text-lg font-bold">
          {address.location ? address.location.timezone : ""}
        </p>
      </div>
      <div>
        <span className="text-gray-400 text-xs font-bold font-display uppercase">
          ISP
        </span>
        <p className="text-gray-900 text-lg font-bold">{address.isp}</p>
      </div>
    </div>
  );
};

export default IPAddressDetails;
