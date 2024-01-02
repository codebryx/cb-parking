import React from "react";

const TrustedClients = () => {
  const trustedPartners = [
    `${process.env.PUBLIC_URL}/assets/images/partners.png`,
    `${process.env.PUBLIC_URL}/assets/images/partners.png`,
    `${process.env.PUBLIC_URL}/assets/images/partners.png`,
    `${process.env.PUBLIC_URL}/assets/images/partners.png`,
    `${process.env.PUBLIC_URL}/assets/images/partners.png`,
  ];
  return (
    <div>
      <div className="h-96 bg-blue-900 flex">
        <div className=" h-72 w-4/5 m-auto flex flex-col justify-end items-center">
          <span className="text-sm text-blue-600 block font-bold">
            Know About Our Partners
          </span>
          <h1 className="text-2xl font-bold text-white py-2">
            Our Trusted Clients & Patners
          </h1>
          <div className="flex">
            {trustedPartners.map((item) => (
              <div className="mr-1">
                <img src={item} alt="trustedPartners" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrustedClients;
