'use client'

// import { useState } from 'react';
import NavSection from "@/components/sections/NavSection";
// import FeaturesSection from "@/components/sections/FeaturesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import FooterSection from "@/components/sections/FooterSection";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import Image from 'next/image';

const features = [
  {
    title: 'Accessible Learning',
    description:
      'We provide AI courses and content that are easy to understand, beginner-friendly, and available for everyone.',
  },
  {
    title: 'Hands-On Experience',
    description:
      'Our platform emphasizes practical learning, enabling users to build real-world AI projects and applications.',
  },
  {
    title: 'Up-to-Date Content',
    description:
      'Stay current with the latest AI trends, models, and tools. We update our content regularly to reflect new advancements.',
  },
];
const feature = [
  {
    title: 'Expert Instructors',
    description: 'Learn from top AI engineers and researchers who bring real-world insights into every lesson.',
    icon: '👨‍🏫',
  },
  {
    title: 'Project-Based Learning',
    description: 'Gain practical skills by building AI tools, apps, and models while learning step by step.',
    icon: '🧠',
  },
  {
    title: 'Community Support',
    description: 'Get 24/7 help from peers and mentors, participate in challenges, and grow together.',
    icon: '🤝',
  },
    {
    title: 'Flexible & Self-Paced',
    description:
      'Learn on your schedule with flexible, on-demand lessons that fit your lifestyle and pace.',
    icon: '⏱️',
  },
   {
    title: 'Interactive Platform',
    description:
      'Enjoy quizzes, coding challenges, live sessions, and personalized feedback to boost engagement.',
    icon: '🧩',
  },
  {
    title: 'Career-Focused Curriculum',
    description:
      'Get job-ready with courses designed for real-world AI careers, portfolios, and interviews.',
    icon: '💼',
  },
];



export default function Page() {
    //  const [selectedMember, setSelectedMember] = useState(null);
    return (
        <div className="w-full h-full flex bg-[#020b1a]  justify-center flex-col items-center">
                    <NavSection />
                    <div className="min-h-screen bg-[#020b1a] text-white px-6 mt-[120px] pb-16"> 
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6">About Us</h1>

        {/* Description */}
        <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-300">
          At <span className="text-green-400 font-semibold">AI Learn</span>, we believe in the power of technology to transform the future.
          We offer hands-on, project-based learning in AI, ML, and Data Science. Our platform empowers students, developers, and enthusiasts
          to build real-world solutions and become future-ready.
        </p>

        {/* Image */}
        <div className="flex justify-center mb-10">
          <Image
            src="/about.jpg" 
            alt="Team Working"
            width={800}
            height={450}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Call to Action */}
        <a
          href="/contact"
          className="inline-block bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-full transition mb-16"
        >
          Get In Touch
        </a>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-10 shadow-lg">
          <div>
            <h2 className="text-3xl font-bold text-green-400">500+</h2>
            <p className="text-sm text-gray-400">Projects Completed</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-green-400">600+</h2>
            <p className="text-sm text-gray-400">Happy Learners</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-green-400">7+</h2>
            <p className="text-sm text-gray-400">Industry Collaborations</p>
          </div>
        </div>
      </div>
    </div>
    {/* <FeaturesSection /> */}
    <section className="bg-[#020617] text-white py-20 px-6 md:px-20 mt-24">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-white to-white bg-clip-text text-transparent"
        >
          Why Choose AI Learn?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 text-lg mb-12"
        >
          Discover what makes us stand out in AI education.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {feature.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-green-500 shadow-md hover:shadow-pink-500/20 transition-all duration-300 group"
            >
              <div className="text-pink-400 text-2xl mb-3">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-green-500 transition">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    
     <section className="mt-20 px-6 text-white">
      
       

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center px-4 py-10">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedMember(member)}
              className=""
            >
               <div className="w-[240px] h-[340px] bg-gradient-to-br from-[#020b1a] to-[#0b1f1f] rounded-2xl p-6 flex flex-col items-center justify-between shadow-lg transition hover:scale-105 duration-300"> 
  <Image
    src={member.image}
    alt={member.name}
    width={120}
    height={120}
    className="rounded-full object-cover"
  />
  <div className="text-center">
    <h3 className="text-lg font-semibold text-white">{member.name}</h3>
    <p className="text-sm text-gray-400">{member.role}</p>
  </div>
  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
    <Image
      src="/linkedin.png"
      alt="LinkedIn"
      width={24}
      height={24}
    />
  </a>
 </div> 
            </div>
          ))}
        </div>

        {/* Modal */}
        {/* {selectedMember && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white text-black p-8 rounded-xl max-w-md w-full">
              <button onClick={() => setSelectedMember(null)} className="float-right text-gray-500 hover:text-black">
                ✕
              </button>
              <h3 className="text-2xl font-bold mb-2">{selectedMember.name}</h3>
              <p className="text-sm mb-2 text-gray-600">{selectedMember.role}</p>
              <p className="text-base">{selectedMember.bio}</p>
              <a
                href={selectedMember.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 underline"
              >
                View on LinkedIn
              </a>
            </div>
          </div>
        )} */} 
      
    </section>
    
    
    <div className="bg-[#020b1a] text-white">
      <div className="max-w-6xl mx-auto">
           <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
      {/* 🔥 Add the testimonials here */}
      <TestimonialsSection />
          </div>
      {/* Maybe a final CTA or footer below */}
      </div>
      <section className="bg-[#020617] text-white py-16 px-6 md:px-20 mt-24">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-gradient bg-gradient-to-r from-white to-white bg-clip-text text-transparent"
        >
          Our Mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-300 mb-10"
        >
          At AI Learn, we empower learners and professionals to master artificial intelligence through accessible,
          hands-on, and up-to-date learning experiences. Our mission is to democratize AI education across the globe.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            className="bg-[#020617] p-6 rounded-2xl shadow-md hover:shadow-blue-500/30 border border-gray-700 hover:border-cyan-400 cursor-pointer transition-all">
              <h3 className="text-xl font-semibold mb-2 text-green-500">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section> 
    
     <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-[#020617] to-[#020617] text-neutral-600 py-16 rounded-3xl my-10 mx-auto max-w-6xl px-6 shadow-lg"
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Curious how AI can elevate your learning?
        </h2>
        <p className="text-lg text-neutral-600 mb-6 max-w-2xl mx-auto">
          Let’s talk! Book a free consultation and discover how <span className="text-green-400 font-semibold">Learn AI</span> can boost your future.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-full transition duration-300 shadow-md"
        >
          Book a Call
        </motion.button>
      </div>
    </motion.section>
    <FooterSection />
    <div className="absolute inset-0 z-0 w-full h-full">
                    <Canvas>
                        <Stars radius={100} count={2500} factor={3} fade speed={1} />
                    </Canvas>
                </div>
                    </div>
                        

                    
                    );
}// export const dynamic = 'force-dynamic'; // Uncomment if you want to force dynamic rendering