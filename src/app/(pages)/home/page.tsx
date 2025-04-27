
import React from "react";
import AboutSection from "@/components/homeComponent/AboutSection";
import ExtraFeature from "@/components/homeComponent/ExtraFeature";
import HeroSection from "@/components/homeComponent/HeroSection";
import FeaturedSection from "@/components/homeComponent/FeaturedSection";

export default async function HomePage() {
  
  return (
    <div className="bg-[#0F172A] text-gray-300">
      {/* Hero Section */}
     <HeroSection/>

      {/* Featured Collection */}
      <FeaturedSection/>

      {/* About Preview */}
      <AboutSection/>

      {/* Call to Action */}
      <ExtraFeature/>
    </div>
  );
}
