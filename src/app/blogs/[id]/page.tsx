'use client'

import FooterSection from "@/components/sections/FooterSection";
import NavSection from "@/components/sections/NavSection";
// import { Stars } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import * as React from 'react';
import { createClient } from "@/lib/supabase/client"
import { useParams } from 'next/navigation';
// const data = [
//     {
//         id: 1,
//         category: "AI",
//         title: "Understanding Neural Networks",
//         content: "Neural networks are the backbone of modern AI. They mimic the human brain's structure and function. This article dives deep into how they work and their real-world applications.",
//         src: "/placeholder.jpg",
//         publishDate: "2025-07-01",
//     },
//     {
//         id: 2,
//         category: "ML",
//         title: "Getting Started with Machine Learning",
//         content: "Machine learning enables systems to learn from data. Here's a guide for beginners to get started with basic ML models and tools.",
//         src: "/placeholder2.jpg",
//         publishDate: "2025-07-03",
//     }
// ];

interface Blog {
    id: number;
    category: string;
    title: string;
    content: string;
    src: string;
    publishDate: string;

}

export default function BlogsDetails() {
    const [blog, setBlog] = React.useState<Blog>();
    const [loading, setLoading] = React.useState(false);
    const supabase = createClient();
    const params = useParams();
    const rawTitle = params.id as string; 
    const title = decodeURIComponent(rawTitle)
    console.log("title:", title  );
    React.useEffect(() => {
        setLoading(true);

        const fetchBlog = async () => {
            if(!title) {
                console.error("No title provided"); 
                setLoading(false);
                return;
            }
            try {
                const { data, error } = await supabase
                    .from('blogs')
                    .select('*')
                    .eq('title', title)
                    .single();

                if (error) {
                    console.error("Error fetching blog:", error);
                    setLoading(false);
                    return;
                }

                setBlog(data);
            }
            catch (error) {
                console.error("Error fetching blog:", error);
            }
            finally {
                setLoading(false);
            }
        }

        fetchBlog()
    }, [supabase, title])

    console.log("Blog data:", blog);
    if(!title){
        return (
            <div className="w-full h-screen flex justify-center items-center bg-[#020b1a]">
                <div className="text-white text-2xl">Blog not found</div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="w-full h-screen flex justify-center items-center bg-[#020b1a]">
                <div className="text-white text-2xl">Loading...</div>
            </div>
        );
    }

    return (
        <div className="w-full h-full flex bg-[#020b1a] justify-center flex-col items-center">
            <NavSection />

            <div className="relative flex justify-between items-center flex-col z-20 py-10 lg:py-40 max-w-7xl mx-auto">
                <div className="px-8">
                    {/* <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white dark:text-white">
                        Blog Details
                    </h4>

                    <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                        Explore insightful content crafted to expand your knowledge and keep you informed across a wide range of topics.
                    </p> */}

                    <div className="min-h-screen bg-[#020b1a] text-white py-12 px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                {blog?.title}
                            </h1>

                            <Image
                                src={blog?.src || "/a"}
                                alt={blog?.title || "/a"}
                                width={1200}
                                height={400}
                                className="rounded-xl w-full h-[400px] object-cover mb-6 shadow-lg border border-gray-700"
                                priority
                            />

                            <div className="flex justify-center items-center gap-6 text-gray-300 text-lg font-semibold mb-10">
                                <span className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                                    📅 {blog?.publishDate}
                                </span>
                                <span className="flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                                    🏷️ {blog?.category}
                                </span>
                            </div>

                            <p className="text-lg leading-relaxed text-left text-gray-300">
                                {blog?.content}
                            </p>
                        </div>
                    </div>

                    {/* Removed About the Author section - no data in schema */}

                    {/* <section className="mt-20 px-4 md:px-20">
            <h2 className="text-3xl font-bold text-white mb-10">📚 Related Topics</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedTopics.map((topic, index) => (
                <a
                  key={index}
                  href={topic.link}
                  className="group relative bg-[#020617] border border-gray-700 p-6 rounded-2xl transition-all duration-300 shadow-md hover:shadow-blue-500/20 hover:border-blue-500 transform hover:-translate-y-1"
                >
                  <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />
                  <div className="mb-3 flex items-center gap-2 text-sm text-cyan-400 font-medium">
                    🏷️ {topic.tag}
                  </div>
                  <h3 className="text-xl text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {topic.description}
                  </p>
                </a>
              ))}
            </div>
          </section> */}

                    {/* <div className="mt-20 w-full flex justify-center px-4">
            <div className="bg-gradient-to-r from-[#020617] via-[#020617] to-[#020617] border border-gray-700 rounded-2xl p-8 max-w-4xl w-full text-center shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Level Up Your AI Skills
              </h3>
              <p className="text-base sm:text-lg text-neutral-500 mb-6">
                Join our community to access premium AI tutorials, hands-on projects, and career-building mentorship programs.
              </p>
              <button className="inline-flex items-center gap-2 bg-white text-blue-800 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-blue-100 hover:scale-105 transition-all duration-300">
                Explore Courses
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
                </svg>
              </button>
            </div>
          </div> */}
                </div>
            </div>

            <FooterSection />

            {/* <div className="absolute inset-0 z-0 w-full h-full">
        <Canvas>
          <Stars radius={100} count={2500} factor={3} fade speed={1} />
        </Canvas>
      </div> */}
        </div>
    );
}

// Dummy relatedTopics data
// const relatedTopics = [
//   {
//     tag: "AI",
//     title: "How AI is Changing the World",
//     description: "Explore how artificial intelligence is impacting industries and daily life.",
//     link: "#"
//   },
//   {
//     tag: "ML",
//     title: "Top 10 ML Algorithms",
//     description: "A quick overview of essential machine learning algorithms you should know.",
//     link: "#"
//   },
//   {
//     tag: "Data Science",
//     title: "Data Science vs Machine Learning",
//     description: "Understand the key differences and overlaps between these two domains.",
//     link: "#"
//   }
// ];
