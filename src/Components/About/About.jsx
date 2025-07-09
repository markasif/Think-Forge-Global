import React from "react";

export default function About() {
  return (
    <div
      className="min-h-screen bg-black text-white px-6 py-16 sm:px-10 sm:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
      id="about"
    >
      {/* Left Column */}
      <div className="flex flex-col justify-center space-y-4 text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-cal-sans">
          <span className="text-red-500">About</span> Our Company
        </h1>
        <p className="text-gray-400 text-base sm:text-lg font-sfpro max-w-md">
          We help businesses grow smarter through digital transformation,
          strategy, and innovation tailored to your goals.
        </p>
      </div>

      {/* Right Column */}
      <div className="flex flex-col justify-center gap-12 text-gray-300 font-sfpro">
        {/* Our Vision */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
          <h2 className="text-white font-semibold sm:w-1/4 text-2xl sm:text-3xl md:text-4xl">
            Our <span className="text-red-500">Vision</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 sm:w-3/4">
            To become a trusted catalyst for smart, scalable, and sustainable
            business growth by harnessing the power of technology, innovation,
            and digital transformation.
          </p>
        </div>

        {/* Our Mission */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
          <h2 className="text-white font-semibold sm:w-1/4 text-2xl sm:text-3xl md:text-4xl">
            Our <span className="text-red-500">Mission</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 sm:w-3/4">
            At Think Forge Global, our mission is to empower startups and
            businesses to grow faster and smarter by delivering tailored
            digital solutions, strategic consulting, and intelligent automation.
            We aim to streamline operations, amplify brand presence, and unlock
            growth opportunities across every stage of the business journey—
            helping visionary entrepreneurs turn bold ideas into impactful
            outcomes.
          </p>
        </div>
      </div>
    </div>
  );
}
