import React from "react";

const Aboutus = () => {
  return (
    <>
      <div className="lg:px-36 md:py-5 px-5">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://images.unsplash.com/photo-1627895457805-c7bf42cb9873?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://images.unsplash.com/photo-1544750040-4ea9b8a27d38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://images.unsplash.com/photo-1594993877167-a08f13013dc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
              <span className="text-[#41A4FF] mb-2 block text-lg font-semibold">
  Why Choose Us
</span>
<h2 className="text-dark mb-8 text-3xl font-bold sm:text-4xl">
  Experience Unmatched Quality and Service
</h2>
<p className="text-body-color mb-8 text-base">
  At Travely, we are committed to delivering exceptional experiences tailored to your unique needs. Our dedication to quality, attention to detail, and customer-centric approach sets us apart from the competition.
</p>
<p className="text-body-color mb-12 text-base">
  With years of expertise and a passionate team, we provide innovative solutions that go beyond expectations. Whether you're planning a vacation, a special event, or a business trip, we ensure every detail is perfect, leaving you with memories that last a lifetime.
</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
