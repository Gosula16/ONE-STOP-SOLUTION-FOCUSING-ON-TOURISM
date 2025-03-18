import React from "react";

const ContactUs = () => {
  return (
    <div class="container my-24 px-6 mx-auto">
      <section class="mb-32 text-gray-800">
        <div class="grid lg:grid-cols-2 gap-4 lg:gap-x-12 lg:mb-0">
          <div class="mb-12 lg:mb-0">
            <h2 class="text-3xl font-bold mb-6">Frequently asked questions</h2>

            <p class="text-gray-500 mb-12">
              Didn't find your answer in the FAQ? Contact our sales team.
            </p>

            <form>
              <div class="form-group mb-6">
                <input
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Name"
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="email"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Email address"
                />
              </div>
              <div class="form-group mb-6">
                <textarea
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Send
              </button>
            </form>
          </div>

          <div class="mb-6 md:mb-0">
          <p class="font-bold mb-4">What are the key benefits of Travely's travel services?</p>
<p class="text-gray-500 mb-12">
  Travely offers a range of tailored travel experiences designed to make your journey unforgettable. Whether you're exploring cultural landmarks, enjoying a serene retreat, or embarking on an adventurous expedition, we ensure every detail is handled with care. With a focus on personalized services, we cater to your unique preferences, ensuring a stress-free and enjoyable travel experience.
</p>

<p class="font-bold mb-4">How does Travely ensure a seamless travel experience?</p>
<p class="text-gray-500 mb-12">
  At Travely, we take pride in our meticulous planning and attention to detail. From booking your accommodations to curating the perfect itinerary, we ensure that every part of your trip is carefully organized. Our expert team works closely with you to understand your needs and preferences, making sure that you can relax and enjoy your vacation without any worries.
</p>

<p class="font-bold mb-4">Does Travely offer customized itineraries?</p>
<p class="text-gray-500 mb-12">
  Yes! One of the standout features of Travely is our ability to create bespoke itineraries tailored to your specific interests. Whether you prefer exploring historical sites, relaxing on the beach, or going on a wildlife safari, we curate every trip to match your individual style and expectations, ensuring an unforgettable experience.
</p>

<p class="font-bold mb-4">What makes Travely's travel services different from others?</p>
<p class="text-gray-500 mb-12">
  Travely stands out by offering personalized travel experiences designed specifically for you. We go beyond typical travel packages by curating journeys that are authentic, enriching, and custom-fit. With local expertise, in-depth knowledge of destinations, and a commitment to excellence, we ensure that every moment of your trip is meaningful and extraordinary.
</p>

<p class="font-bold mb-4">How can I book my trip with Travely?</p>
<p class="text-gray-500 mb-12">
  Booking your trip with Travely is simple! Visit our website and browse through our wide range of travel services and destinations. You can also reach out to our travel advisors for expert recommendations or to create a customized itinerary. Our team is here to help you plan every aspect of your journey, from transportation to activities, ensuring your vacation is flawless.
</p>

<p class="font-bold mb-4">What types of travel destinations does Travely cover?</p>
<p class="text-gray-500 mb-12">
  Travely offers travel packages to a diverse range of destinations across India and beyond. Whether you want to explore the majestic Himalayas, relax in the backwaters of Kerala, or experience the royal culture of Rajasthan, we have something for every type of traveler. Our services also cover urban tours, luxury escapes, adventure treks, wellness retreats, and much more.
</p>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
