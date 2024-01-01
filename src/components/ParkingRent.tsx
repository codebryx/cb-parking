import React from 'react'
import ParkingTypesCard from './ParkingTypesCard'
import ParkingREntCard from './ParkingREntCard';

const ParkingRent = () => {
    const img = [
        `${process.env.PUBLIC_URL}/assets/images/hotelParking.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/hotelParking.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/hotelParking.jpg`,
      ];
      const imgNo=["1","2","3"]
      const heading = ["Create Your Listing", "Drivers Book Your Space", "Start Earning Now"];
      const text = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ];
  return (
    <div>
      <div className="h-48 flex flex-col justify-end items-center">
        <h6 className="text-blue-500 text-sm font-bold">Rent Out Your Space For Parking</h6>
        <h1 className="text-3xl font-bold pb-12">How To Rent Your Space</h1>
      </div>
      <div className="w-4/5 m-auto">
        <div className="flex justify-center items-center">
          {img.map((img, index) => (
            <ParkingREntCard key={index} img={img} heading={heading[index]} text={text[index]} imgNo={imgNo[index]}/>
          ))}
        </div>
      </div>
      <div className="h-24"></div>
    </div>
  )
}
export default ParkingRent