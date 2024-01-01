import React from 'react'
interface ParkingEasyCardProp{
    icon:string,
    heading:string,
    text:string
}
const ParkingEasyCard:React.FC <ParkingEasyCardProp> = ({icon,heading,text}) => {
  return (
    <div className="bg-blue-500 border-s-4 border-blue-900  px-4 py-4 w-1/2 flex items-center mb-2">
            <div className="w-10 mr-4">
              <img
                src={icon}
                alt="carimg"
              />
            </div>
            <div>
              <h6 className="font-bold text-white text-sm">
                {heading}
              </h6>
              <span className="text-slate-700 text-sm block">
                {text}
              </span>
            </div>
          </div>
  )
}
export default ParkingEasyCard