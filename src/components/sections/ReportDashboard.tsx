'use client';

import { TooltipProps } from 'recharts';
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ReportsPage() {
  const [mounted, setMounted] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setAnimateProgress(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  // Mock data for charts
  const learningProgressData = [
    { month: 'Jan', mathematics: 65, science: 70, english: 80, history: 55, programming: 45 },
    { month: 'Feb', mathematics: 72, science: 75, english: 82, history: 62, programming: 58 },
    { month: 'Mar', mathematics: 78, science: 80, english: 85, history: 68, programming: 65 },
    { month: 'Apr', mathematics: 85, science: 82, english: 88, history: 75, programming: 72 },
    { month: 'May', mathematics: 88, science: 85, english: 90, history: 78, programming: 78 },
    { month: 'Jun', mathematics: 92, science: 88, english: 92, history: 82, programming: 85 },
  ];

  const weeklyActivityData = [
    { day: 'Mon', hours: 3.5, exercises: 12, accuracy: 88 },
    { day: 'Tue', hours: 4.2, exercises: 15, accuracy: 92 },
    { day: 'Wed', hours: 2.8, exercises: 8, accuracy: 85 },
    { day: 'Thu', hours: 5.1, exercises: 18, accuracy: 94 },
    { day: 'Fri', hours: 3.9, exercises: 14, accuracy: 90 },
    { day: 'Sat', hours: 6.2, exercises: 22, accuracy: 96 },
    { day: 'Sun', hours: 4.5, exercises: 16, accuracy: 89 },
  ];

  const skillDistributionData = [
    { name: 'Mathematics', value: 25, color: '#3B82F6' },
    { name: 'Science', value: 20, color: '#10B981' },
    { name: 'English', value: 22, color: '#8B5CF6' },
    { name: 'History', value: 15, color: '#F59E0B' },
    { name: 'Programming', value: 18, color: '#EF4444' },
  ];

  const performanceRadarData = [
    { subject: 'Math', current: 92, target: 95 },
    { subject: 'Science', current: 88, target: 90 },
    { subject: 'English', current: 92, target: 95 },
    { subject: 'History', current: 82, target: 85 },
    { subject: 'Programming', current: 85, target: 90 },
    { subject: 'Critical Thinking', current: 78, target: 85 },
  ];

  const monthlyGoalsData = [
    { goal: 'Complete 200 exercises', progress: 156, target: 200, percentage: 78 },
    { goal: 'Study 40 hours', progress: 32.5, target: 40, percentage: 81 },
    { goal: 'Maintain 90% accuracy', progress: 92, target: 90, percentage: 100 },
    { goal: 'Learn 5 new concepts', progress: 3, target: 5, percentage: 60 },
    { goal: 'Complete 3 projects', progress: 2, target: 3, percentage: 67 },
  ];

  const difficultyProgressData = [
    { level: 'Beginner', completed: 45, total: 50, percentage: 90 },
    { level: 'Intermediate', completed: 32, total: 40, percentage: 80 },
    { level: 'Advanced', completed: 18, total: 30, percentage: 60 },
    { level: 'Expert', completed: 8, total: 20, percentage: 40 },
  ];

  const learningStreakData = [
    { week: 'Week 1', streak: 5 },
    { week: 'Week 2', streak: 7 },
    { week: 'Week 3', streak: 4 },
    { week: 'Week 4', streak: 12 },
    { week: 'Week 5', streak: 8 },
    { week: 'Week 6', streak: 15 },
    { week: 'Week 7', streak: 10 },
    { week: 'Week 8', streak: 18 },
  ];

  const CustomTooltip = ({ active, payload, label }  : TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 border border-slate-600 rounded-lg p-3 shadow-lg">
          <p className="text-slate-200 font-medium">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Enhanced Custom Scrollbar Styles */}
      <style jsx global>{`
        /* Webkit browsers (Chrome, Safari, Edge) */
        ::-webkit-scrollbar {
          width: 14px;
        }
        ::-webkit-scrollbar-track {
          background: #0f172a;
          border-radius: 8px;
          border: 2px solid #1e293b;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #475569 0%, #334155 50%, #1e293b 100%);
          border-radius: 8px;
          border: 2px solid #0f172a;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #64748b 0%, #475569 50%, #334155 100%);
        }
        ::-webkit-scrollbar-thumb:active {
          background: linear-gradient(180deg, #94a3b8 0%, #64748b 50%, #475569 100%);
        }
        
        /* Firefox */
        .scrollbar-custom {
          scrollbar-width: thin;
          scrollbar-color: #475569 #0f172a;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scroll container */
        .scroll-container {
          height: calc(100vh - 80px);
          overflow-y: auto;
          overflow-x: hidden;
        }

        /* Custom wavy animation */
        @keyframes wave {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .wave-animation {
          animation: wave 3s ease-in-out infinite;
        }
      `}</style>

      {/* Fixed Header */}
      <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 px-6 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white">Learning Reports</h1>
          <p className="text-slate-400 mt-1">Comprehensive analytics and progress tracking</p>
        </div>
      </div>

      {/* Scrollable Main Content */}
      <div className="scroll-container scrollbar-custom">
        <div className="max-w-7xl mx-auto px-6 py-8">
          
          {/* Key Metrics Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="w-1 h-6 bg-blue-500 rounded-full mr-3"></div>
              Performance Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-slate-400 text-sm">Overall Score</p>
                    <p className="text-3xl font-bold text-white">87.2%</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center wave-animation">
                    <div className="text-white font-bold text-lg">A</div>
                  </div>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-1000 ease-out"
                    style={{ width: animateProgress ? '87.2%' : '0%' }}
                  ></div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-slate-400 text-sm">Study Hours</p>
                    <p className="text-3xl font-bold text-white">142.5h</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center wave-animation" style={{ animationDelay: '0.5s' }}>
                    <div className="text-white font-bold text-lg">⏱</div>
                  </div>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-1000 ease-out"
                    style={{ width: animateProgress ? '95%' : '0%', transitionDelay: '200ms' }}
                  ></div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-slate-400 text-sm">Accuracy Rate</p>
                    <p className="text-3xl font-bold text-white">94.1%</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center wave-animation" style={{ animationDelay: '1s' }}>
                    <div className="text-white font-bold text-lg">🎯</div>
                  </div>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 transition-all duration-1000 ease-out"
                    style={{ width: animateProgress ? '94.1%' : '0%', transitionDelay: '400ms' }}
                  ></div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-slate-400 text-sm">Streak Days</p>
                    <p className="text-3xl font-bold text-white">18</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center wave-animation" style={{ animationDelay: '1.5s' }}>
                    <div className="text-white font-bold text-lg">🔥</div>
                  </div>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-1000 ease-out"
                    style={{ width: animateProgress ? '72%' : '0%', transitionDelay: '600ms' }}
                  ></div>
                </div>
              </div>
            </div>
          </section>

          {/* Learning Progress Chart */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
              Subject Progress Over Time
            </h2>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={learningProgressData}>
                  <defs>
                    <linearGradient id="mathematics" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="science" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="english" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area type="monotone" dataKey="mathematics" stroke="#3B82F6" fillOpacity={1} fill="url(#mathematics)" strokeWidth={3} />
                  <Area type="monotone" dataKey="science" stroke="#10B981" fillOpacity={1} fill="url(#science)" strokeWidth={3} />
                  <Area type="monotone" dataKey="english" stroke="#8B5CF6" fillOpacity={1} fill="url(#english)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Weekly Activity and Performance Radar */}
          <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <div className="w-1 h-6 bg-cyan-500 rounded-full mr-3"></div>
                  Weekly Activity
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyActivityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="day" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="hours" fill="#06B6D4" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <div className="w-1 h-6 bg-pink-500 rounded-full mr-3"></div>
                  Performance Radar
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={performanceRadarData}>
                    <PolarGrid stroke="#374151" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#9CA3AF', fontSize: 10 }} />
                    <Radar name="Current" dataKey="current" stroke="#EC4899" fill="#EC4899" fillOpacity={0.3} strokeWidth={2} />
                    <Radar name="Target" dataKey="target" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.1} strokeWidth={2} strokeDasharray="5 5" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>

          {/* Skill Distribution and Learning Streak */}
          <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <div className="w-1 h-6 bg-yellow-500 rounded-full mr-3"></div>
                  Time Distribution by Subject
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={skillDistributionData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {skillDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <div className="w-1 h-6 bg-red-500 rounded-full mr-3"></div>
                  Learning Streak Trend
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={learningStreakData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="week" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip content={<CustomTooltip />} />
                    <Line 
                      type="monotone" 
                      dataKey="streak" 
                      stroke="#EF4444" 
                      strokeWidth={4}
                      dot={{ fill: '#EF4444', strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: '#EF4444', strokeWidth: 2, fill: '#FEE2E2' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>

          {/* Monthly Goals Progress */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="w-1 h-6 bg-indigo-500 rounded-full mr-3"></div>
              Monthly Goals Progress
            </h2>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <div className="space-y-6">
                {monthlyGoalsData.map((goal, index) => (
                  <div key={index} className="bg-slate-700/30 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-white font-medium">{goal.goal}</h3>
                      <div className="text-right">
                        <span className="text-white font-bold">{goal.progress}</span>
                        <span className="text-slate-400">/{goal.target}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-slate-600/50 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full transition-all duration-1000 ease-out ${
                            goal.percentage >= 100 ? 'bg-gradient-to-r from-green-500 to-green-400' :
                            goal.percentage >= 80 ? 'bg-gradient-to-r from-blue-500 to-blue-400' :
                            goal.percentage >= 60 ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' :
                            'bg-gradient-to-r from-red-500 to-red-400'
                          }`}
                          style={{
                            width: animateProgress ? `${goal.percentage}%` : '0%',
                            transitionDelay: `${index * 100}ms`,
                          }}
                        ></div>
                      </div>
                      <span className={`text-sm font-medium ${
                        goal.percentage >= 100 ? 'text-green-400' :
                        goal.percentage >= 80 ? 'text-blue-400' :
                        goal.percentage >= 60 ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>
                        {goal.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Difficulty Level Progress */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="w-1 h-6 bg-teal-500 rounded-full mr-3"></div>
              Progress by Difficulty Level
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {difficultyProgressData.map((level, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <div className="text-center mb-4">
                    <h3 className="text-white font-semibold text-lg">{level.level}</h3>
                    <p className="text-slate-400 text-sm">{level.completed}/{level.total} completed</p>
                  </div>
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#374151"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke={
                          index === 0 ? '#10B981' :
                          index === 1 ? '#3B82F6' :
                          index === 2 ? '#F59E0B' :
                          '#EF4444'
                        }
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={animateProgress ? `${2 * Math.PI * 40 * (1 - level.percentage / 100)}` : `${2 * Math.PI * 40}`}
                        className="transition-all duration-1000 ease-out"
                        style={{ transitionDelay: `${index * 200}ms` }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{level.percentage}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Summary Statistics */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="w-1 h-6 bg-violet-500 rounded-full mr-3"></div>
              Learning Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-white font-semibold mb-4">Top Performing Subject</h3>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-purple-500 rounded"></div>
                  </div>
                  <div>
                    <p className="text-white font-medium">English Literature</p>
                    <p className="text-slate-400 text-sm">92% average score</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-white font-semibold mb-4">Improvement Area</h3>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-orange-500 rounded"></div>
                  </div>
                  <div>
                    <p className="text-white font-medium">History</p>
                    <p className="text-slate-400 text-sm">Focus needed</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-white font-semibold mb-4">Next Milestone</h3>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-500 rounded"></div>
                  </div>
                  <div>
                    <p className="text-white font-medium">Advanced Level</p>
                    <p className="text-slate-400 text-sm">18% to unlock</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer spacing */}
          <div className="h-16"></div>
        </div>
      </div>
    </div>
  );
}