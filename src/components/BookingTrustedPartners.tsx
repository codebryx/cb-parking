import React from "react";

const BookingTrustedPartners = () => {
  const partners = [
    `${process.env.PUBLIC_URL}/assets/images/partners.png`,
    `${process.env.PUBLIC_URL}/assets/images/partners.png`,
    `${process.env.PUBLIC_URL}/assets/images/partners.png`,
    `${process.env.PUBLIC_URL}/assets/images/partners.png`,
    `${process.env.PUBLIC_URL}/assets/images/partners.png`,
  ];
  return (
    <div className="bg-slate-100 relative">
       <div className="w-1/2 bg-blue-500 h-52 absolute bottom-60 right-0 text-left p-8">
        <h1 className="text-white text-2xl w-64 font-bold">Feel Free To Contact For Our Service</h1>
        <h6 className="text-xl text-slate-800 font-bold py-2">+08-236 236 7474</h6>
        <button className="text-white bg-blue-900 rounded-full py-2 px-6 text-sm">Get A Quote</button>
       </div>
      <div className="w-4/5 m-auto py-14 text-left">
        <h1 className="pb-10 font-bold text-4xl w-52">Our Trusted Partners</h1>
        <div className="flex justify-start items-center">
          <div className="w-60 flex justify-start">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/partners.png`}
              alt="parterns"
              className="w-full"
            />
          </div>
          <div className="w-60 flex justify-start">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/partners.png`}
              alt="parterns"
            />
          </div>
          <div className="w-60 flex justify-start">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/partners.png`}
              alt="parterns"
            />
          </div>
          <div className="w-60 flex justify-start">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/partners.png`}
              alt="parterns"
            />
          </div>
          <div className="w-60 flex justify-start">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/partners.png`}
              alt="parterns"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookingTrustedPartners;
