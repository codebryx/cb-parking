import React from 'react'
interface NotificationAddressProps {
  icon: string;
  address: string;
}
const NotificationAddress: React.FC<NotificationAddressProps> = ({icon,address}) => {
  return (
      <div className='lg:h-8 flex items-center md:pr-6 w-72'>
            <img
              src={icon}
              className="lg:w-7 w-3	pr-1"
              alt="location-img"
            />
            <span className='text-white md:text-sm	text-xs'>{address}</span>
          </div>
  )
}
export default NotificationAddress