import React from "react";
import Faqs from "./Faqs";

const ContactUs = () => {
  return (
    <>
      <div
        id="contact_us"
        className="mt-20 flex flex-col items-center w-full bg-[#f7f7fb] px-4 md:px-16"
      >
        <div className="flex items-center flex-col justify-center pt-10">
          <div className="font-bold text-3xl md:text-4xl mb-2 max-lg:leading-[23px]">
            FAQ
          </div>
          <div className=" text-[#797B80]">Frequently Asked Questions </div>
        </div>

        <div className="w-full mt-4 grid grid-cols-2 gap-4 max-md:grid-cols-1 py-4">
          <Faqs />
        </div>
          <div className="max-w-7xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-2xl bg-gradient-to-r from-purple-800 via-gray-900 to-amber-700">
              <div className="px-6 py-12 sm:px-12 sm:py-16 lg:py-20 xl:py-24 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Ready to Dive into the World of Audio Content?
                </h2>
                <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
                  Join PodA today and start creating, listening to, and sharing
                  amazing audio content. Experience the best Nigerian podcasts
                  and audiobooks.
                </p>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default ContactUs;
