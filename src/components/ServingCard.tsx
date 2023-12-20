import React from "react";
interface ServingCardProps {
  img: string;
  heading: string;
}
const ServingCard:React.FC <ServingCardProps> = ({img,heading}) => {
  return (
      <div className="mr-1 w-2/6">
        <div>
          <img
            src={img}
            alt="ServiceCardImg"
            className="h-36 w-full"
          />
        </div>
        <div className="bg-slate-200 h-24 pt-2">
          <div className="h-20 flex flex-col justify-center w-4/5 m-auto border border-s-blue-900 border-s-2">
            <h6 className="font-bold">{heading}</h6>
            <button className="text-blue-600 font-bold border rounded-full border-blue-900 p-2 w-32 m-auto">Learn More</button>
          </div>
        </div>
      </div>
  );
};
export default ServingCard;
