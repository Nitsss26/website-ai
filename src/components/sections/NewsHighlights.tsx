  import Link from 'next/link';
//  import { useRouter } from 'next/router';
  // import { useEffect, useState } from 'react';



const staticNews = [
 {
    id: 1,
    title: "OpenAI Releases GPT-5: Major Leap in AI Capabilities",
    description: "OpenAI has announced GPT-5, boasting improved reasoning, memory, and reduced hallucinations.",
    fullText: "OpenAI released GPT-5 with significant improvements in memory handling, reduced hallucination, and enhanced logic reasoning...",
    source: "TechCrunch",
    date: "July 20, 2025",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
  },
  {
    id: 2,
    title: "AI Helping Detect Rare Diseases in Early Stages",
    description: "AI algorithms are assisting doctors in diagnosing rare diseases with higher accuracy.",
    fullText: "Doctors are now supported by machine learning algorithms that can detect subtle patterns in scans and symptoms...",
    source: "BBC Health",
    date: "July 18, 2025",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
  },
  {
     id: 3,
    title: "Google DeepMind Introduces Gemini 3",
    description: "Gemini 3 merges large language models with real-time reasoning for advanced problem solving.",
    fullText: "Doctors are now supported by machine learning algorithms that can detect subtle patterns in scans and symptoms...",
    source: "The Verge",
    date: "July 15, 2025",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
  },
  {
     id: 4,
    title: "Microsoft Copilot Expands Across Windows 12",
    description: "Microsoft's AI Copilot is now deeply integrated into Windows 12 for smarter user experiences.",
    fullText: "Doctors are now supported by machine learning algorithms that can detect subtle patterns in scans and symptoms...",
    source: "Microsoft Blog",
    date: "July 12, 2025",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
  },
  {
     id: 5,
    title: "NVIDIA’s AI Chips Power the Next Wave of Robotics",
    description: "NVIDIA’s new AI chip is revolutionizing robotics with faster real-time decision making.",
    fullText: "Doctors are now supported by machine learning algorithms that can detect subtle patterns in scans and symptoms...",
    source: "Wired",
    date: "July 10, 2025",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
  },
  {
     id: 6,
    title: "AI in Education: Tools That Are Changing Classrooms",
    description: "Teachers and students are adopting AI to personalize learning and automate tasks.",
    fullText: "Doctors are now supported by machine learning algorithms that can detect subtle patterns in scans and symptoms...",
    source: "EdTech Magazine",
    date: "July 8, 2025",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
  }
];


// const NewsHighlights = () => {
function NewsHighlights() {
   

  
  
  return (
    <div className="bg-[#020617] text-white py-16 px-6 lg:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold tracking-wide text-white mb-2 drop-shadow-[0_1px_6px_rgba(255,255,255,0.3)]">
          📰 News Highlights
        </h2>
        <div className="w-24 h-1 mx-auto bg-blue-500 rounded"></div>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {staticNews.map((news, index) => (
          <div
            key={index}
            className="bg-[#020617] rounded-xl p-6 border border-[#334155] shadow-md hover:shadow-blue-700/30 hover:scale-[1.02] transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-400">{news.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{news.description}</p>
            <div className="text-sm text-gray-400 mb-4 italic">{news.source} • {news.date}</div>
            {/* <a
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto text-sm text-blue-400 hover:underline"
            >
              Read more →
            </a> */}
             {/* <button
              onClick={() => onSelect(news.id)}
              className="text-sm text-blue-400 hover:underline"
            >
              Read more →
            </button> */}
             {/* <Link href={`/news/${news.id}`} className="text-sm text-blue-400 hover:underline">
                Read more →
            </Link>  */}
             <Link href={`/news/${news.id}`}>
            <button className="text-sm text-blue-400 hover:underline">Read more →</button>
          </Link>
             
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsHighlights;

// function NewsHighlights() {
//   const handleReadMore = (id: number) => {
//     window.location.href = `/NewsDetails.html?id=${id}`;
//   };

//   return (
//     <div className="bg-[#0f172a] text-white py-16 px-6 min-h-screen">
//       <h2 className="text-4xl font-extrabold text-center mb-8 text-blue-400">
//         📰 AI News Highlights
//       </h2>
//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {staticNews.map((news) => (
//           <div key={news.id} className="bg-[#1e293b] p-6 rounded-xl border border-[#334155] shadow hover:shadow-lg">
//             <h3 className="text-xl font-semibold mb-2 text-blue-300">{news.title}</h3>
//             <p className="text-gray-300 text-sm mb-4">{news.description}</p>
//             <div className="text-sm text-gray-400 mb-2 italic">
//               {news.source} • {news.date}
//             </div>
//             <button
//               onClick={() => handleReadMore(news.id)}
//               className="text-sm text-blue-400 hover:underline"
//             >
//               Read more →
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default NewsHighlights;
