"use client";

import React, { useEffect, useState } from "react";
import { Carousel, Card } from "@/components/ui/cards-carousel";
import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
import axios from "axios";

type BlogCard = {
  category: string;
  title: string;
  src: string;
  content: React.ReactNode;
};

export function BlogsSection() {

  const [data1, setData1] = useState<BlogCard[]>([])
  const [Loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/blogs?all:true', {
        });

        if (response.data.error) {
          console.error('Error fetching blogs:', response.data.error);
          throw new Error(response.data.error);
        }

        const blogs = response.data.blogs.map((blog: { category: string; title: string; src: string; content:string }) => ({
          category: blog.category,
          title: blog.title,
          src: blog.src || 'https://via.placeholder.com/150',
          content: blog.content,
        }));

        setData1(blogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  
  const cards = data1.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  if (Loading)
    return (
      <section id="blogs">
        <div className="w-full h-full flex justify-center flex-col items-center py-20 bg-[#020617] ">
          <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            Loading blogs...
          </h2>
        </div>
      </section>
    );

  return (
    <section id="blogs">
      <div className="w-full h-full flex justify-center flex-col items-center py-20 bg-[#020617] ">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Read our latest blogs.
        </h2>
        <p className="max-w-7xl pl-4 mt-2 mx-auto text-base md:text-xl text-neutral-600 dark:text-neutral-400 font-sans">
          Stay updated with the latest trends in AI, productivity, and more.
        </p>
        <Carousel items={cards} />

        <Link
          href="/blogs"
          className="cursor-pointer w-60 mt-4 z-50 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 flex items-center justify-center text-center"
        >
          <span>Explore More Blogs</span>
        </Link>


      </div>
    </section>
  );
}

// const DummyContent = () => {
//   return (
//     <>
//       {[...new Array(3).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 The first rule of Apple club is that you boast about Apple club.
//               </span>{" "}
//               Keep a journal, quickly jot down a grocery list, and take amazing
//               class notes. Want to convert those notes to text? No problem.
//               Langotiya jeetu ka mara hua yaar is ready to capture every
//               thought.
//             <Image
//               src="https://assets.aceternity.com/macbook.png"
//               alt="Macbook mockup from Aceternity UI"
//               height={500}
//               width={500}
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             />
//             </p>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// const data = [
//   {
//     category: "Release Copilot AI Free Trial",
//     title: "Experience Copilot AI for Free",
//     src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Productivity",
//     title: "Enhance your productivity.",
//     src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Product",
//     title: "Launching the new Apple Vision Pro.",
//     src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },

//   {
//     category: "Product",
//     title: "Maps for your iPhone 15 Pro Max.",
//     src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "iOS",
//     title: "Photography just got better.",
//     src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Hiring",
//     title: "Hiring for a Staff Software Engineer",
//     src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
// ];


