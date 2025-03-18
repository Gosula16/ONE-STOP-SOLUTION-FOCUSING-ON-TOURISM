import React from "react";
import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-black py-16 px-10 grid md:grid-cols-2 gap-8 text-gray-300 bottom-0">
      <div className="">
        <h3 className="text-2xl font-bold text-[#41A4FF]">Travely</h3>
        <p className="py-4">
        Travely - Your Gateway to Unforgettable Experiences
        At Travely, we believe that travel is more than just visiting new places—it's about creating lasting memories and connecting with the world in meaningful ways. Whether you're exploring India's rich cultural heritage, discovering hidden gems, or relaxing in scenic locales, we curate unforgettable journeys tailored just for you.
        With our expertise in personalized travel services, we ensure every detail of your trip is taken care of, allowing you to focus on what truly matters: making memories. Explore, experience, and enjoy the world with Travely.

        </p>
        <div className="flex justify-start gap-10 md:w-[75%] my-6">
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <FaWhatsappSquare size={30} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare size={30} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare size={30} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitterSquare size={30} />
          </a>
        </div>
      </div>

      <div className="flex md:justify-around justify-start mt-8">
        <div>
          <h6 className="font-bold text-[#41a3ff]">Reservations</h6>
          <ul className="mt-2 font-light">
            <li className="py-2 text-sm">
              <Link to="/hotelhome">Hotels</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/tours/home">Tour Packages</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/vehicles">Vehicles</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/Restaurants">Restaurants</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/events">Events</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/flight">Flight</Link>
            </li>
          </ul>
        </div>
        <div className="ml-[8rem]">
          <h6 className="font-bold text-[#41A4FF]">Support</h6>
          <ul className="mt-2 font-light">
            <li className="py-2 text-sm">
              <Link to="/contactus">Contact us</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/">About us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
