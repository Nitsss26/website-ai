'use client'
import { BlogsSection } from "@/components/sections/BlogsSection";
import BrandsSection from "@/components/sections/BrandsSection";
import ContactSection from "@/components/sections/ContactSection";
import CoursesSection from "@/components/sections/CoursesSection";
import { DemoVideoSection } from "@/components/sections/DemoVideoSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import NavSection from "@/components/sections/NavSection";
import OurMissionSection from "@/components/sections/OurMissionSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import NewsHighlights from "@/components/sections/NewsHighlights";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] ">
      <NavSection />

      <div className=" w-full max-w-7xl absolute inset-x-0 top-0 mx-auto">
        <HeroSection />
        <BrandsSection />
        <FeaturesSection />
        <NewsHighlights />
        <DemoVideoSection />
        <CoursesSection />
        <BlogsSection />
        <TestimonialsSection />
        <OurMissionSection />
        <ContactSection />
        <FooterSection />

      </div>


    </div>
  );
}


