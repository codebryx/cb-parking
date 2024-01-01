import React from 'react'
import NotificationAddress from './NotificationAddress';

const ParkingHeader = () => {
    const icons = [
        `${process.env.PUBLIC_URL}/assets/images/header2Loc.svg`,
        `${process.env.PUBLIC_URL}/assets/images/header2mail.svg`,
      ];
      const address = ["123 Megbee St, Sysney, Australia", "Supports@parkin.com"];
      const headerList = [
        "Home",
        "About",
        "Parking",
        "Prices",
        "Careers",
        "Contact Us",
      ];
  return (
    <div>
      <div className="flex items-center h-12">
        <div className=" w-1/2 flex justify-center bg-blue-900 h-12 items-center">
          <h6 className="text-sm font-bold text-white">
            Welcome to parkin online parking booking service
          </h6>
        </div>
        <div className="w-1/2 bg-blue-900 h-12">
          <div className="w-11/12 m-auto">
            <div className="flex items-center h-12">
              {icons.map((icon, index) => (
                <NotificationAddress
                  key={index}
                  icon={icon}
                  address={address[index]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-4/5 m-auto">
        <div className="w-1/5 flex">
          <div className="w-32">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
              alt="header2img"
            />
          </div>
        </div>
        <div className="w-4/5 flex items-center">
          <ul className="flex items-center">
            {headerList.map((item) => (
              <li className="w-28 cursor-pointer md:text-sm text-xs">{item}</li>
            ))}
          </ul>
          <div className="w-60">
            <button className="bg-blue-500 text-white md:w-28 w-24 h-6 rounded-3xl md:h-9 md:text-sm text-xs">
              Login Here
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ParkingHeader