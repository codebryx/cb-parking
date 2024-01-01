import React from "react";
interface ParkingREntCardProp {
  img: string;
  imgNo:string,
  heading: string;
  text: string;
}
const ParkingREntCard:React.FC<ParkingREntCardProp> = ({img,imgNo,heading,text}) => {
  return (
    <div className="w-1/3">
      <div className="flex flex-col justify-center mr-2 items-center w-full">
        <div className="relative">
        <div className="w-24 h-24 rounded-full overflow-hidden">
            <img
              src={img}
              alt="hotelParkingImg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-white font-bold h-8 w-8 text-sm flex items-center justify-center bg-blue-500 rounded-full absolute bottom-20 right-8">{imgNo}</div>
        </div>
        <div className="flex flex-col justify-center">
          <h6 className="font-bold text-xs py-4">
            {heading}
          </h6>
          <div className="flex justify-between">
            <h6 className="text-sm w-56">
              {text}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ParkingREntCard;
