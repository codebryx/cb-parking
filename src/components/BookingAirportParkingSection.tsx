import React from "react";
import BookingAirportParking from "./BookingAirportParking";

const BookingAirportParkingSection = () => {
  const bookingAirportParkingObj = [
    {
      bookingHeading: "Airport Parking",
      bookingText:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis repudiandae tempore culpa obcaecati atque nihil suscipit? Expedita rerum ipsum porro quibusdam, cum quidem consequatur, velit est nemo, eligendi sequi amet.",
      parkingList: [
        "ATL Airport Parking",
        "SFO Airport Parking",
        "ATL Airport Parking",
        "SFO Airport Parking",
      ],
      bookingBtn: "View All Airports",
    },
  ];
  const bookingAirportParkingObj2 = [
    {
        bookingHeading: "Monthly Parking",
        bookingText:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis repudiandae tempore culpa obcaecati atque nihil suscipit? Expedita rerum ipsum porro quibusdam, cum quidem consequatur, velit est nemo, eligendi sequi amet.",
        parkingList: [
          "Seattle Monthly Parking",
          "Chicago Monthly Parking",
          "San Francisco Monthly Parking",
          "Washington DC Monthly Parking",
        ],
        bookingBtn: "View All Cities",
    },
  ];

  return (
    <div className="bg-slate-200 relative h-screen">
      <div className="w-4/5 m-auto">
        <div className="absolute top-[-100px] w-4/5">
          <div className="flex flex-wrap">
            <div className="w-1/2 h-2/3">
              <div className="h-full w-full">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/airport.jpg`}
                  alt="airportImg"
                  className="h-full w-full"
                />
              </div>
            </div>
            {bookingAirportParkingObj.map((item, index) => {
              return (
                <BookingAirportParking
                  key={index}
                  heading={item.bookingHeading}
                  text={item.bookingText}
                  parkingBooking={item.parkingList}
                  buttonText={item.bookingBtn}
                />
              );
            })}
          </div>
          <div className="flex flex-wrap">
            {bookingAirportParkingObj2.map((item, index) => {
              return (
                <BookingAirportParking
                  key={index}
                  heading={item.bookingHeading}
                  text={item.bookingText}
                  parkingBooking={item.parkingList}
                  buttonText={item.bookingBtn}
                />
              );
            })}
            <div className="w-1/2 h-2/3">
              <div className="h-full w-full">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/airport.jpg`}
                  alt="airportImg"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookingAirportParkingSection;
