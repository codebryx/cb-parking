import React from "react";

const BookingFooter = () => {
  const socialMediaIcons = [
    `${process.env.PUBLIC_URL}/assets/images/fb.svg`,
    `${process.env.PUBLIC_URL}/assets/images/twitter.svg`,
    `${process.env.PUBLIC_URL}/assets/images/google.svg`,
    `${process.env.PUBLIC_URL}/assets/images/linkedin.svg`,
  ];
  const servicesList = [
    "Self Parking Lots",
    "Valet Parking",
    "Garage Parking",
    "Airport Parking",
    "Overnight Parking",
    "Event Parking",
    "Monthly Parking",
  ];
  return (
    // <div className="flex h-60 bg-black pt-10 flex-col">
    //   <div className="flex w-11/12 m-auto items-start pb-6">
    //     <div className="w-1/3 flex justify-center flex-col text-left">
    //       <div className="w-4/5 m-auto">
    //         <h1 className="font-bold text-xl text-white h-16">
    //           Do You Have Any Queries Regarding Our Pricing?
    //         </h1>
    //         <button className="bg-blue-600 p-2 w-36 text-sm text-white rounded font-bold my-4">
    //           SEND INQUIRY
    //         </button>
    //         <span className="block text-slate-400 text-sm w-4/5">
    //           Our team will respond to your inquiries within 48 hours
    //         </span>
    //       </div>
    //     </div>
    //     <div className="w-1/3 flex justify-center flex-col text-left">
    //       <div className="w-4/5 m-auto">
    //         <h1 className="font-bold text-xl text-white h-16">
    //           Do You Have Any Queries And Want To Contact Us?
    //         </h1>
    //         <h6 className="text-blue-600 text-md font-bold">
    //           Feel Free To Call Us
    //         </h6>
    //         <div className="flex items-center py-4">
    //           <div className="w-6">
    //             <img
    //               src={`${process.env.PUBLIC_URL}/assets/images/mob.svg`}
    //               alt="mobImg"
    //               className="fill-blue-600"
    //             />
    //           </div>
    //           <span className="block text-blue-600 text-sm font-bold">
    //             +06-522 522 1122
    //           </span>
    //         </div>
    //         <span className="block text-slate-400 text-sm w-4/5">
    //           123 Mcgbee St, Sydney, S 00002, Australia
    //         </span>
    //       </div>
    //     </div>
    //     <div className="w-1/3 flex justify-center flex-col text-left">
    //       <div className="w-4/5 m-auto">
    //         <h1 className="font-bold text-xl text-white h-16">
    //           Parkin Working Hours
    //         </h1>
    //         <span className="block text-slate-400 text-sm">
    //           Monday - Friday
    //         </span>
    //         <span className="block text-slate-400 text-sm">
    //           09:00 AM - 10:30 PM
    //         </span>
    //         <div className="py-3">
    //           <span className="block text-slate-400 text-sm">
    //             Saturday - Sunday
    //           </span>
    //           <span className="block text-slate-400 text-sm">
    //             09:00 AM - 7:00 PM
    //           </span>
    //         </div>
    //         <div className="flex">
    //           {socialMediaIcons.map((icon) => (
    //             <div className="w-4 p-4 bg-blue-600 rounded-full mr-1">
    //               <img src={icon} alt="fb" className="fill-white" />
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <hr className="border border-slate-400" />
    //   <div className="flex w-11/12 m-auto">
    //     <div className="w-6/12 text-left">
    //       <h6 className="text-white ml-9 text-sm font-bold text-slate-400">
    //         @2020 All rights reserved.
    //       </h6>
    //     </div>
    //     <div>
    //       <ul className="flex">
    //         {footerList.map((list) => (
    //           <li className="text-xs w-24 text-slate-400">{list}</li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="bg-blue-900">
        <div className="w-4/5 m-auto py-12 flex justify-center">
          <div className="w-1/4 text-left mx-6">
            <div className="w-20">
              <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} />
            </div>
            <span className="text-sm text-white w-72 py-3 block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              expedita quia rerum, harum labore similique
            </span>
            <h6 className="font-bold text-white text-md border-s-2 border-blue-500 pl-4 my-2">
              Working Days
            </h6>
            <div className="flex font-bold text-sm pb-1 text-white justify-between">
              <h6>Mon - Fri</h6>
              <h6>8:00 AM - 11:00 Pm</h6>
            </div>
            <div className="flex font-bold text-sm pb-1 text-white justify-between">
              <h6>Sat - Sun</h6>
              <h6>8:00 AM - 05:00 Pm</h6>
            </div>
          </div>
          <div className="w-1/4 text-left mx-6">
            <h6 className="font-bold text-white text-md border-s-2 border-blue-500 pl-4 mb-7">
              Our Services
            </h6>
            <div className="pl-4">
              <ul className="list-disc">
                {servicesList.map((item) => (
                  <li className="font-bold text-white text-sm py-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-1/4 text-left mx-6">
            <h6 className="font-bold text-white text-md border-s-2 border-blue-500 pl-4 mb-7">
              Get Free Estimate
            </h6>
            <h6 className="font-bold text-white text-xl my-2">
              +06-125-125-6633
            </h6>
            <h6 className="font-bold text-white text-xl my-2">
              +06-125-125-6633
            </h6>
            <div className="py-2">
              <button className="text-white font-bold text-sm py-2 px-6 border-2">
                Get A Quotation
              </button>
            </div>
          </div>
          <div className="w-1/4 text-left mx-6">
            <h6 className="font-bold text-white text-md border-s-2 border-blue-500 pl-4 mb-7">
              Get In Touch
            </h6>
            <div className="flex pb-2">
              <div className="w-6 mr-2">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/location.svg`}
                  alt="location"
                />
              </div>
              <span className="block text-xs text-white w-50">
                B24 Bel Meadow Drive,California, USA
              </span>
            </div>
            <div className="flex pb-2">
              <div className="w-6 mr-2">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/location.svg`}
                  alt="location"
                />
              </div>
              <span className="block text-xs text-white w-50">
                B24 Bel Meadow Drive,California, USA
              </span>
            </div>
            <h6 className="font-bold text-white text-md border-s-2 border-blue-500 pl-4 my-5">
              Contact With Us
            </h6>
            <div className="flex">
              {socialMediaIcons.map((item) => (
                <div className="w-12 border-2 py-3 px-4 rounded border-white mr-2">
                  <img src={item} alt="fb" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 h-9 flex items-center">
        <div className="w-4/5 m-auto">
        <div className="flex justify-between items-center">
          <h6 className="font-bold text-sm text-white">
            @2020 All rights reserved.
          </h6>
          <div className="flex">
            <h6 className="font-bold text-sm text-white">Privacy Plicy</h6>
            <h6 className="font-bold text-sm text-white">Terms and Condtion</h6>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default BookingFooter;
