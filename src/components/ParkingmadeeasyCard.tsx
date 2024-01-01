import React from "react";

interface ParkingmadeeasyCardProps {
  cardImg: string;
  cardHeading: string;
  cardText: string;
}
const ParkingmadeeasyCard: React.FC<ParkingmadeeasyCardProps> = ({cardImg,cardHeading,cardText}) => {
  return (
    <div>
      <div className="flex items-center flex-col mr-2">
        <div className="h-32 relative flex justify-center">
        <div className="w-60 h-32 absolute bottom-3">
            <img
              src={cardImg}
              alt="cardImg"
              className="w-full bg-cover bg-center"
            />
          </div>
        </div>
          <div className="text-left w-72 p-3 border border-slate-300 h-48 flex flex-col justify-end">
            <h5 className="font-bold text-xs">{cardHeading}</h5>
            <span className="text-xs h-28 flex items-center">
              {cardText}
            </span>
            <h6 className="font-bold text-xs text-sky-700">Read More</h6>
          </div>
      </div>
    </div>
  );
};
export default ParkingmadeeasyCard;
