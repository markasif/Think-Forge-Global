import React from "react";

export default function About() {
  return (
    <div className="bg-black text-white py-16 sm:py-20" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-4 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-cal-sans">
              <span className="text-red-500">About</span> Our Company
            </h1>
            <p className="text-gray-400 text-base sm:text-lg font-sfpro max-w-md leading-relaxed">
              We help businesses grow smarter through digital transformation,
              strategy, and innovation tailored to your goals.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center gap-16 text-gray-300 font-sfpro">
            
            {/* Our Vision */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <h2 className="text-white font-semibold md:w-1/3 text-2xl sm:text-3xl md:text-4xl leading-snug">
                Our <span className="text-red-500">Vision</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-400 md:w-2/3 leading-relaxed max-w-prose">
                To become a trusted catalyst for smart, scalable, and sustainable
                business growth by harnessing the power of technology, innovation,
                and digital transformation.
              </p>
            </div>

            {/* Our Mission */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <h2 className="text-white font-semibold md:w-1/3 text-2xl sm:text-3xl md:text-4xl leading-snug">
                Our <span className="text-red-500">Mission</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-400 md:w-2/3 leading-relaxed max-w-prose">
                At Think Forge Global, our mission is to empower startups and
                businesses to grow faster and smarter by delivering tailored
                digital solutions, strategic consulting, and intelligent automation.
                We aim to streamline operations, amplify brand presence, and unlock
                growth opportunities across every stage of the business journey —
                helping visionary entrepreneurs turn bold ideas into impactful
                outcomes.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
