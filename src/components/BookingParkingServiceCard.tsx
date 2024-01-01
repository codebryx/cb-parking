import React from "react";
interface BookingParkingServiceCardProps {
  icon: string;
  heading: string;
  text: string;
}
const BookingParkingServiceCard:React.FC <BookingParkingServiceCardProps> = ({icon,heading,text}) => {
  return (
    <div className="flex w-1/3 group relative">
      <div className="bg-slate-100 text-left p-6 mb-4 h-72 group-hover:hidden">
        <div className="w-12 mb-6">
          <img
            src={icon}
            alt="carImg"
          />
        </div>
        <h6 className="text-lg font-bold mb-6">{heading}</h6>
        <span className="text-slate-700 w-72 block">
          {text}
        </span>
      </div>
      <div className="hidden group-hover:flex flex-col justify-center items-start absolute h-72 top-0 left-0 right-0 bottom-0 bg-blue-500 car-bg-img bg-cover bg-center text-white p-6">
        <h2 className="text-2xl font-bold mb-4 text-white w-56 text-left">Explore Our Parking Services</h2>
        <button className="bg-white text-blue-600 px-8 py-2">
          Search Space
        </button>
      </div>
    </div>
  );
};
export default BookingParkingServiceCard;
