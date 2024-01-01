import React from "react";
interface BookingParkingUpdatesCardProps {
  img: string;
  date:string,
  comments: string;
  heading: string;
}
const BookingParkingUpdatesCard: React.FC<BookingParkingUpdatesCardProps> = ({
  img,
  date,
  comments,
  heading,
}) => {
  return (
    <div>
      <div className="flex flex-col justify-center mr-2">
        <div className="relative">
          <div>
            <img src={img} alt="hotelParkingImg" />
          </div>
          <span className="block text-white text-sm bg-blue-500 p-2 top-8 right-0 absolute">
            {date}
          </span>
        </div>
        <div className="bg-slate-100 h-36 py-6 px-2 text-left">
          <div className="flex pb-4">
            <div className="flex mr-8">
              <div className="w-6 mr-2">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/comment.svg`}
                  alt="lincon"
                />
              </div>
              <span className="text-sm">Lincon</span>
            </div>
            <div className="flex mr-8">
              <div className="w-6 mr-2">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/comment.svg`}
                  alt="comment"
                />
              </div>
              <span className="text-sm">{comments}</span>
            </div>
          </div>
          <h6 className="font-bold text-lg">{heading}</h6>
        </div>
      </div>
    </div>
  );
};
export default BookingParkingUpdatesCard;
