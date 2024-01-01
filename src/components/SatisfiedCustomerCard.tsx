import React from "react";
interface SatisfiedCustomerCardProps {
  text: string;
  img: string;
  name: string;
  city: string;
  rating: string[];
}
const SatisfiedCustomerCard: React.FC<SatisfiedCustomerCardProps> = ({
  text,
  img,
  name,
  city,
  rating,
}) => {
  return (
    <div className="w-1/3 p-6 border boder-slate-200 mr-4">
      <p className="text-left text-sm pb-4">{text}</p>
      <div className="flex items-center">
        <div className="w-20 flex justify-center">
          <img src={img} alt="custImg" />
        </div>
        <div>
          <h6 className="font-bold">{name}</h6>
          <h6 className="text-blue-700 font-bold text-left">{city}</h6>
          <div className="flex">
            {rating.map((item) => (
              <div className="w-4 mr-1">
                <img src={item} alt="ratings" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SatisfiedCustomerCard;
