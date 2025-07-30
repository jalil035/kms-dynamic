import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-400 text-white py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Side: Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/LOGO.png"
              alt="KMS Logo"
              className="w-14 h-14 bg-white rounded-4xl"
            />
            <h2 className="text-[2.6rem] font-black text-blue-900">
              Khulna Mechanical Service
            </h2>
          </div>

          <div className="mb-6">
            <h3 className="font-bold underline text-white mb-1 text-3xl">
              HEAD OFFICE
            </h3>
            <p className="text-lg text-black">
              Mission Blue Flower (Flat_2/C)
              <br />
              304/305, Jamatal, Saha Kabir Mazar Road
              <br />
              Dhakin Khan, Azampur
              <br />
              Uttara, Dhaka-1200
              <br />
              Phone: +88 01716-561747, +88 01922-939907
              <br />
              Email: info@kms-bd.com
            </p>
          </div>

          <div>
            <h3 className="font-bold underline text-white mb-1 text-3xl">
              SITE OFFICE
            </h3>
            <p className="text-lg text-black">
              House #9, Jalil Saroni, Boyra
              <br />
              Main Road, Khulna
              <br />
              Phone: +88 01716-561747, +88 01922-939907
              <br />
              Email: kms.official2007@gmail.com
            </p>
          </div>
        </div>

        {/* Right Side: Inquiry Form */}
        <div>
          <h2 className="text-2xl font-bold underline text-white mb-4">
            FOR INQUIRY
          </h2>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 text-black rounded border border-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 text-black rounded border border-white focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2 text-black rounded border border-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-2 text-black rounded border border-white focus:outline-none"
            />
            <textarea
              rows="4"
              placeholder="Leave Your Message Here"
              className="w-full p-2 text-black rounded border border-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow-md float-right"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
