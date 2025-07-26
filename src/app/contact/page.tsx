 "use client";

import ContactSection from '@/components/sections/ContactSection'; // adjust path if needed
   import NavSection from "@/components/sections/NavSection";
   import FooterSection from "@/components/sections/FooterSection";
export default function Home() {
  return (
  <div className="w-full min-h-screen flex bg-[#020617] justify-center flex-col items-center">
                         <NavSection />
     <main className="flex-grow px-6 pt-20 md:px-20 lg:px-32">
      {/* <div className="w-full h-full flex bg-[#020617] justify-center flex-col items-center">
    //                      <NavSection /> */}
      <ContactSection />
      
      
       </main>
        <FooterSection />
     </div>
    
  );
}