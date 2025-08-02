import React, { useEffect, useState } from "react";
import ServiceCard from "../Shared/ServiceCard";

const Section = ({ title, services }) => (
  <div className="mb-10">
    <h2 className="text-5xl font-bold text-orange-400 text-center mb-6 mt-10">
      {title}
    </h2>
    <hr className="mb-8 w-[800px] mx-auto border border-gray-500" />
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard
          key={service._id}
          title={service.title}
          image={service.image}
          summary={service.shortDescription}
          slug={service.slug}
        />
      ))}
    </div>
  </div>
);

const ServiceSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/service/getAll");
        if (!res.ok) throw new Error("Fetching Data Fail");
        const data = await res.json();
        setServices(data.services);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (loading) return <p className="text-center text-2xl">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const fabrication = services.filter((s) => s.category === "Fabrication");
  const renal = services.filter((s) => s.category === "Rental");
  const supply = services.filter((s) => s.category === "Supply");

  return (
    <div className="container mx-auto px-4 py -8">
      <Section
        title="Our Fabrication & Erection Services"
        services={fabrication}
      />
      <Section title="Our Rental Services" services={renal} />
      <Section title="Our Supply Services" services={supply} />
    </div>
  );
};

export default ServiceSection;
