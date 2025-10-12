// components/Hero.js
import React from "react";
import Banner from "@/sections/Banner";
import ProfileDetail from "@/sections/ProfileDetail";

/**
 * Hero wrapper:
 * - Banner is placed normally (z-0).
 * - ProfileDetail is absolutely positioned over the banner on small screens (z-20).
 * - On md+ screens it becomes static and flows normally (md:static).
 */
const Hero = () => {
  return (
    <section className="relative">
      {/* Banner (back) */}
      <div className="z-0">
        <Banner />
      </div>

      {/* Profile (front) */}
      <div
        className="
          absolute left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-1/2
          w-full px-4
          z-20
          md:relative md:left-0 md:top-0 md:transform-none md:px-0
        "
      >
        <div className="max-w-4xl mx-auto">
          {/* pass compact prop if your ProfileDetail supports it */}
          <ProfileDetail compact />
        </div>
      </div>

      {/* Spacer keeps following content from being overlapped on small screens */}
      <div className="h-24 md:h-6" aria-hidden="true" />
    </section>
  );
};

export default Hero;
