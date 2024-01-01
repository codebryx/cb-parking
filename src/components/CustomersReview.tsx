import React from "react";

const CustomersReview = () => {
  const rating = [
    `${process.env.PUBLIC_URL}/assets/images/rating.png`,
    `${process.env.PUBLIC_URL}/assets/images/rating.png`,
    `${process.env.PUBLIC_URL}/assets/images/rating.png`,
    `${process.env.PUBLIC_URL}/assets/images/rating.png`,
    `${process.env.PUBLIC_URL}/assets/images/rating.png`,
  ];
  return (
    <div className="flex relative">
      <div className="w-4/6 bg-slate-100 text-left h-96 flex flex-col justify-center items-center">
        <div className="w-7/12 m-auto flex flex-col text-left">
          <h6 className="font-bold text-blue-500 text-sm py-2">
            Customers Review
          </h6>
          <h1 className="text-2xl">Words From Our Customers</h1>
          <div className="flex items-center py-6">
            <div className="w-16">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/user.svg`}
                alt="userImg"
              />
            </div>
            <div>
              <h6>Landon Hunter</h6>
              <span>Melbourne, Australia</span>
              <div className="flex">
                {rating.map((item) => (
                  <div className="w-6">
                    <img src={item} alt="ratingImg" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <span className="block text-sm w-96">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum quos ipsa voluptatibus distinctio, eius corrupti, iusto
                tenetur dignissimos porro id facere nisi ipsam dolorum
                recusandae, numquam at fugit. Quis, quasi.
              </span>
        </div>
      </div>
      <div className="w-2/6 bg-blue-500 h-96">
      </div>
      <div className="w-full h-96 flex justify-end absolute top-20 right-0"><img src={`${process.env.PUBLIC_URL}/assets/images/banner.jpg`} className="w-ful" alt=""/></div>
    </div>
  );
};
export default CustomersReview;
