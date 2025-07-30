'use client';
// Analytics Data
// const weeklyProgressData = [

//   { name: 'Mon', completed: 2, started: 1, hours: 3.5 },
//   { name: 'Tue', completed: 1, started: 2, hours: 4.2 },
//   { name: 'Wed', completed: 3, started: 1, hours: 5.1 },
//   { name: 'Thu', completed: 2, started: 3, hours: 3.8 },
//   { name: 'Fri', completed: 4, started: 2, hours: 6.2 },
//   { name: 'Sat', completed: 1, started: 1, hours: 2.5 },
//   { name: 'Sun', completed: 2, started: 2, hours: 4.0 },
// ];

// const monthlyData = [
//   { name: 'Jan', courses: 12, completed: 8, hours: 45 },
//   { name: 'Feb', courses: 15, completed: 11, hours: 52 },
//   { name: 'Mar', courses: 18, completed: 14, hours: 68 },
//   { name: 'Apr', courses: 22, completed: 18, hours: 75 },
//   { name: 'May', courses: 25, completed: 21, hours: 82 },
//   { name: 'Jun', courses: 28, completed: 24, hours: 95 },
// ];

// const categoryData = [
//   { name: 'AI/ML', value: 35, color: '#3b82f6' },
//   { name: 'Web Dev', value: 25, color: '#10b981' },
//   { name: 'Programming', value: 20, color: '#8b5cf6' },
//   { name: 'Backend', value: 12, color: '#f59e0b' },
//   { name: 'Data Science', value: 8, color: '#ef4444' },
// ];

// const initialCourses = [
//   {
//     id: 1,
//     title: 'Understanding Neural Networks: A Deep Dive',
//     description: 'Explore the fundamentals of neural networks and how they power modern AI applications. Learn about backpropagation, activation functions, and deep learning architectures.',
//     author: 'Dr. Sarah Chen',
//     date: '2024-01-15',
//     readTime: '8 min read',
//     category: 'AI/ML',
//     image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
//     tags: ['neural-networks', 'deep-learning', 'ai'],
//     views: 2847,
//     likes: 156,
//     comments: 23,
//     progress: 0,
//     difficulty: 'Advanced',
//     duration: '6 weeks'
//   },
//   {
//     id: 2,
//     title: 'Python Data Science Libraries You Must Know',
//     description: 'A comprehensive guide to essential Python libraries for data science and machine learning including NumPy, Pandas, Matplotlib, and Scikit-learn.',
//     author: 'Alex Thompson',
//     date: '2024-01-12',
//     readTime: '6 min read',
//     category: 'Programming',
//     image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
//     tags: ['python', 'data-science', 'libraries'],
//     views: 1923,
//     likes: 89,
//     comments: 15,
//     progress: 0,
//     difficulty: 'Intermediate',
//     duration: '4 weeks'
//   },
//   {
//     id: 3,
//     title: 'The Future of Computer Vision',
//     description: 'Exploring emerging trends and technologies in computer vision and image recognition. Discover how AI is revolutionizing visual understanding.',
//     author: 'Dr. Maria Garcia',
//     date: '2024-01-10',
//     readTime: '10 min read',
//     category: 'AI/ML',
//     image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
//     tags: ['computer-vision', 'image-recognition', 'future-tech'],
//     views: 3156,
//     likes: 234,
//     comments: 45,
//     progress: 0,
//     difficulty: 'Advanced',
//     duration: '8 weeks'
//   },
//   {
//     id: 4,
//     title: 'Machine Learning Algorithms Explained',
//     description: 'A beginner-friendly guide to understanding different machine learning algorithms, from linear regression to neural networks.',
//     author: 'John Smith',
//     date: '2024-01-08',
//     readTime: '7 min read',
//     category: 'AI/ML',
//     image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800',
//     tags: ['machine-learning', 'algorithms', 'beginner'],
//     views: 1654,
//     likes: 98,
//     comments: 12,
//     progress: 0,
//     difficulty: 'Beginner',
//     duration: '5 weeks'
//   },
//   {
//     id: 5,
//     title: 'Web Development with React & Next.js',
//     description: 'Learn modern web development techniques using React and Next.js framework. Build scalable and performant web applications.',
//     author: 'Emily Johnson',
//     date: '2024-01-05',
//     readTime: '9 min read',
//     category: 'Web Dev',
//     image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
//     tags: ['react', 'nextjs', 'web-development'],
//     views: 2341,
//     likes: 187,
//     comments: 34,
//     progress: 0,
//     difficulty: 'Intermediate',
//     duration: '7 weeks'
//   },
//   {
//     id: 6,
//     title: 'Node.js Backend Development',
//     description: 'Master backend development with Node.js and build scalable server applications. Learn about APIs, databases, and server architecture.',
//     author: 'Michael Brown',
//     date: '2024-01-03',
//     readTime: '5 min read',
//     category: 'Backend',
//     image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
//     tags: ['nodejs', 'backend', 'server'],
//     views: 1876,
//     likes: 143,
//     comments: 28,
//     progress: 0,
//     difficulty: 'Intermediate',
//     duration: '6 weeks'
//   },
//   {
//     id: 7,
//     title: 'Advanced CSS Techniques and Animations',
//     description: 'Dive deep into advanced CSS concepts including Grid, Flexbox, animations, and modern layout techniques for stunning web designs.',
//     author: 'Lisa Wang',
//     date: '2024-01-01',
//     readTime: '12 min read',
//     category: 'Web Dev',
//     image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
//     tags: ['css', 'animations', 'web-design'],
//     views: 2156,
//     likes: 178,
//     comments: 31,
//     progress: 0,
//     difficulty: 'Advanced',
//     duration: '5 weeks'
//   },
//   {
//     id: 8,
//     title: 'Database Design and Optimization',
//     description: 'Learn the fundamentals of database design, normalization, indexing, and query optimization for better application performance.',
//     author: 'Robert Davis',
//     date: '2023-12-28',
//     readTime: '11 min read',
//     category: 'Backend',
//     image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
//     tags: ['database', 'sql', 'optimization'],
//     views: 1789,
//     likes: 134,
//     comments: 19,
//     progress: 0,
//     difficulty: 'Intermediate',
//     duration: '4 weeks'
//   }
// ];


import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import Image from 'next/image';
import axios from 'axios';
import { usePathname } from 'next/navigation'
import { createClient } from "@/lib/supabase/client";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";


type Course = {
  id: number;
  title: string;
  description: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  difficulty: string;
  duration: string;
  date: string;
  views: number;
  likes: number;
  comments: number;
  progress: number;
  instructor: string;
   price: number;
   duration_weeks: number;
   thumbnail_url: string;
   video_url: string;
};

export default function LearningPage() {
  // type Course = typeof initialCourses[number];
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [formData, setFormData] = useState<Partial<Course>>({});
  const [progressData, setProgressData] = useState<
  { name: string; completed: number; started: number }[]
>([]);

const [weeklyProgressData, setWeeklyProgressData] = useState<
  { name: string; hours: number }[]
>([]);
const [categoryData, setCategoryData] = useState<
  { name: string; value: number; color: string }[]
>([]);

  const supabase = createClient();
  const [courses, setCourses] = useState<Course[]>([]);
  const [myCourses, setMyCourses] = useState<Course[]>([]);
  const [isAddCourseOpen, setIsAddCourseOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [timeframe, setTimeframe] = useState('weekly');
  const [courseForm, setCourseForm] = useState({
    title: '',
    description: '',
    author: '',
    readTime: '',
    category: '',
    image: '',
    tags: '',
    difficulty: '',
    duration: '',
  });
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin-dashboard');

  useEffect(() => {
  const fetchProgressData = async () => {
    const { data } = await supabase
      .from("learning_analytics")
      .select("name, completed, started")
      .eq("granularity", timeframe)
      .order("date");

    setProgressData(data || []);
  };

  const fetchStudyHours = async () => {
    const { data } = await supabase
      .from("learning_analytics")
      .select("name, hours")
      .eq("type", "study_hours")
      .order("date");

    setWeeklyProgressData(data || []);
  };

  const fetchCategories = async () => {
    const { data } = await supabase
      .from("learning_analytics")
      .select("name, color")
      .eq("type", "category");

    setCategoryData(
      (data || []).map((item) => ({
        name: item.name,
        value: 1, // or count if available
        color: item.color,
      }))
    );
  };

  fetchProgressData();
  fetchStudyHours();
  fetchCategories();
}, [timeframe, supabase]);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/api/courses?all=true');
        console.log("response ", response)
        setCourses(response.data.courses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    // if (activeTab === 'all-courses') {
    fetchCourses();
    // }
  }, []);

  const handleInputChange = (field: keyof typeof courseForm, value: string) => {
    setCourseForm(prev => ({ ...prev, [field]: value }));
  };

  console.log(courses, "all couurses ")

//   const handleSubmit = () => {
//     const newCourse = {
//       id: Date.now(),
//       ...courseForm,
//       date: new Date().toISOString().split('T')[0],
//       tags: courseForm.tags.split(',').map(tag => tag.trim()),
//       views: 0,
//       likes: 0,
//       comments: 0,
//       progress: 0
//     };
//      const { data, error } = await supabase.from("courses").insert([newCourse]);
//      if (error) {
//     console.error("Failed to add course:", error.message);
//     return;
//   }

//     // setCourses(prev => [newCourse, ...prev]);
// //     
// setCourses(prev => [...prev, { ...newCourse, id: data[0].id } as Course]);
//   setIsAddCourseOpen(false);

//   // Reset form
//   setCourseForm({
//     title: '',
//     description: '',
//     author: '',
//     readTime: '',
//     category: '',
//     image: '',
//     tags: '',
//     difficulty: '',
//     duration: ''
//   });
// };

const handleSubmit = async () => {
  
  const isFormIncomplete = Object.values(courseForm).some(value => value.trim() === '');

  if (isFormIncomplete) {
    alert("Please fill in all the fields before submitting.");
    return;
  }
  const newCourse = {
     ...courseForm,
    
    // date: new Date().toISOString().split('T')[0],
    tags: courseForm.tags.split(',').map(tag => tag.trim()),
    views: 0,
    likes: 0,
    comments: 0,
    // progress: 0
  };

  const { data: insertedCourses, error } = await supabase
    .from("courses")
    .insert([newCourse])
    .select(); // To get inserted row(s) back

  if (error) {
    console.error("Failed to add course:", error.message);
    return;
  }

  if (insertedCourses && insertedCourses.length > 0) {
    setCourses(prev => [...prev, insertedCourses[0] as Course]);
  }

  setIsAddCourseOpen(false);

  // Reset form
  setCourseForm({
    title: '',
    description: '',
    author: '',
    readTime: '',
    category: '',
    image: '',
    tags: '',
     difficulty: '',
    duration: ''
  });
};

  const handleDelete = async (courseId: number) => {
    const { error } = await supabase.from("courses").delete().eq("id", courseId);

    if (error) {
      console.error("Failed to delete course:", error.message);
    } else {
      setCourses((prev) => prev.filter((c) => c.id !== courseId));
    }
  };

  const handleUpdate = (course: Course) => {
    setSelectedCourse(course);
    setFormData(course);
    setIsUpdateOpen(true);
  };


  // const addToMyLearning = (course: Course) => {
  //   if (!myCourses.find(c => c.id === course.id)) {
  //     setMyCourses(prev => [...prev, { ...course, enrolledDate: new Date().toISOString().split('T')[0] }]);
  //   }
  // };

  const removeFromMyLearning = (courseId: number) => {
    setMyCourses(prev => prev.filter(course => course.id !== courseId));
  };

  interface UpdateProgressFn {
    (courseId: number, progress: number): void;
  }

  const updateProgress: UpdateProgressFn = (courseId, progress) => {
    setMyCourses(prev =>
      prev.map(course =>
        course.id === courseId ? { ...course, progress } : course
      )
    );
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'AI/ML': 'bg-blue-500',
      'Programming': 'bg-purple-500',
      'Web Dev': 'bg-green-500',
      'Backend': 'bg-orange-500',
      'Data Science': 'bg-red-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  // interface DifficultyColors {
  //   [key: string]: string;
  //   Beginner: string;
  //   Intermediate: string;
  //   Advanced: string;
  // }

  // const getDifficultyColor = (difficulty: string): string => {
  //   const colors: DifficultyColors = {
  //     'Beginner': 'bg-green-900/50 text-green-300 border-green-700',
  //     'Intermediate': 'bg-yellow-900/50 text-yellow-300 border-yellow-700',
  //     'Advanced': 'bg-red-900/50 text-red-300 border-red-700'
  //   };
  //   return colors[difficulty] || 'bg-gray-900/50 text-gray-300 border-gray-700';
  // };

  // const getAnalyticsData = () => {
  //   switch (timeframe) {
  //     case 'monthly': return monthlyData;
  //     default: return weeklyProgressData;
  //   }
  // };

  const submitUpdate = async () => {
    if (!selectedCourse) return;

    const { error } = await supabase
      .from("courses")
      .update({
        ...formData,
        updated_at: new Date().toISOString(),
      })
      .eq("id", selectedCourse.id);

    if (error) {
      console.error("Update failed:", error.message);
    } else {
      setCourses((prev) =>
        prev.map((c) => (c.id === selectedCourse.id ? { ...c, ...formData } : c))
      );
      setIsUpdateOpen(false);
    }
  };


  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            {/* Analytics Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 border-blue-800/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-300 text-sm font-medium">Total Courses</p>
                      <p className="text-3xl font-bold text-white">{courses?.length}</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-400 text-xl font-bold">📚</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-900/50 to-green-800/30 border-green-800/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-300 text-sm font-medium">My Courses</p>
                      <p className="text-3xl font-bold text-white">{myCourses.length}</p>
                    </div>
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-green-400 text-xl font-bold">🎓</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-purple-800/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-300 text-sm font-medium">Completed</p>
                      <p className="text-3xl font-bold text-white">{myCourses.filter(c => c.progress === 100).length}</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-purple-400 text-xl font-bold">✅</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-900/50 to-orange-800/30 border-orange-800/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-300 text-sm font-medium">Avg. Progress</p>
                      <p className="text-3xl font-bold text-white">
                        {myCourses.length > 0 ? Math.round(myCourses.reduce((acc, c) => acc + c.progress, 0) / myCourses.length) : 0}%
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-orange-400 text-xl font-bold">📊</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-semibold text-white">Learning Progress</CardTitle>
                    <Select value={timeframe} onValueChange={setTimeframe}>
                      <SelectTrigger className="w-32 bg-gray-800 border-gray-700">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={progressData}>
                      <defs>
                        <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                        </linearGradient>
                        <linearGradient id="colorStarted" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1f2937',
                          border: '1px solid #374151',
                          borderRadius: '8px',
                          color: '#fff'
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="completed"
                        stackId="1"
                        stroke="#10b981"
                        fillOpacity={1}
                        fill="url(#colorCompleted)"
                      />
                      <Area
                        type="monotone"
                        dataKey="started"
                        stackId="1"
                        stroke="#3b82f6"
                        fillOpacity={1}
                        fill="url(#colorStarted)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-white">Course Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
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
                          color: '#fff'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Study Hours Chart */}
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">Study Hours This Week</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyProgressData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1f2937',
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#fff'
                      }}
                    />
                    <Bar dataKey="hours" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        );

      case 'my-learning':
        return (
          <div className="space-y-6">
            {/* My Learning Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 border-blue-800/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-300 text-sm font-medium">Enrolled</p>
                      <p className="text-3xl font-bold text-white">{myCourses.length}</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-400 text-xl font-bold">📚</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-900/50 to-green-800/30 border-green-800/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-300 text-sm font-medium">Completed</p>
                      <p className="text-3xl font-bold text-white">{myCourses.filter(c => c.progress === 100).length}</p>
                    </div>
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-green-400 text-xl font-bold">✅</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-900/50 to-orange-800/30 border-orange-800/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-300 text-sm font-medium">In Progress</p>
                      <p className="text-3xl font-bold text-white">{myCourses.filter(c => c.progress > 0 && c.progress < 100).length}</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-orange-400 text-xl font-bold">⏳</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-purple-800/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-300 text-sm font-medium">Avg. Progress</p>
                      <p className="text-3xl font-bold text-white">
                        {myCourses.length > 0 ? Math.round(myCourses.reduce((acc, c) => acc + c.progress, 0) / myCourses.length) : 0}%
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-purple-400 text-xl font-bold">📊</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* My Learning Courses */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myCourses.map((course) => (
                <Card key={course.id} className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group overflow-hidden">
                  <div className="relative">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{ width: '100%', height: '12rem' }}
                      unoptimized
                    />
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-sm font-medium">{course.readTime}</span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className={`${getCategoryColor(course.category)} text-white border-0`}>
                        {course.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-400 text-sm">{course.date} - by {course.author}</p>
                        <h3 className="text-lg font-semibold text-white mt-2 line-clamp-2 group-hover:text-blue-400 transition-colors duration-200">
                          {course.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-2 line-clamp-3">{course.description}</p>
                      </div>

                      {/* Progress Section */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Progress</span>
                          <span className="text-sm text-blue-400">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            onClick={() => updateProgress(course.id, Math.min(100, course.progress + 25))}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-xs py-1"
                          >
                            Continue
                          </Button>
                          <Button
                            onClick={() => removeFromMyLearning(course.id)}
                            className="bg-red-600 hover:bg-red-700 text-xs py-1 px-3"
                          >
                            Remove
                          </Button>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {course.tags.map((tag, index) => (
                          <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {myCourses.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No courses enrolled yet</h3>
                <p className="text-gray-500">Start learning by enrolling in courses from the catalog</p>
              </div>
            )}
          </div>
        );

      case 'all-courses':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses?.map((course) => (
              <Card key={course.id} className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group overflow-hidden">
                <div className="relative">
                  <Image
                    src={course.image || "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"}
                    alt={course.title}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-sm font-medium">{course.readTime}</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getCategoryColor(course.category)} text-white border-0`}>
                      {course.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-400 text-sm">
                        {course.date} • by {course.author}
                      </p>
                      <h3 className="text-lg font-semibold text-white mt-2 line-clamp-2 group-hover:text-blue-400 transition-colors duration-200">
                        {course.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-2 line-clamp-3">{course.description}</p>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <span>{course.difficulty}</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {course.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Admin Actions */}
                    <div className="flex gap-2 mt-4">
                      <Button
                        onClick={() => handleUpdate(course)}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-sm"
                      >
                        Update
                      </Button>
                      <Button
                        onClick={() => handleDelete(course.id)}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-sm"
                      >
                        Delete
                      </Button>
                    </div>

                  </div>
                </CardContent>
              </Card>
            ))}
            {courses.length === 0 && (
              <div className="text-center col-span-full py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No courses found</h3>
                <p className="text-gray-500">Please check back later or add a new course.</p>
              </div>
            )}
          </div>
        );


      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white page-scrollbar overflow-y-auto">
      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Learning Dashboard
            </h1>
            <p className="text-gray-400 mt-2">
              Track your progress, manage courses, and analyze your learning journey
            </p>
          </div>
          {isAdmin && (
          <Button
            onClick={() => setIsAddCourseOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            + Add New Course
          </Button>
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 border-b border-gray-800">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-6 py-3 font-semibold transition-all duration-200 border-b-2 ${activeTab === 'dashboard'
              ? 'text-blue-400 border-blue-400'
              : 'text-gray-400 border-transparent hover:text-white'
              }`}
          >
            📊 Dashboard
          </button>
          <button
            onClick={() => setActiveTab('all-courses')}
            className={`px-6 py-3 font-semibold transition-all duration-200 border-b-2 ${activeTab === 'all-courses'
              ? 'text-blue-400 border-blue-400'
              : 'text-gray-400 border-transparent hover:text-white'
              }`}
          >
            🎓 My Learning ({courses?.length})
          </button>
          {/* <button
            onClick={() => setActiveTab('all-courses')}
            className={`px-6 py-3 font-semibold transition-all duration-200 border-b-2 ${activeTab === 'all-courses'
              ? 'text-blue-400 border-blue-400'
              : 'text-gray-400 border-transparent hover:text-white'
              }`}
          >
            📚 All Courses ({courses?.length})
          </button> */}
        </div>

        {/* Add Course Modal */}
        {isAddCourseOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 border border-gray-800 rounded-lg w-full max-w-2xl max-h-[90vh] modal-scrollbar overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Create New Course
                  </h2>
                  <button
                    onClick={() => setIsAddCourseOpen(false)}
                    className="text-gray-400 hover:text-white text-2xl font-bold transition-colors duration-200 hover:bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Course Title</Label>
                      <Input
                        id="title"
                        value={courseForm.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        className="bg-gray-800 border-gray-700"
                        placeholder="Enter course title"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select value={courseForm.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger className="bg-gray-800 border-gray-700">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="AI/ML">AI/ML</SelectItem>
                          <SelectItem value="Programming">Programming</SelectItem>
                          <SelectItem value="Web Dev">Web Development</SelectItem>
                          <SelectItem value="Backend">Backend</SelectItem>
                          <SelectItem value="Data Science">Data Science</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <textarea
                      id="description"
                      value={courseForm.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px] resize-none"
                      placeholder="Enter course description"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="author">Author</Label>
                      <Input
                        id="author"
                        value={courseForm.author}
                        onChange={(e) => handleInputChange('author', e.target.value)}
                        className="bg-gray-800 border-gray-700"
                        placeholder="Author name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="readTime">Read Time</Label>
                      <Input
                        id="readTime"
                        value={courseForm.readTime}
                        onChange={(e) => handleInputChange('readTime', e.target.value)}
                        className="bg-gray-800 border-gray-700"
                        placeholder="e.g., 8 min read"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Input
                        id="duration"
                        value={courseForm.duration}
                        onChange={(e) => handleInputChange('duration', e.target.value)}
                        className="bg-gray-800 border-gray-700"
                        placeholder="e.g., 6 weeks"
                      />
                    </div>
                     <div className="space-y-2">
                      <Label htmlFor="difficulty">Difficuilty</Label>
                      <Select value={courseForm.difficulty} onValueChange={(value) => handleInputChange('difficulty', value)}>
                        <SelectTrigger className="bg-gray-800 border-gray-700">
                          <SelectValue placeholder="Select difficulty" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="Beginner">Beginner</SelectItem>
                          <SelectItem value="Intermediate">Intermediate</SelectItem>
                          <SelectItem value="Advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div> 
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image">Image URL</Label>
                    <Input
                      id="image"
                      value={courseForm.image}
                      onChange={(e) => handleInputChange('image', e.target.value)}
                      className="bg-gray-800 border-gray-700"
                      placeholder="Enter image URL"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags (comma separated)</Label>
                    <Input
                      id="tags"
                      value={courseForm.tags}
                      onChange={(e) => handleInputChange('tags', e.target.value)}
                      className="bg-gray-800 border-gray-700"
                      placeholder="e.g., neural-networks, deep-learning, ai"
                    />
                  </div>

                  <div className="flex justify-end gap-4 pt-4">
                    <Button
                      onClick={() => setIsAddCourseOpen(false)}
                      className="border border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Create Course
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content */}
        {renderTabContent()}
      </div>

      

       <Dialog open={isUpdateOpen} onOpenChange={setIsUpdateOpen}>
        <DialogContent className="bg-gray-900 border border-gray-700 backdrop-blur-md text-white max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">Update Course</DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <Label className="text-sm text-gray-300 mb-1 block">Title</Label>
              <Input
                value={formData.title || ""}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div className="md:col-span-2">
              <Label className="text-sm text-gray-300 mb-1 block">Description</Label>
              <textarea
                rows={4}
                className="w-full bg-gray-800 text-white rounded-md px-3 py-2 border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.description || ""}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div>
              <Label className="text-sm text-gray-300 mb-1 block">Instructor</Label>
              <Input
                value={formData.instructor || ""}
                onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
              />
            </div>

            <div>
              <Label className="text-sm text-gray-300 mb-1 block">Category</Label>
              <Input
                value={formData.category || ""}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              />
            </div>

            <div>
              <Label className="text-sm text-gray-300 mb-1 block">Price</Label>
              <Input
                type="number"
                value={formData.price?.toString() || ""}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
              />
            </div>

            <div>
              <Label className="text-sm text-gray-300 mb-1 block">Duration (weeks)</Label>
              <Input
                type="number"
                value={formData.duration_weeks?.toString() || ""}
                onChange={(e) => setFormData({ ...formData, duration_weeks: parseInt(e.target.value) })}
              />
            </div>

            <div>
              <Label className="text-sm text-gray-300 mb-1 block">Difficulty</Label>
              <Input
                value={formData.difficulty || ""}
                onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
              />
            </div>

            <div>
              <Label className="text-sm text-gray-300 mb-1 block">Thumbnail URL</Label>
              <Input
                value={formData.thumbnail_url || ""}
                onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })}
              />
            </div>

            <div>
              <Label className="text-sm text-gray-300 mb-1 block">Video URL</Label>
              <Input
                value={formData.video_url || ""}
                onChange={(e) => setFormData({ ...formData, video_url: e.target.value })}
              />
            </div>

            <div className="md:col-span-2">
              <Label className="text-sm text-gray-300 mb-1 block">Tags (comma separated)</Label>
              <Input
                value={formData.tags?.join(", ") || ""}
                onChange={(e) =>
                  setFormData({ ...formData, tags: e.target.value.split(",").map((t) => t.trim()) })
                }
              />
            </div>
          </div>

          <DialogFooter className="mt-6">
            <Button onClick={submitUpdate} className="bg-green-600 hover:bg-green-700">
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>



    </div>
  );
} 

