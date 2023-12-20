import React from "react";
import ChooseParkinSubSec from "./ChooseParkinSubSec";

const ChooseParkin = () => {
  const imgArr = [
    `${process.env.PUBLIC_URL}/assets/images/home.png`,
    `${process.env.PUBLIC_URL}/assets/images/home.png`,
    `${process.env.PUBLIC_URL}/assets/images/home.png`,
    `${process.env.PUBLIC_URL}/assets/images/home.png`,
  ]
  const headingArr = [
    "Stress Free Booking",
    "24 Hr Services",
    "Save Money & Time",
    "Best Parking Management"
  ]
  const textArr = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aperiam ab accusamus omnis cupiditate totam eum dolore labore, sed alias deleniti consequuntur? Adipisci magni nostrum quod eius placeat vero error!",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aperiam ab accusamus omnis cupiditate totam eum dolore labore, sed alias deleniti consequuntur? Adipisci magni nostrum quod eius placeat vero error!",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aperiam ab accusamus omnis cupiditate totam eum dolore labore, sed alias deleniti consequuntur? Adipisci magni nostrum quod eius placeat vero error!",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aperiam ab accusamus omnis cupiditate totam eum dolore labore, sed alias deleniti consequuntur? Adipisci magni nostrum quod eius placeat vero error!"
  ]
  return (
    <div className="bg-blue-500">
      <div className="w-5/6 m-auto py-8">
        <div className="flex flex-col items-start w-3/5">
          <h1 className="text-white font-bold text-4xl pb-4">
            Why Choose Parkin
          </h1>
          <p className="text-white text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            nisi! Obcaecati, doloremque sapiente. Commodi impedit dolore natus
            blanditiis! Quae omnis nulla esse ipsum temporibus explicabo id
            eligendi aut est dolorem?
          </p>
        </div>
        <div className="pt-8 flex flex-wrap justify-between w-4/5">
          {imgArr.map((img,index)=>(
          <ChooseParkinSubSec key={index} img={img} heading={headingArr[index]} text={textArr[index]}/>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ChooseParkin;
