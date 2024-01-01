
import React from "react";
interface BookingAirportParkingProps {
  heading: string,
  text:string,
  parkingBooking: string[];
  buttonText: string;
}
const BookingAirportParking:React.FC <BookingAirportParkingProps> = ({heading,text,parkingBooking,buttonText}) => {
  return (
          <div className="w-1/2 p-6 bg-white text-left h-2/3">
            <h1 className="text-3xl pb-2">{heading}</h1>
            <span className="text-sm pb-4 block text-slate-500">
              {text}
            </span>
            <div className="mb-2">
            {parkingBooking.map((item)=>(
                <div key={item}>
              <div className="flex justify-between pb-1">
                <h6 className="text-sm">{item}</h6>
                <button className="font-bold text-sm text-blue-600">
                  Book Now
                </button>
              </div>
              <hr className="my-1 border-dotted border-gray-500" />
            </div>
            ))}
            </div>
            <button className="bg-blue-600 text-white text-sm py-2 px-8 rounded-full">View Al {buttonText}</button>
          </div>
  );
};
export default BookingAirportParking;