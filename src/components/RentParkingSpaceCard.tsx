import React from "react";
interface RentParkingSpaceSecProps{
  img:string,
  heading:string,
  text:string
}
const RentParkingSpaceCard:React.FC <RentParkingSpaceSecProps> = ({img,heading,text}) => {
  return (
    <div>
      <div className="flex items-center">
          <div className="w-10 mr-8">
            <img
              src={img}
              alt="carImg"
            />
          </div>
        <div>
          <h6 className="font-bold text-sm text-white pb-1">
            {heading}
          </h6>
          <span className="text-xs text-white block w-72">
            {text}
          </span>
        </div>
      </div>
      <hr className="border my-4" />
    </div>
  );
};
export default RentParkingSpaceCard;
