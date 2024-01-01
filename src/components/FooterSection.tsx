import React from "react";

const FooterSection = () => {
  const socialMediaIcons = [
    `${process.env.PUBLIC_URL}/assets/images/fb.svg`,
    `${process.env.PUBLIC_URL}/assets/images/twitter.svg`,
    `${process.env.PUBLIC_URL}/assets/images/google.svg`,
    `${process.env.PUBLIC_URL}/assets/images/linkedin.svg`,
  ];
  const footerList = [
    "Home",
    "About",
    "Services",
    "Privacy Policy",
    "Terms&Conditions",
  ];
  return (
    <div className="flex h-60 bg-black pt-10 flex-col">
      <div className="flex w-11/12 m-auto items-start pb-6">
        <div className="w-1/3 flex justify-center flex-col text-left">
          <div className="w-4/5 m-auto">
            <h1 className="font-bold text-xl text-white h-16">
              Do You Have Any Queries Regarding Our Pricing?
            </h1>
            <button className="bg-blue-600 p-2 w-36 text-sm text-white rounded font-bold my-4">
              SEND INQUIRY
            </button>
            <span className="block text-slate-400 text-sm w-4/5">
              Our team will respond to your inquiries within 48 hours
            </span>
          </div>
        </div>
        <div className="w-1/3 flex justify-center flex-col text-left">
          <div className="w-4/5 m-auto">
            <h1 className="font-bold text-xl text-white h-16">
              Do You Have Any Queries And Want To Contact Us?
            </h1>
            <h6 className="text-blue-600 text-md font-bold">
              Feel Free To Call Us
            </h6>
            <div className="flex items-center py-4">
              <div className="w-6">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/mob.svg`}
                  alt="mobImg"
                  className="fill-blue-600"
                />
              </div>
              <span className="block text-blue-600 text-sm font-bold">
                +06-522 522 1122
              </span>
            </div>
            <span className="block text-slate-400 text-sm w-4/5">
              123 Mcgbee St, Sydney, S 00002, Australia
            </span>
          </div>
        </div>
        <div className="w-1/3 flex justify-center flex-col text-left">
          <div className="w-4/5 m-auto">
            <h1 className="font-bold text-xl text-white h-16">
              Parkin Working Hours
            </h1>
            <span className="block text-slate-400 text-sm">
              Monday - Friday
            </span>
            <span className="block text-slate-400 text-sm">
              09:00 AM - 10:30 PM
            </span>
            <div className="py-3">
              <span className="block text-slate-400 text-sm">
                Saturday - Sunday
              </span>
              <span className="block text-slate-400 text-sm">
                09:00 AM - 7:00 PM
              </span>
            </div>
            <div className="flex">
              {socialMediaIcons.map((icon) => (
                <div className="w-4 p-4 bg-blue-600 rounded-full mr-1">
                  <img src={icon} alt="fb" className="fill-white" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-slate-400" />
      <div className="flex w-11/12 m-auto">
        <div className="w-6/12 text-left">
          <h6 className="text-white ml-9 text-sm font-bold text-slate-400">
            @2020 All rights reserved.
          </h6>
        </div>
        <div>
          <ul className="flex">
            {footerList.map((list) => (
              <li className="text-xs w-24 text-slate-400">{list}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FooterSection;
