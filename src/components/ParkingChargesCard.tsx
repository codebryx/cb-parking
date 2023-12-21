import React from "react";
interface ParkingChargesCardProps {
  heading: string;
  list: string;
  price: string;
}
const ParkingChargesCard:React.FC<ParkingChargesCardProps> = ({heading,list,price}) => {
  return (
    <div className="bg-white h-72 w-64 relative mr-2">
      <div className="bg-blue-600 border h-10 text-white p-4 w-58 top-10 rounded-l-full  right-0 absolute flex items-center">
        <h6 className="font-bold text-sm">{heading}</h6>
      </div>
      <div className="bg-white h-96 flex justify-center items-center">
        <div className="h-64 flex flex-col justify-end w-4/5 m-auto text-left">
          <ul className="pb-2">
            <li className="text-xs pb-0.5">{list}</li>
          </ul>
          <span className="font-bold text-sm">Price</span>
          <h6 className="font-bold text-blue-600 text-2xl pb-4">${price}</h6>
          <button className="font-bold text-white p-2 bg-blue-600 w-24 text-xs">Book Now</button>
        </div>
      </div>
    </div>
  );
};
export default ParkingChargesCard;
