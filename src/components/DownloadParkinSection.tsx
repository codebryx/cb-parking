import React, { useState,ChangeEvent } from "react";

const DownloadParkinSection = () => {
    const [mobNumber,setMobNumber]=useState("");
    const userMobNumber = (e:ChangeEvent<HTMLInputElement>) => {
        setMobNumber(e.target.value)
    }
    const imgArr = [
        `${process.env.PUBLIC_URL}/assets/images/google.png`,
        `${process.env.PUBLIC_URL}/assets/images/google.png`,
    ]
  return (
    <div className="flex h-60 justify-center items-center my-28">
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-4/5 m-auto">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/downloadCar.jpeg`}
            alt="downloadSectionImg"
            className="w-full"
          />
        </div>
      </div>
      <div className="w-1/2 text-left">
        <h1 className="font-bold text-3xl w-96 pb-4">Download The Parkin Parking App</h1>
        <span className="block pb-4 text-sm w-4/6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          fugiat, in beatae consequatur quod consequuntur necessitatibus
          repellendus sunt aspernatur natus blanditiis, eos iste inventore?
          Iusto, error? Doloremque deserunt explicabo excepturi?
        </span>
        <div className="relative pb-4">
          <input value={mobNumber} onChange={userMobNumber} className="border border-slate-400 p-2 w-4/6 rounded-full pl-3" placeholder="Enter your mobile number"/>
          <button className="bg-blue-600 text-white font-bold absolute rounded-full p-2 w-32 right-52 mr-1.5">Send Link</button>
        </div>
        <div className="flex">
            {imgArr.map((img)=>(
                <div className="w-20">
            <img
              src={img}
              alt="googleImg"
            />
          </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default DownloadParkinSection;
