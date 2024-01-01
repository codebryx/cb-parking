import React from "react";
interface BookingParkingMadeEasyCardProps {
  icon: string,
  heading: string,
}
const BookingParkingMadeEasyCard: React.FC<BookingParkingMadeEasyCardProps> = ({
  icon,
  heading,
}) => {
  return (
      <div className="w-1/4 bg-white rounded flex flex-col justify-center items-center ml-4 px-6">
        <div className="w-8 mb-1">
          <img
            src={icon}
            alt="home"
          />
        </div>
        <h6 className="font-bold text-sm">{heading}</h6>
      </div>
  );
};
export default BookingParkingMadeEasyCard;
