import React from 'react'
import BookingParkingUpdatesCard from './BookingParkingUpdatesCard'
import ParkingTypesCard from './ParkingTypesCard';

const ParkingTypes = () => {
    const bookingUpdatesImg = [
        `${process.env.PUBLIC_URL}/assets/images/hotelParking.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/hotelParking.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/hotelParking.jpg`,
      ];
      const heading = ["Self Parking", "Valet Parking", "Garage Parking"];
      const subHeading = [
        "Secure Parking",
        "Secure Parking",
        "Secure Parking",
      ];
  return (
    <div>
      <div className="h-96 flex flex-col justify-end items-center">
        <h6 className="text-blue-500 text-sm font-bold">Types Of Parking</h6>
        <h1 className="text-3xl font-bold pb-8">Our Parking Services</h1>
      </div>
      <div className="w-4/5 m-auto">
        <div className="flex">
          {bookingUpdatesImg.map((img, index) => (
            <ParkingTypesCard key={index} img={img} heading={heading[index]} subHeading={subHeading[index]}/>
          ))}
        </div>
      </div>
      <div className="h-44"></div>
    </div>
  )
}
export default ParkingTypes