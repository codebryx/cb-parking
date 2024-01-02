import React from "react";

const HappyCustomers = () => {
  const happyCust = [
    {
      userImg: `${process.env.PUBLIC_URL}/assets/images/user.svg`,
      name: "Micheal Johnson",
      country: "Sydney, Australia",
      ratings: [
        `${process.env.PUBLIC_URL}/assets/images/rating.png`,
        `${process.env.PUBLIC_URL}/assets/images/rating.png`,
        `${process.env.PUBLIC_URL}/assets/images/rating.png`,
        `${process.env.PUBLIC_URL}/assets/images/rating.png`,
        `${process.env.PUBLIC_URL}/assets/images/rating.png`,
      ],
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quo esse totam et maxime, suscipit exercitationem veritatis quis cupiditate iusto accusantium nisi quas facilis ut aliquid expedita. Illum fugit ex dolorem!",
    },
    {
      userImg: `${process.env.PUBLIC_URL}/assets/images/user.svg`,
      name: "John Johnson",
      country: "Sydney, Australia",
      ratings: [
        `${process.env.PUBLIC_URL}/assets/images/rating.png`,
        `${process.env.PUBLIC_URL}/assets/images/rating.png`,
        `${process.env.PUBLIC_URL}/assets/images/rating.png`,
      ],
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quo esse totam et maxime, suscipit exercitationem veritatis quis cupiditate iusto accusantium nisi quas facilis ut aliquid expedita. Illum fugit ex dolorem!",
    },
  ];

  let currentIndex = 0;

  function showSlide(index: number) {
    const carousel = document.querySelector(".carousel") as HTMLElement | null;
    const item = document.querySelector(".carousel-item") as HTMLElement | null;

    if (carousel && item) {
      const itemWidth = item.offsetWidth;
      currentIndex = index;

      carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  }

  function nextSlide() {
    const totalItems = document.querySelectorAll(".carousel-item").length;
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
  }

  function prevSlide() {
    const totalItems = document.querySelectorAll(".carousel-item").length;
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showSlide(currentIndex);
  }
  return (
    <div className="bg-slate-300">
      <div className="h-96"></div>
      <div className="w-4/5 m-auto flex text-left">
        <div className="w-1/2 h-96">
          <div className="flex justify-center w-11/12 h-full">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/downloadCar.jpeg`}
              alt="happycustparkingImg"
            />
          </div>
        </div>
        <div className="w-1/2 relative">
          <span className="text-blue-500 font-bold block text-xl">
            3000+ Customers
          </span>
          <h1 className="text-3xl font-bold w-72 py-4">
            Words From Happy Customers
          </h1>
          <div className="h-80 w-full bg-white shadow-lg border-2 border-gray-300 absolute">
            <div className="py-8">
              <div className="carousel-container">
                <div className="carousel">
                {happyCust.map((item,index) => (
                  <div className="carousel-item flex flex-col items-center" key={index}>
                      <>
                      <div className="w-[400px] flex items-center justify-center">
                      <img src={item.userImg} alt="Image1" />
                      </div>
                        <h6 className="text-lg">{item.name}</h6>
                        <h6 className="text-sm">{item.country}</h6>
                        <div className="flex">
                          {item.ratings.map((star) => (
                            <div className="mr-1 w-4">
                              <img src={star} alt="ratings" />
                            </div>
                          ))}
                        </div>
                        <span className="text-sm block text-center w-80">
                          {item.text}
                        </span>
                      </>
                  </div>
                    ))}
                </div>
                <div className="flex">
                  <div className="arrowL prev" onClick={prevSlide}>
                    &#8249;
                  </div>
                  <div className="arrowR next" onClick={nextSlide}>
                    &#8250;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HappyCustomers;
