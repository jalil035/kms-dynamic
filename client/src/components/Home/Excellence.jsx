import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { number: 150, title: "Projects Completed" },
  { number: 30, title: "Clients Served" },
  { number: 10, title: "Years Experience" },
  { number: 50, title: "Team Members" },
];

const Excellence = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section ref={ref} className="bg-black py-10 text-yellow-400 text-center">
      <h2 className="text-5xl md:text-5xl font-bold mb-8">
        EXCELLENCE IN EXECUTION
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {stats.map((item, index) => (
          <div key={index} className="p-4">
            <h3 className="text-4xl font-bold text-white">
              {inView ? <CountUp end={item.number} duration={7} /> : 0}+
            </h3>
            <p className="mt-2 text-lg text-gray-300">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Excellence;
