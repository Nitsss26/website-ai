// src/app/news/[id]/page.tsx
"use client";
import { notFound } from 'next/navigation';
import Image from "next/image";
 import NavSection from "@/components/sections/NavSection";
 import FooterSection from "@/components/sections/FooterSection";
const staticNews = [
 {
    id: 1,
    title: "OpenAI Releases GPT-5: Major Leap in AI Capabilities",
    description: "OpenAI has announced GPT-5, boasting improved reasoning, memory, and reduced hallucinations.",
    fullText: `Artificial Intelligence (AI) continues to revolutionize the world at an unprecedented pace. In a groundbreaking development, researchers have unveiled a new generation of AI models that can not only generate human-like text but also understand context, emotion, and intent more accurately than ever before. This advancement marks a significant leap forward in natural language processing (NLP) and machine learning, making AI systems more reliable, transparent, and beneficial for industries ranging from healthcare to education and finance.

One of the most notable breakthroughs is the integration of multimodal capabilities — the ability to process and interpret text, images, and even audio simultaneously. This enables AI to assist in complex decision-making scenarios, from diagnosing diseases through medical scans to powering next-gen personal assistants that understand and respond like real humans. Experts believe these models will be instrumental in automating repetitive tasks, providing real-time insights, and enabling personalized digital experiences for millions.

However, with great power comes great responsibility. As AI becomes more embedded in our daily lives, concerns around ethics, bias, and data privacy continue to grow. Tech leaders are now calling for global cooperation to establish strong governance frameworks, ensuring that AI is developed and deployed in a way that benefits all of humanity.

This major AI announcement represents not just technological progress, but a step closer to a future where human and artificial intelligence work hand-in-hand — creating smarter, safer, and more inclusive digital ecosystems.`,
    source: "TechCrunch",
    date: "July 20, 2025",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    id: 2,
    title: "AI Helping Detect Rare Diseases in Early Stages",
    description: "AI algorithms are assisting doctors in diagnosing rare diseases with higher accuracy.",
    fullText: `Artificial Intelligence (AI) continues to revolutionize the world at an unprecedented pace. In a groundbreaking development, researchers have unveiled a new generation of AI models that can not only generate human-like text but also understand context, emotion, and intent more accurately than ever before. This advancement marks a significant leap forward in natural language processing (NLP) and machine learning, making AI systems more reliable, transparent, and beneficial for industries ranging from healthcare to education and finance.

One of the most notable breakthroughs is the integration of multimodal capabilities — the ability to process and interpret text, images, and even audio simultaneously. This enables AI to assist in complex decision-making scenarios, from diagnosing diseases through medical scans to powering next-gen personal assistants that understand and respond like real humans. Experts believe these models will be instrumental in automating repetitive tasks, providing real-time insights, and enabling personalized digital experiences for millions.

However, with great power comes great responsibility. As AI becomes more embedded in our daily lives, concerns around ethics, bias, and data privacy continue to grow. Tech leaders are now calling for global cooperation to establish strong governance frameworks, ensuring that AI is developed and deployed in a way that benefits all of humanity.

This major AI announcement represents not just technological progress, but a step closer to a future where human and artificial intelligence work hand-in-hand — creating smarter, safer, and more inclusive digital ecosystems.`,
    source: "BBC Health",
    date: "July 18, 2025",
    image: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
     id: 3,
    title: "Google DeepMind Introduces Gemini 3",
    description: "Gemini 3 merges large language models with real-time reasoning for advanced problem solving.",
    fullText: `Artificial Intelligence (AI) continues to revolutionize the world at an unprecedented pace. In a groundbreaking development, researchers have unveiled a new generation of AI models that can not only generate human-like text but also understand context, emotion, and intent more accurately than ever before. This advancement marks a significant leap forward in natural language processing (NLP) and machine learning, making AI systems more reliable, transparent, and beneficial for industries ranging from healthcare to education and finance.

One of the most notable breakthroughs is the integration of multimodal capabilities — the ability to process and interpret text, images, and even audio simultaneously. This enables AI to assist in complex decision-making scenarios, from diagnosing diseases through medical scans to powering next-gen personal assistants that understand and respond like real humans. Experts believe these models will be instrumental in automating repetitive tasks, providing real-time insights, and enabling personalized digital experiences for millions.

However, with great power comes great responsibility. As AI becomes more embedded in our daily lives, concerns around ethics, bias, and data privacy continue to grow. Tech leaders are now calling for global cooperation to establish strong governance frameworks, ensuring that AI is developed and deployed in a way that benefits all of humanity.

This major AI announcement represents not just technological progress, but a step closer to a future where human and artificial intelligence work hand-in-hand — creating smarter, safer, and more inclusive digital ecosystems.`,
    source: "The Verge",
    date: "July 15, 2025",
    image: "https://images.pexels.com/photos/9242852/pexels-photo-9242852.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
     id: 4,
    title: "Microsoft Copilot Expands Across Windows 12",
    description: "Microsoft's AI Copilot is now deeply integrated into Windows 12 for smarter user experiences.",
    fullText: `Artificial Intelligence (AI) continues to revolutionize the world at an unprecedented pace. In a groundbreaking development, researchers have unveiled a new generation of AI models that can not only generate human-like text but also understand context, emotion, and intent more accurately than ever before. This advancement marks a significant leap forward in natural language processing (NLP) and machine learning, making AI systems more reliable, transparent, and beneficial for industries ranging from healthcare to education and finance.

One of the most notable breakthroughs is the integration of multimodal capabilities — the ability to process and interpret text, images, and even audio simultaneously. This enables AI to assist in complex decision-making scenarios, from diagnosing diseases through medical scans to powering next-gen personal assistants that understand and respond like real humans. Experts believe these models will be instrumental in automating repetitive tasks, providing real-time insights, and enabling personalized digital experiences for millions.

However, with great power comes great responsibility. As AI becomes more embedded in our daily lives, concerns around ethics, bias, and data privacy continue to grow. Tech leaders are now calling for global cooperation to establish strong governance frameworks, ensuring that AI is developed and deployed in a way that benefits all of humanity.

This major AI announcement represents not just technological progress, but a step closer to a future where human and artificial intelligence work hand-in-hand — creating smarter, safer, and more inclusive digital ecosystems.`,
    source: "Microsoft Blog",
    date: "July 12, 2025",
    image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
     id: 5,
    title: "NVIDIA’s AI Chips Power the Next Wave of Robotics",
    description: "NVIDIA’s new AI chip is revolutionizing robotics with faster real-time decision making.",
    fullText: `Artificial Intelligence (AI) continues to revolutionize the world at an unprecedented pace. In a groundbreaking development, researchers have unveiled a new generation of AI models that can not only generate human-like text but also understand context, emotion, and intent more accurately than ever before. This advancement marks a significant leap forward in natural language processing (NLP) and machine learning, making AI systems more reliable, transparent, and beneficial for industries ranging from healthcare to education and finance.

One of the most notable breakthroughs is the integration of multimodal capabilities — the ability to process and interpret text, images, and even audio simultaneously. This enables AI to assist in complex decision-making scenarios, from diagnosing diseases through medical scans to powering next-gen personal assistants that understand and respond like real humans. Experts believe these models will be instrumental in automating repetitive tasks, providing real-time insights, and enabling personalized digital experiences for millions.

However, with great power comes great responsibility. As AI becomes more embedded in our daily lives, concerns around ethics, bias, and data privacy continue to grow. Tech leaders are now calling for global cooperation to establish strong governance frameworks, ensuring that AI is developed and deployed in a way that benefits all of humanity.

This major AI announcement represents not just technological progress, but a step closer to a future where human and artificial intelligence work hand-in-hand — creating smarter, safer, and more inclusive digital ecosystems.`,
    source: "Wired",
    date: "July 10, 2025",
    image: "https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
     id: 6,
    title: "AI in Education: Tools That Are Changing Classrooms",
    description: "Teachers and students are adopting AI to personalize learning and automate tasks.",
    fullText: `Artificial Intelligence (AI) continues to revolutionize the world at an unprecedented pace. In a groundbreaking development, researchers have unveiled a new generation of AI models that can not only generate human-like text but also understand context, emotion, and intent more accurately than ever before. This advancement marks a significant leap forward in natural language processing (NLP) and machine learning, making AI systems more reliable, transparent, and beneficial for industries ranging from healthcare to education and finance.

One of the most notable breakthroughs is the integration of multimodal capabilities — the ability to process and interpret text, images, and even audio simultaneously. This enables AI to assist in complex decision-making scenarios, from diagnosing diseases through medical scans to powering next-gen personal assistants that understand and respond like real humans. Experts believe these models will be instrumental in automating repetitive tasks, providing real-time insights, and enabling personalized digital experiences for millions.

However, with great power comes great responsibility. As AI becomes more embedded in our daily lives, concerns around ethics, bias, and data privacy continue to grow. Tech leaders are now calling for global cooperation to establish strong governance frameworks, ensuring that AI is developed and deployed in a way that benefits all of humanity.

This major AI announcement represents not just technological progress, but a step closer to a future where human and artificial intelligence work hand-in-hand — creating smarter, safer, and more inclusive digital ecosystems.`,
    source: "EdTech Magazine",
    date: "July 8, 2025",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];

type Props = {
  params: { id: string }
}

export default function NewsDetail({ params }: Props) {
    const id = parseInt(params.id);
    const news = staticNews.find(n => n.id === id);
  //  const news = staticNews.find(n => n.id === parseInt(params.id));
    // const news = staticNews.find(n => n.id === params.id);
    
  if (!news) return notFound();

  return (
    
          
          <div className="w-full h-full flex bg-[#020617] justify-center flex-col items-center">
                    <NavSection />
                    
     <div className="min-h-screen bg-[#020314] text-white px-4 sm:px-8 md:px-20 py-10 space-y-6 mt-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center border-b pb-4 border-gray-600">
        News Details
      </h1>

       <h2 className="text-2xl font-semibold text-center mt-6 mb-2">{news.title}</h2>
      
      

       <div className="w-full flex justify-center my-6">
        {/* <img
          src={news.image}
          alt={news.title}
          className="max-w-xl w-full h-auto rounded-lg shadow-lg"
        /> */}
        <Image
        src={news.image || "/placeholder.jpg"}
        alt={news.title}
        width={800}
        height={400}
        className="rounded mb-4"
      />
      </div>
      <div className="flex justify-center gap-8 text-sm text-gray-300 mb-4">
        <p><span className="font-semibold">Source:</span> {news.source}</p>
        <p><span className="font-semibold">Date:</span> {news.date}</p>
      </div>
      <p className="text-lg text-center">
        {news.fullText}
      </p>
    </div>
    <FooterSection />
    </div>
    
  );
}
