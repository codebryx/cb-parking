import React from "react";
import BookingParkingUpdatesCard from "./BookingParkingUpdatesCard";

const BookingParkingUpdates = () => {
  const bookingUpdatesImg = [
    `${process.env.PUBLIC_URL}/assets/images/hotelParking.jpg`,
    `${process.env.PUBLIC_URL}/assets/images/hotelParking.jpg`,
    `${process.env.PUBLIC_URL}/assets/images/hotelParking.jpg`,
  ];
  const bookingDate=["june 05, 2020","june 05, 2020","june 05, 2020"]
  const bookingComments = ["2k Comments", "2k Comments", "2k Comments"];
  const bookinhHeading = [
    "Nemo Enim Ipsam Volupt Gatem Quia Voluptas Sit.",
    "Quis Autem Vel Eum lure Quii Repreche Ea  Voluptate",
    "Vel lllum Qui Dolor Eum Fugiat Quo Voluptas Nulla.",
  ];
  return (
    <div>
      <div className="h-64 flex flex-col justify-end items-center">
        <h6 className="text-blue-500 text-sm font-bold">Parking Updates</h6>
        <h1 className="text-3xl font-bold pb-8">Read Our Latest News</h1>
      </div>
      <div className="w-4/5 m-auto">
        <div className="flex">
          {bookingUpdatesImg.map((img, index) => (
            <BookingParkingUpdatesCard
              key={index}
              img={img}
              date={bookingDate[index]}
              comments={bookingComments[index]}
              heading={bookinhHeading[index]}
            />
          ))}
        </div>
      </div>
      <div className="h-56"></div>
    </div>
  );
};
export default BookingParkingUpdates;
