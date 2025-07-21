"use client";
import { TooltipProps } from 'recharts';
import { useState } from 'react';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const LogsDashboard = () => {
  const [activeTab, setActiveTab] = useState('weekly');

  // Sample data for different time periods
  const weeklyData = [
    { name: 'Mon', sessions: 45, completions: 32, errors: 3, engagement: 78 },
    { name: 'Tue', sessions: 52, completions: 41, errors: 2, engagement: 85 },
    { name: 'Wed', sessions: 38, completions: 28, errors: 5, engagement: 72 },
    { name: 'Thu', sessions: 67, completions: 54, errors: 4, engagement: 91 },
    { name: 'Fri', sessions: 73, completions: 62, errors: 1, engagement: 95 },
    { name: 'Sat', sessions: 29, completions: 18, errors: 2, engagement: 68 },
    { name: 'Sun', sessions: 34, completions: 25, errors: 3, engagement: 74 },
  ];

  const monthlyData = [
    { name: 'Jan', sessions: 1240, completions: 980, errors: 45, engagement: 82 },
    { name: 'Feb', sessions: 1356, completions: 1120, errors: 38, engagement: 87 },
    { name: 'Mar', sessions: 1580, completions: 1340, errors: 52, engagement: 89 },
    { name: 'Apr', sessions: 1720, completions: 1480, errors: 41, engagement: 91 },
    { name: 'May', sessions: 1890, completions: 1650, errors: 35, engagement: 94 },
    { name: 'Jun', sessions: 2100, completions: 1820, errors: 29, engagement: 96 },
    { name: 'Jul', sessions: 2250, completions: 1980, errors: 32, engagement: 95 },
    { name: 'Aug', sessions: 2180, completions: 1890, errors: 38, engagement: 93 },
    { name: 'Sep', sessions: 2340, completions: 2020, errors: 28, engagement: 97 },
    { name: 'Oct', sessions: 2480, completions: 2150, errors: 25, engagement: 98 },
    { name: 'Nov', sessions: 2560, completions: 2240, errors: 22, engagement: 99 },
    { name: 'Dec', sessions: 2720, completions: 2380, errors: 18, engagement: 99 },
  ];

  const yearlyData = [
    { name: '2020', sessions: 15420, completions: 12800, errors: 520, engagement: 78 },
    { name: '2021', sessions: 18900, completions: 16200, errors: 480, engagement: 85 },
    { name: '2022', sessions: 22350, completions: 19800, errors: 420, engagement: 89 },
    { name: '2023', sessions: 26780, completions: 23900, errors: 380, engagement: 93 },
    { name: '2024', sessions: 31200, completions: 28500, errors: 320, engagement: 97 },
  ];

  const performanceData = [
    { name: 'Success Rate', value: 94, color: '#10B981' },
    { name: 'Error Rate', value: 3, color: '#EF4444' },
    { name: 'Timeout', value: 2, color: '#F59E0B' },
    { name: 'Other', value: 1, color: '#6B7280' },
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case 'weekly': return weeklyData;
      case 'monthly': return monthlyData;
      case 'yearly': return yearlyData;
      default: return weeklyData;
    }
  };

  const CustomTooltip = ({ active, payload, label } : TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-xl">
          <p className="text-gray-300 font-medium mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
              {entry.name === 'engagement' && '%'}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const tabs = [
    { id: 'weekly', label: 'Weekly' },
    { id: 'monthly', label: 'Monthly' },
    { id: 'yearly', label: 'Yearly' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-y-auto">
      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>

      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Logs Dashboard
            </h1>
            <p className="text-xl text-gray-400">Comprehensive Learning Analytics & Logs</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 backdrop-blur-sm border border-blue-700/50 rounded-2xl p-6">
              <h3 className="text-blue-300 text-sm font-medium mb-2">Total Sessions</h3>
              <p className="text-3xl font-bold text-blue-100">31,247</p>
              <p className="text-blue-400 text-sm mt-2">↗ 12.5% from last period</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 backdrop-blur-sm border border-green-700/50 rounded-2xl p-6">
              <h3 className="text-green-300 text-sm font-medium mb-2">Completions</h3>
              <p className="text-3xl font-bold text-green-100">28,492</p>
              <p className="text-green-400 text-sm mt-2">↗ 8.7% completion rate</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 backdrop-blur-sm border border-purple-700/50 rounded-2xl p-6">
              <h3 className="text-purple-300 text-sm font-medium mb-2">Engagement</h3>
              <p className="text-3xl font-bold text-purple-100">97.2%</p>
              <p className="text-purple-400 text-sm mt-2">↗ 3.1% improvement</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/50 to-red-800/30 backdrop-blur-sm border border-orange-700/50 rounded-2xl p-6">
              <h3 className="text-orange-300 text-sm font-medium mb-2">Error Rate</h3>
              <p className="text-3xl font-bold text-orange-100">2.8%</p>
              <p className="text-orange-400 text-sm mt-2">↓ 1.2% reduction</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          {/* Sessions Line Chart */}
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Learning Sessions</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={getCurrentData()}>
                <defs>
                  <linearGradient id="sessionsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="sessions"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  fill="url(#sessionsGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Completions Bar Chart */}
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Completions</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={getCurrentData()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="completions" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Engagement Wavy Line Chart */}
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Engagement Rate</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={getCurrentData()}>
                <defs>
                  <linearGradient id="engagementGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="engagement"
                  stroke="#8B5CF6"
                  strokeWidth={3}
                  fill="url(#engagementGradient)"
                />
                <Line
                  type="monotone"
                  dataKey="engagement"
                  stroke="#8B5CF6"
                  strokeWidth={3}
                  dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: '#8B5CF6', strokeWidth: 2, fill: '#1F2937' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Performance Distribution */}
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Performance Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={performanceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {performanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {performanceData.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-gray-300 text-sm">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Error Analysis */}
        <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mb-8">
          <h3 className="text-2xl font-bold text-gray-100 mb-6">Error Analysis</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={getCurrentData()}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="errors" fill="#EF4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity Log */}
        <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-gray-100 mb-6">Recent Activity</h3>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {[
              { time: '2 minutes ago', event: 'User completed Advanced ML Module', type: 'success' },
              { time: '5 minutes ago', event: 'System performance optimization completed', type: 'info' },
              { time: '12 minutes ago', event: 'New user registration spike detected', type: 'warning' },
              { time: '18 minutes ago', event: 'AI model training session started', type: 'info' },
              { time: '25 minutes ago', event: 'Database connection timeout resolved', type: 'error' },
              { time: '32 minutes ago', event: 'Weekly backup completed successfully', type: 'success' },
              { time: '45 minutes ago', event: 'Learning path recommendation updated', type: 'info' },
              { time: '1 hour ago', event: 'User engagement threshold exceeded', type: 'success' },
            ].map((log, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors">
                <div className={`w-3 h-3 rounded-full ${
                  log.type === 'success' ? 'bg-green-500' :
                  log.type === 'error' ? 'bg-red-500' :
                  log.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-gray-200">{log.event}</p>
                  <p className="text-gray-400 text-sm">{log.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogsDashboard;