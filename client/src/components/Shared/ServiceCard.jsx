import React from "react";

const ServiceCard = ({ title, image, summary, slug }) => {
  return (
    <div
      className="m-auto mb-3 "
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-duration="800"
    >
      <div className="w-[400px] h-[480px] bg-white rounded-md border border-orange-400 shadow hover:shadow-lg transition duration-300 overflow-hidden group">
        <div className="h-1 bg-orange-500 w-0 group-hover:w-full transition-all duration-300"></div>
        <div className="p-4 text-center cursor-pointer">
          <div className="w-72 h-72 mx-auto rounded-full overflow-hidden border-4 border-orange-400 mb-4 transition-transform duration-500 group-hover:scale-105">
            <img
              src={`http://localhost:5050/${image}`}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <hr className="my-3 border-orange-200" />
          <h2 className="text-3xl font-bold text-orange-400 mb-2 ">{title}</h2>
          <p className="text-base text-gray-600 mb-2">{summary}</p>
          <a
            href={`/services/${slug}`}
            className="text-sm text-blue-500 hover:underline"
          >
            Read More ....
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
