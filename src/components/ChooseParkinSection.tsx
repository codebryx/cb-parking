import React from "react";
import ChooseParkin from "./ChooseParkin";

const ChooseParkinSection = () => {
  return (
    <div className="car-bg-img bg-cover bg-center h-screen relative flex items-end">
      <div className="bg-blue-500 w-3/5 h-3/5 m-auto mr-0 absolute right-0 top-16">
      <ChooseParkin />
      </div>
    </div>
  );
};
export default ChooseParkinSection;
