// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// export default function BlogDashboard() {
//   const [activeTab, setActiveTab] = useState('weekly');
//   const [showAddBlog, setShowAddBlog] = useState(false);
//   const [newBlog, setNewBlog] = useState({
//     title: '',
//     content: '',
//     category: 'AI/ML',
//     tags: ''
//   });

//   // Sample blog data
//   const [blogs, setBlogs] = useState([
//     {
//       id: 1,
//       title: 'Understanding Neural Networks: A Deep Dive',
//       excerpt: 'Explore the fundamentals of neural networks and how they power modern AI applications...',
//       content: 'Neural networks are the backbone of modern artificial intelligence. In this comprehensive guide, we will explore how these complex systems work, their architecture, and practical applications in real-world scenarios.',
//       author: 'Dr. Sarah Chen',
//       date: '2024-01-15',
//       category: 'AI/ML',
//       tags: ['neural-networks', 'deep-learning', 'ai'],
//       views: 2847,
//       likes: 156,
//       comments: 23,
//       readTime: '8 min read',
//       image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
//     },
//     {
//       id: 2,
//       title: 'Python Data Science Libraries You Must Know',
//       excerpt: 'A comprehensive guide to essential Python libraries for data science and machine learning...',
//       content: 'Python has become the go-to language for data science. This article covers the most important libraries including NumPy, Pandas, Matplotlib, and Scikit-learn.',
//       author: 'Alex Thompson',
//       date: '2024-01-12',
//       category: 'Programming',
//       tags: ['python', 'data-science', 'libraries'],
//       views: 1923,
//       likes: 89,
//       comments: 15,
//       readTime: '6 min read',
//       image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600'
//     },
//     {
//       id: 3,
//       title: 'The Future of Computer Vision',
//       excerpt: 'Exploring emerging trends and technologies in computer vision and image recognition...',
//       content: 'Computer vision is rapidly evolving with new breakthroughs in image recognition, object detection, and visual understanding. Learn about the latest developments.',
//       author: 'Dr. Maria Garcia',
//       date: '2024-01-10',
//       category: 'AI/ML',
//       tags: ['computer-vision', 'image-recognition', 'future-tech'],
//       views: 3156,
//       likes: 234,
//       comments: 45,
//       readTime: '10 min read',
//       image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=600'
//     },
//     {
//       id: 4,
//       title: 'Natural Language Processing Breakthroughs',
//       excerpt: 'Recent advances in NLP and how they are transforming human-computer interaction...',
//       content: 'Natural Language Processing has seen remarkable progress with transformer models and large language models revolutionizing how machines understand human language.',
//       author: 'Dr. James Liu',
//       date: '2024-01-08',
//       category: 'AI/ML',
//       tags: ['nlp', 'transformers', 'language-models'],
//       views: 2654,
//       likes: 178,
//       comments: 32,
//       readTime: '7 min read',
//       image: 'https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=600'
//     },
//     {
//       id: 5,
//       title: 'Building Scalable Data Pipelines',
//       excerpt: 'Best practices for creating robust and scalable data processing pipelines...',
//       content: 'Learn how to design and implement data pipelines that can handle large volumes of data efficiently while maintaining reliability and performance.',
//       author: 'Prof. Michael Rodriguez',
//       date: '2024-01-05',
//       category: 'Data Science',
//       tags: ['data-pipelines', 'scalability', 'big-data'],
//       views: 1876,
//       likes: 92,
//       comments: 18,
//       readTime: '9 min read',
//       image: 'https://images.pexels.com/photos/7947721/pexels-photo-7947721.jpeg?auto=compress&cs=tinysrgb&w=600'
//     },
//     {
//       id: 6,
//       title: 'React Best Practices for 2024',
//       excerpt: 'Modern React development patterns and optimization techniques...',
//       content: 'Stay up-to-date with the latest React best practices, including hooks, performance optimization, and modern development patterns.',
//       author: 'John Anderson',
//       date: '2024-01-03',
//       category: 'Programming',
//       tags: ['react', 'javascript', 'web-development'],
//       views: 2234,
//       likes: 145,
//       comments: 28,
//       readTime: '5 min read',
//       image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600'
//     }
//   ]);

//   // Chart data for different time periods
//   const weeklyData = [
//     { name: 'Week 1', views: 1200, posts: 3, engagement: 85 },
//     { name: 'Week 2', views: 1800, posts: 5, engagement: 92 },
//     { name: 'Week 3', views: 1400, posts: 4, engagement: 78 },
//     { name: 'Week 4', views: 2200, posts: 6, engagement: 95 },
//     { name: 'Week 5', views: 1900, posts: 4, engagement: 88 },
//     { name: 'Week 6', views: 2600, posts: 7, engagement: 96 },
//     { name: 'Week 7', views: 2100, posts: 5, engagement: 91 },
//     { name: 'Week 8', views: 2800, posts: 8, engagement: 98 }
//   ];

//   const monthlyData = [
//     { name: 'Jan', views: 8900, posts: 25, engagement: 87 },
//     { name: 'Feb', views: 12400, posts: 32, engagement: 91 },
//     { name: 'Mar', views: 10800, posts: 28, engagement: 85 },
//     { name: 'Apr', views: 15600, posts: 35, engagement: 94 },
//     { name: 'May', views: 13200, posts: 30, engagement: 89 },
//     { name: 'Jun', views: 18900, posts: 42, engagement: 96 },
//     { name: 'Jul', views: 16700, posts: 38, engagement: 92 },
//     { name: 'Aug', views: 21300, posts: 45, engagement: 97 },
//     { name: 'Sep', views: 19800, posts: 41, engagement: 94 },
//     { name: 'Oct', views: 23400, posts: 48, engagement: 98 },
//     { name: 'Nov', views: 20900, posts: 43, engagement: 95 },
//     { name: 'Dec', views: 25600, posts: 52, engagement: 99 }
//   ];

//   const yearlyData = [
//     { name: '2020', views: 89000, posts: 180, engagement: 78 },
//     { name: '2021', views: 124000, posts: 245, engagement: 82 },
//     { name: '2022', views: 167000, posts: 320, engagement: 87 },
//     { name: '2023', views: 234000, posts: 425, engagement: 92 },
//     { name: '2024', views: 298000, posts: 520, engagement: 96 }
//   ];

//   // Category distribution data
//   const categoryData = [
//     { name: 'AI/ML', value: 45, color: '#6366f1' },
//     { name: 'Programming', value: 25, color: '#8b5cf6' },
//     { name: 'Data Science', value: 20, color: '#10b981' },
//     { name: 'Theory', value: 10, color: '#f59e0b' }
//   ];

//   const categories = ['AI/ML', 'Programming', 'Data Science', 'Theory'];

//   const getChartData = () => {
//     switch (activeTab) {
//       case 'weekly': return weeklyData;
//       case 'monthly': return monthlyData;
//       case 'yearly': return yearlyData;
//       default: return weeklyData;
//     }
//   };

//   const handleAddBlog = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (newBlog.title && newBlog.content) {
//       const blog = {
//         id: blogs.length + 1,
//         title: newBlog.title,
//         excerpt: newBlog.content.substring(0, 100) + '...',
//         content: newBlog.content,
//         author: 'You',
//         date: new Date().toISOString().split('T')[0],
//         category: newBlog.category,
//         tags: newBlog.tags.split(',').map(tag => tag.trim()),
//         views: 0,
//         likes: 0,
//         comments: 0,
//         readTime: Math.ceil(newBlog.content.split(' ').length / 200) + ' min read',
//         image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
//       };
//       setBlogs([blog, ...blogs]);
//       setNewBlog({ title: '', content: '', category: 'AI/ML', tags: '' });
//       setShowAddBlog(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
//       {/* Custom Scrollbar Styles */}
//       <style jsx global>{`
//         ::-webkit-scrollbar {
//           width: 8px;
//         }
//         ::-webkit-scrollbar-track {
//           background: rgba(17, 24, 39, 0.5);
//         }
//         ::-webkit-scrollbar-thumb {
//           background: linear-gradient(180deg, #6366f1, #8b5cf6);
//           border-radius: 4px;
//         }
//         ::-webkit-scrollbar-thumb:hover {
//           background: linear-gradient(180deg, #4f46e5, #7c3aed);
//         }
//       `}</style>

//       <div className="container mx-auto px-6 py-8 max-h-screen overflow-y-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
//                Blogs Dashboard
//             </h1>
//             <p className="text-gray-400">Share knowledge and insights about AI and technology</p>
//           </div>
//           <button
//             onClick={() => setShowAddBlog(true)}
//             className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
//           >
//             + Add New Blog
//           </button>
//         </div>

//         {/* Stats Overview */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//           <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-blue-300 text-sm">Total Blogs</p>
//                 <p className="text-2xl font-bold text-white">{blogs.length}</p>
//               </div>
//               <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center">
//                 <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-purple-300 text-sm">Total Views</p>
//                 <p className="text-2xl font-bold text-white">{blogs.reduce((sum, blog) => sum + blog.views, 0).toLocaleString()}</p>
//               </div>
//               <div className="w-12 h-12 bg-purple-500/30 rounded-lg flex items-center justify-center">
//                 <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-green-300 text-sm">Total Likes</p>
//                 <p className="text-2xl font-bold text-white">{blogs.reduce((sum, blog) => sum + blog.likes, 0)}</p>
//               </div>
//               <div className="w-12 h-12 bg-green-500/30 rounded-lg flex items-center justify-center">
//                 <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 backdrop-blur-sm border border-orange-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-orange-300 text-sm">Comments</p>
//                 <p className="text-2xl font-bold text-white">{blogs.reduce((sum, blog) => sum + blog.comments, 0)}</p>
//               </div>
//               <div className="w-12 h-12 bg-orange-500/30 rounded-lg flex items-center justify-center">
//                 <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Analytics Charts */}
//         <div className="mb-8">
//           <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
//             <div className="flex items-center justify-between mb-8">
//               <h2 className="text-3xl font-bold text-white">Blog Analytics</h2>
//               <div className="flex space-x-2">
//                 {['weekly', 'monthly', 'yearly'].map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
//                       activeTab === tab
//                         ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
//                         : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
//                     }`}
//                   >
//                     {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
//               {/* Views Chart */}
//               <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50">
//                 <h3 className="text-xl font-semibold text-white mb-6">Blog Views</h3>
//                 <ResponsiveContainer width="100%" height={400}>
//                   <AreaChart data={getChartData()} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
//                     <defs>
//                       <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
//                         <stop offset="95%" stopColor="#6366f1" stopOpacity={0.1}/>
//                       </linearGradient>
//                     </defs>
//                     <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
//                     <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
//                     <YAxis stroke="#9ca3af" fontSize={12} />
//                     <Tooltip 
//                       contentStyle={{ 
//                         backgroundColor: '#1f2937', 
//                         border: '1px solid #374151',
//                         borderRadius: '8px',
//                         color: '#ffffff'
//                       }} 
//                     />
//                     <Area 
//                       type="monotone" 
//                       dataKey="views" 
//                       stroke="#6366f1" 
//                       strokeWidth={3}
//                       fill="url(#viewsGradient)"
//                       dot={{ fill: '#6366f1', strokeWidth: 2, r: 5 }}
//                     />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               </div>

//               {/* Posts Chart */}
//               <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50">
//                 <h3 className="text-xl font-semibold text-white mb-6">Blog Posts</h3>
//                 <ResponsiveContainer width="100%" height={400}>
//                   <BarChart data={getChartData()} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
//                     <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
//                     <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
//                     <YAxis stroke="#9ca3af" fontSize={12} />
//                     <Tooltip 
//                       contentStyle={{ 
//                         backgroundColor: '#1f2937', 
//                         border: '1px solid #374151',
//                         borderRadius: '8px',
//                         color: '#ffffff'
//                       }} 
//                     />
//                     <Bar dataKey="posts" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
//               {/* Engagement Chart */}
//               <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50">
//                 <h3 className="text-xl font-semibold text-white mb-6">Engagement Rate</h3>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <LineChart data={getChartData()} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
//                     <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
//                     <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
//                     <YAxis stroke="#9ca3af" fontSize={12} />
//                     <Tooltip 
//                       contentStyle={{ 
//                         backgroundColor: '#1f2937', 
//                         border: '1px solid #374151',
//                         borderRadius: '8px',
//                         color: '#ffffff'
//                       }} 
//                     />
//                     <Line 
//                       type="monotone" 
//                       dataKey="engagement" 
//                       stroke="#10b981" 
//                       strokeWidth={3}
//                       dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>

//               {/* Category Distribution */}
//               <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50">
//                 <h3 className="text-xl font-semibold text-white mb-6">Category Distribution</h3>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <PieChart>
//                     <Pie
//                       data={categoryData}
//                       cx="50%"
//                       cy="50%"
//                       innerRadius={60}
//                       outerRadius={120}
//                       paddingAngle={5}
//                       dataKey="value"
//                     >
//                       {categoryData.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={entry.color} />
//                       ))}
//                     </Pie>
//                     <Tooltip 
//                       contentStyle={{ 
//                         backgroundColor: '#1f2937', 
//                         border: '1px solid #374151',
//                         borderRadius: '8px',
//                         color: '#ffffff'
//                       }} 
//                     />
//                   </PieChart>
//                 </ResponsiveContainer>
//                 <div className="grid grid-cols-2 gap-3 mt-6">
//                   {categoryData.map((item, index) => (
//                     <div key={index} className="flex items-center space-x-3">
//                       <div 
//                         className="w-4 h-4 rounded-full"
//                         style={{ backgroundColor: item.color }}
//                       ></div>
//                       <span className="text-sm text-gray-300 font-medium">{item.name}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Blog Posts */}
//         <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
//           <h2 className="text-3xl font-bold text-white mb-6">Recent Blog Posts</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {blogs.map((blog) => (
//               <div 
//                 key={blog.id} 
//                 className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-blue-500/50"
//               >
//                 <div className="relative w-full h-48">
//                   <Image
//                     src={blog.image}
//                     alt={blog.title}
//                     fill
//                     className="object-cover rounded-t-xl"
//                     sizes="(max-width: 768px) 100vw, 33vw"
//                     priority={blog.id === 1}
//                   />
//                   <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-white">
//                     {blog.readTime}
//                   </div>
//                   <div className="absolute bottom-4 left-4 bg-blue-600/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-white">
//                     {blog.category}
//                   </div>
//                 </div>
                
//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-xs text-gray-400">{blog.date}</span>
//                     <span className="text-xs text-gray-400">by {blog.author}</span>
//                   </div>
                  
//                   <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{blog.title}</h3>
//                   <p className="text-gray-400 text-sm mb-4 line-clamp-3">{blog.excerpt}</p>
                  
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {blog.tags.slice(0, 3).map((tag, index) => (
//                       <span 
//                         key={index}
//                         className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full"
//                       >
//                         #{tag}
//                       </span>
//                     ))}
//                   </div>
                  
//                   <div className="flex items-center justify-between text-sm text-gray-400">
//                     <div className="flex items-center space-x-4">
//                       <div className="flex items-center">
//                         <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                         </svg>
//                         {blog.views}
//                       </div>
//                       <div className="flex items-center">
//                         <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//                         </svg>
//                         {blog.likes}
//                       </div>
//                       <div className="flex items-center">
//                         <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                         </svg>
//                         {blog.comments}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Add Blog Modal */}
//         {showAddBlog && (
//           <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//             <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="text-2xl font-bold text-white">Add New Blog Post</h3>
//                 <button
//                   onClick={() => setShowAddBlog(false)}
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>
              
//               <form onSubmit={handleAddBlog} className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
//                   <input
//                     type="text"
//                     value={newBlog.title}
//                     onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
//                     className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Enter blog title..."
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
//                   <select
//                     value={newBlog.category}
//                     onChange={(e) => setNewBlog({...newBlog, category: e.target.value})}
//                     className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   >
//                     {categories.map(category => (
//                       <option key={category} value={category}>{category}</option>
//                     ))}
//                   </select>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">Tags (comma separated)</label>
//                   <input
//                     type="text"
//                     value={newBlog.tags}
//                     onChange={(e) => setNewBlog({...newBlog, tags: e.target.value})}
//                     className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="ai, machine-learning, python..."
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">Content</label>
//                   <textarea
//                     value={newBlog.content}
//                     onChange={(e) => setNewBlog({...newBlog, content: e.target.value})}
//                     rows={8}
//                     className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//                     placeholder="Write your blog content here..."
//                     required
//                   />
//                 </div>
                
//                 <div className="flex space-x-4">
//                   <button
//                     type="submit"
//                     className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
//                   >
//                     Publish Blog
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => setShowAddBlog(false)}
//                     className="flex-1 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition-all duration-200"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
'use client';
import { createClient } from "@/lib/supabase/client";
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Image from 'next/image';
import { usePathname } from 'next/navigation'
const supabase = createClient();

type ChartRow = {
  period: string;
  view_count: number;
};
type CategoryData = {
  name: string;
  // value: number;
   post_count: number;   // e.g., 3
  color: string; 
};
const COLORS = ["#6366f1", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

const getColor = (index: number) => {
  return COLORS[index % COLORS.length];
};
export default function BlogDashboard() {
  // const [activeTab, setActiveTab] = useState('weekly');
  const [activeTab, setActiveTab] = useState<"weekly" | "monthly" | "yearly">("monthly");
  const [chartData, setChartData] = useState<{ name: string; views: number }[]>([]);
  const [postData, setPostData] = useState<{ name: string; posts: number }[]>([]);
  const [engagementData, setEngagementData] = useState<{ name: string; engagement: number }[]>([]);
  // const [categoryData, setCategoryData] = useState([]);
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [showAddBlog, setShowAddBlog] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: '',
    content: '',
    category: 'AI/ML',
    tags: ''
  });
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin-dashboard');

      useEffect(() => {
     const fetchData = async () => {
       const { data, error } = await supabase
         .from("blog_analytics")
         .select("period, view_count")
         .eq("type", "views")
         .eq("granularity", activeTab)
         .order("period");

       if (error) {
         console.error("Error fetching chart data:", error);
         return;
       }

       const formatted = (data || []).map((item: ChartRow) => ({
         name: new Date(item.period).toLocaleDateString("en-GB", {
           year: "numeric",
           month: activeTab === "yearly" ? "numeric" : "short",
           day: activeTab === "weekly" ? "numeric" : undefined,
         }),
         views: item.view_count,
       }));

       setChartData(formatted);
     };

     fetchData();
   }, [activeTab]);

     useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from("blog_analytics")
        .select("period, post_count")
        .eq("type", "posts")
        .eq("granularity", activeTab)
        .order("period");

      const formatted = (data || []).map((item) => ({
        name: new Date(item.period).toLocaleDateString("en-GB", {
          year: "numeric",
          month: activeTab === "yearly" ? "numeric" : "short",
          day: activeTab === "weekly" ? "numeric" : undefined,
        }),
        posts: item.post_count,
      }));

      setPostData(formatted);
    };

    fetchPosts();
  }, [activeTab]);

  useEffect(() => {
    const fetchEngagement = async () => {
      const { data } = await supabase
        .from("blog_analytics")
        .select("period, engagement_rate")
        .eq("type", "engagement")
        .eq("granularity", activeTab)
        .order("period");

      const formatted = (data || []).map((item) => ({
        name: new Date(item.period).toLocaleDateString("en-GB", {
          year: "numeric",
          month: activeTab === "yearly" ? "numeric" : "short",
          day: activeTab === "weekly" ? "numeric" : undefined,
        }),
        engagement: parseFloat(item.engagement_rate || 0),
      }));

      setEngagementData(formatted);
    };

    fetchEngagement();
  }, [activeTab]);
  useEffect(() => {
    const fetchCategory = async () => {
      const { data } = await supabase
        .from("blog_analytics")
        .select("category, post_count")
        .eq("type", "category");

      // setCategoryData(
      //   (data || []).map((item) => ({
      //     name: item.category,
      //     post_count: item.view_count,
      //   }))
      // );
      setCategoryData(
      (data || []).map((item, index) => ({
        name: item.category,
        post_count: item.post_count,
        color: getColor(index)
      }))
    );
    };

    fetchCategory();
  }, []);

  
   

  // Sample blog data
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Understanding Neural Networks: A Deep Dive',
      excerpt: 'Explore the fundamentals of neural networks and how they power modern AI applications...',
      content: 'his comprehensive guide, we will explore how these complex systems work, their architecture, and practical applications in real-world scenarios.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      category: 'AI/ML',
      tags: ['neural-networks', 'deep-learning', 'ai'],
      views: 2847,
      likes: 156,
      comments: 23,
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'Python Data Science Libraries You Must Know',
      excerpt: 'A comprehensive guide to essential Python libraries for data science and machine learning...',
      content: 'Python has become the go-to language for data science. This article covers the most important libraries including NumPy, Pandas, Matplotlib, and Scikit-learn.',
      author: 'Alex Thompson',
      date: '2024-01-12',
      category: 'Programming',
      tags: ['python', 'data-science', 'libraries'],
      views: 1923,
      likes: 89,
      comments: 15,
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'The Future of Computer Vision',
      excerpt: 'Exploring emerging trends and technologies in computer vision and image recognition...',
      content: 'Computer vision is rapidly evolving with new breakthroughs in image recognition, object detection, and visual understanding. Learn about the latest developments.',
      author: 'Dr. Maria Garcia',
      date: '2024-01-10',
      category: 'AI/ML',
      tags: ['computer-vision', 'image-recognition', 'future-tech'],
      views: 3156,
      likes: 234,
      comments: 45,
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'Natural Language Processing Breakthroughs',
      excerpt: 'Recent advances in NLP and how they are transforming human-computer interaction...',
      content: 'Natural Language Processing has seen remarkable progress with transformer models and large language models revolutionizing how machines understand human language.',
      author: 'Dr. James Liu',
      date: '2024-01-08',
      category: 'AI/ML',
      tags: ['nlp', 'transformers', 'language-models'],
      views: 2654,
      likes: 178,
      comments: 32,
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      title: 'Building Scalable Data Pipelines',
      excerpt: 'Best practices for creating robust and scalable data processing pipelines...',
      content: 'Learn how to design and implement data pipelines that can handle large volumes of data efficiently while maintaining reliability and performance.',
      author: 'Prof. Michael Rodriguez',
      date: '2024-01-05',
      category: 'Data Science',
      tags: ['data-pipelines', 'scalability', 'big-data'],
      views: 1876,
      likes: 92,
      comments: 18,
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/7947721/pexels-photo-7947721.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      title: 'React Best Practices for 2024',
      excerpt: 'Modern React development patterns and optimization techniques...',
      content: 'Stay up-to-date with the latest React best practices, including hooks, performance optimization, and modern development patterns.',
      author: 'John Anderson',
      date: '2024-01-03',
      category: 'Programming',
      tags: ['react', 'javascript', 'web-development'],
      views: 2234,
      likes: 145,
      comments: 28,
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]);

  // Chart data for different time periods
  // const weeklyData = [
  //   { name: 'Week 1', views: 1200, posts: 3, engagement: 85 },
  //   { name: 'Week 2', views: 1800, posts: 5, engagement: 92 },
  //   { name: 'Week 3', views: 1400, posts: 4, engagement: 78 },
  //   { name: 'Week 4', views: 2200, posts: 6, engagement: 95 },
  //   { name: 'Week 5', views: 1900, posts: 4, engagement: 88 },
  //   { name: 'Week 6', views: 2600, posts: 7, engagement: 96 },
  //   { name: 'Week 7', views: 2100, posts: 5, engagement: 91 },
  //   { name: 'Week 8', views: 2800, posts: 8, engagement: 98 }
  // ];

  // const monthlyData = [
  //   { name: 'Jan', views: 8900, posts: 25, engagement: 87 },
  //   { name: 'Feb', views: 12400, posts: 32, engagement: 91 },
  //   { name: 'Mar', views: 10800, posts: 28, engagement: 85 },
  //   { name: 'Apr', views: 15600, posts: 35, engagement: 94 },
  //   { name: 'May', views: 13200, posts: 30, engagement: 89 },
  //   { name: 'Jun', views: 18900, posts: 42, engagement: 96 },
  //   { name: 'Jul', views: 16700, posts: 38, engagement: 92 },
  //   { name: 'Aug', views: 21300, posts: 45, engagement: 97 },
  //   { name: 'Sep', views: 19800, posts: 41, engagement: 94 },
  //   { name: 'Oct', views: 23400, posts: 48, engagement: 98 },
  //   { name: 'Nov', views: 20900, posts: 43, engagement: 95 },
  //   { name: 'Dec', views: 25600, posts: 52, engagement: 99 }
  // ];

  // const yearlyData = [
  //   { name: '2020', views: 89000, posts: 180, engagement: 78 },
  //   { name: '2021', views: 124000, posts: 245, engagement: 82 },
  //   { name: '2022', views: 167000, posts: 320, engagement: 87 },
  //   { name: '2023', views: 234000, posts: 425, engagement: 92 },
  //   { name: '2024', views: 298000, posts: 520, engagement: 96 }
  // ];

  // Category distribution data
  // const categoryData = [
  //   { name: 'AI/ML', value: 45, color: '#6366f1' },
  //   { name: 'Programming', value: 25, color: '#8b5cf6' },
  //   { name: 'Data Science', value: 20, color: '#10b981' },
  //   { name: 'Theory', value: 10, color: '#f59e0b' }
  // ];

  const categories = ['AI/ML', 'Programming', 'Data Science', 'Theory'];

  // const getChartData = () => {
  //   switch (activeTab) {
  //     case 'weekly': return weeklyData;
  //     case 'monthly': return monthlyData;
  //     case 'yearly': return yearlyData;
  //     default: return weeklyData;
  //   }
  // };

  // const handleAddBlog = (e) => {
  //   e.preventDefault();
  //   if (newBlog.title && newBlog.content) {
  //     const blog = {
  //       id: blogs.length + 1,
  //       title: newBlog.title,
  //       excerpt: newBlog.content.substring(0, 100) + '...',
  //       content: newBlog.content,
  //       author: 'You',
  //       date: new Date().toISOString().split('T')[0],
  //       category: newBlog.category,
  //       tags: newBlog.tags.split(',').map(tag => tag.trim()),
  //       views: 0,
  //       likes: 0,
  //       comments: 0,
  //       readTime: Math.ceil(newBlog.content.split(' ').length / 200) + ' min read',
  //       image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
  //     };
  //     setBlogs([blog, ...blogs]);
  //     setNewBlog({ title: '', content: '', category: 'AI/ML', tags: '' });
  //     setShowAddBlog(false);
  //   }
  // };
  
  const fetchBlogs = async () => {
    const { data, error } = await supabase
      .from("user_blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  

const handleAddBlog = async (e : React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (newBlog.title && newBlog.content) {
    
fetchBlogs();

    const blog = {
      title: newBlog.title,
      excerpt: newBlog.content.substring(0, 100) + '...',
      content: newBlog.content,
      author: 'You', // optionally use user.email or user.name if available
      date: new Date().toISOString().split('T')[0],
      category: newBlog.category,
      tags: newBlog.tags.split(',').map((tag) => tag.trim()),
      views: 0,
      likes: 0,
       comments: 0,
      readTime: Math.ceil(newBlog.content.split(' ').length / 200) + ' min read',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      // user_id: user?.id,
      
    };

    const { data , error } = await supabase.from('user_blogs').insert([blog]);
      
    // if (error) {
    //   console.error('Error saving blog:', error.message);
    //   alert('Error saving blog. Check console.');
    //   return;
    // }
    
if (error ) {
  console.error("❌ Supabase Error:");
  console.error("Message:", error.message);
  console.error("Details:", error.details);
  console.error("Hint:", error.hint);
  console.error("Code:", error.code);
  alert('Error saving blog. Check console for details.');
  return;
}

    // Optionally update local state to show immediately
    

      setBlogs([data, ...blogs]);

    // Clear the form
    setNewBlog({ title: '', content: '', category: 'AI/ML', tags: '' });
    setShowAddBlog(false);
    alert('Blog published successfully!');
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(17, 24, 39, 0.5);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #6366f1, #8b5cf6);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #4f46e5, #7c3aed);
        }
      `}</style>

      <div className="container mx-auto px-6 py-8 max-h-screen overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
               Blogs Dashboard
            </h1>
            <p className="text-gray-400">Share knowledge and insights about AI and technology</p>
          </div>
          {isAdmin && (
          <button
            onClick={() => setShowAddBlog(true)}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            + Add New Blog
          </button>
          )}
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-300 text-sm">Total Blogs</p>
                <p className="text-2xl font-bold text-white">{blogs.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-300 text-sm">Total Views</p>
                <p className="text-2xl font-bold text-white">{blogs.filter(blog => blog && blog.views != null) .reduce((sum, blog) => sum + blog.views, 0).toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-purple-500/30 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-300 text-sm">Total Likes</p>
                <p className="text-2xl font-bold text-white">{blogs .filter(blog => blog && blog.likes != null).reduce((sum, blog) => sum + blog.likes, 0).toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-green-500/30 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 backdrop-blur-sm border border-orange-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-300 text-sm">Comments</p>
                <p className="text-2xl font-bold text-white">{blogs?.reduce((sum, blog) => sum + (blog?.comments || 0), 0).toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-orange-500/30 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Charts */}
        <div className="mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Blog Analytics</h2>
              <div className="flex space-x-2">
                {['weekly', 'monthly', 'yearly'].map((tab) => (
                  <button
                    key={tab}
                    // onClick={() => setActiveTab(tab)}
                    // className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    //   activeTab === tab
                    //     ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    //     : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    // }`}
                    onClick={() => setActiveTab(tab as "weekly" | "monthly" | "yearly")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
              {/* Views Chart */}
              <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-6">Blog Views</h3>
                
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <defs>
                      <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                    <YAxis stroke="#9ca3af" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#ffffff'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="views" 
                      stroke="#6366f1" 
                      strokeWidth={3}
                      fill="url(#viewsGradient)"
                      dot={{ fill: '#6366f1', strokeWidth: 2, r: 5 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Posts Chart */}
              <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-6">Blog Posts</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={postData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                    <YAxis stroke="#9ca3af" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#ffffff'
                      }} 
                    />
                    <Bar dataKey="posts" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Engagement Chart */}
              <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-6">Engagement Rate</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={engagementData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                    <YAxis stroke="#9ca3af" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#ffffff'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="engagement" 
                      stroke="#10b981" 
                      strokeWidth={3}
                      dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Category Distribution */}
              <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-6">Category Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="post_count"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#ffffff'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {categoryData.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm text-gray-300 font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Recent Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs .filter(blog => blog !== null && blog !== undefined).map((blog) => (
              <div 
                key={blog.id} 
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-blue-500/50"
              >
                <div className="relative">
                  <Image
                    src={blog.image || "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600"} 
                     alt={blog.title || " Blog Title"}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-white">
                    {blog.readTime}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-blue-600/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-white">
                    {blog.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">{blog.date}</span>
                    <span className="text-xs text-gray-400">by {blog.author}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{blog.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {blog.views}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        {blog.likes}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {blog.comments}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Blog Modal */}
        {showAddBlog && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Add New Blog Post</h3>
                <button
                  onClick={() => setShowAddBlog(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleAddBlog} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                  <input
                    type="text"
                    value={newBlog.title}
                    onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter blog title..."
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={newBlog.category}
                    onChange={(e) => setNewBlog({...newBlog, category: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={newBlog.tags}
                    onChange={(e) => setNewBlog({...newBlog, tags: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="ai, machine-learning, python..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Content</label>
                  <textarea
                    value={newBlog.content}
                    onChange={(e) => setNewBlog({...newBlog, content: e.target.value})}
                    rows={8}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Write your blog content here..."
                    required
                  />
                </div>
                
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  >
                    Publish Blog
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddBlog(false)}
                    className="flex-1 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition-all duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}