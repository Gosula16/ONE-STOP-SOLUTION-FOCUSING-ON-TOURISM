import React from "react";
import { Link } from "react-router-dom";
import { FaHotel, FaTrain ,FaPlane} from "react-icons/fa";
import { MdTour } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { BiRestaurant } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";
import Flight from "../../pages/flight";
const categories = [
  {
    name: "Hotel Reservation",
    icon: <FaHotel />,
    to: "/hotelhome", // Add the 'to' property for the link
  },
  {
    name: "Tour Package Reservation",
    icon: <MdTour />,
    to: "/tours/home", // Example of adding a link for another category
  },
  {
    name: "Vehicle Reservation",
    icon: <AiFillCar />,
    to: "/vehicles", // Add the link for Vehicle Reservation
  },
  {
    name: "Train Reservation",
    icon: <FaTrain />,
    to: "/TrainHome", // Add the link for Train Reservation
  },
  {
    name: "Restaurant Reservation",
    icon: <BiRestaurant />,
    to: "/Restaurants", // Add the link for Restaurant Reservation
  },
  {
    name: "Event Reservation",
    icon: <BsCalendarEvent />,
    to: "/events", // Add the link for Event Reservation
  },
  
  {
    name: "Flight Reservation",  // New category for flights
    icon: <FaPlane />,           // Flight icon
    to:"/flight",  // Corrected link using react-router's Link component
  }
  
];

const Services = () => {
  return (
    <>
      <div className="lg:px-36 lg:pt-5 lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Our Services
                </span>
                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  What We Offer
                </h2>

<p className="text-body-color mb-8 text-base">
  At Travely, we bring the beauty of India to your doorstep with our bespoke travel services. Whether you're looking for a peaceful retreat in the Himalayas, an exciting adventure in Rajasthan, or a serene vacation along the Kerala backwaters, we offer a wide range of travel packages to suit your needs. Our experienced team ensures that every detail of your journey is taken care of, so you can focus on making memories.
</p>

<p className="text-body-color mb-12 text-base">
  From guided city tours to luxury hotel bookings, from adventurous trekking expeditions to tranquil Ayurvedic retreats, we provide personalized travel experiences 
  that are both enriching and unforgettable. We are dedicated to giving you an authentic Indian experience, exploring the vibrant culture, diverse 
  landscapes, and rich history of our beautiful country.
</p>

              </div>
            </div>
          </div>
          <div className="-mx-4 grid lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="mb-8 rounded-[20px] bg-white p-2 shadow-md hover:shadow-lg md:px-7 grid grid-cols-2 justify-center"
              >
                <Link to={category.to}> {/* Use Link here */}
                  <div className="text-black text-3xl mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                    {category.icon}
                  </div>
                  <h4 className="text-dark mb-3 mt-5 text-lg font-semibold">
                    {category.name}
                  </h4>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
