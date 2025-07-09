import React from "react";
import f1 from '../Assets/f1.webp';
import f2 from '../Assets/f2.webp';
import f3 from '../Assets/f3.webp';
import f4 from '../Assets/f4.webp';
import f5 from '../Assets/f5.webp';
import f6 from '../Assets/f6.webp';

const services = [
  {
    title: "Software Solutions",
    description: "We build scalable, customized software tools tailored to your operational needs—from HR and inventory to CRM and task management.",
    image: f1,
    colSpan: "md:col-span-4 sm:col-span-6 col-span-12",
  },
  {
    title: "Business Transformation",
    description: "We help businesses reimagine their models, strategies, and processes with technology-driven transformation that ensures long-term relevance and growth.",
    image: f2,
    colSpan: "md:col-span-4 sm:col-span-6 col-span-12",
  },
  {
    title: "Business Automation",
    description: "We streamline repetitive tasks and workflows through custom automation solutions that increase operational efficiency and reduce human error.",
    image: f3,
    colSpan: "md:col-span-4 sm:col-span-6 col-span-12",
  },
  {
    title: "Website and Application",
    description: "We design and develop responsive, user-centric websites and applications that deliver seamless digital experiences and support business goals.",
    image: f4,
    colSpan: "md:col-span-3 sm:col-span-6 col-span-12",
  },
  {
    title: "Social Media Management",
    description: "We manage, grow, and engage your social media presence with compelling content, community interaction, and targeted campaigns.",
    image: f5,
    colSpan: "md:col-span-6 sm:col-span-12 col-span-12",
  },
  {
    title: "Digital Marketing",
    description: "We craft data-driven digital marketing strategies that boost brand visibility, generate leads, and drive measurable growth across online platforms.",
    image: f6,
    colSpan: "md:col-span-3 sm:col-span-6 col-span-12",
  },
];

export default function OurServices() {
  return (
    <div className="text-white min-h-screen px-4 py-10 relative bg-black font-sh-ad-grotesk" id="services">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-cal-sans text-center text-white mb-16">
          Our <span className="text-red-500">Services</span>
        </h2>

        <div className="grid grid-cols-12 gap-4 sm:grid-cols-6 md:grid-cols-12 font-sfpro">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white text-black rounded-2xl shadow-lg p-6 flex flex-col justify-between ${service.colSpan}`}
            >
              <div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              </div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl object-cover w-full h-36 sm:h-32 md:h-36"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
