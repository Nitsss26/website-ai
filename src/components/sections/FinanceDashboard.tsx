'use client';
import { TooltipProps } from 'recharts';
import { useState, useEffect } from 'react';
import { LineChart, Line,  Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from 'recharts';



export default function FinancePage() {
  const [mounted, setMounted] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setAnimateProgress(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  // Mock financial data
  const monthlySpendingData = [
    { month: 'Jan', subscription: 29.99, courses: 89.97, books: 45.50, tutoring: 120.00, total: 285.46 },
    { month: 'Feb', subscription: 29.99, courses: 129.95, books: 32.99, tutoring: 160.00, total: 352.93 },
    { month: 'Mar', subscription: 29.99, courses: 79.98, books: 67.48, tutoring: 120.00, total: 297.45 },
    { month: 'Apr', subscription: 29.99, courses: 199.94, books: 23.99, tutoring: 200.00, total: 453.92 },
    { month: 'May', subscription: 29.99, courses: 59.99, books: 89.97, tutoring: 160.00, total: 339.95 },
    { month: 'Jun', subscription: 29.99, courses: 149.93, books: 45.50, tutoring: 240.00, total: 465.42 },
  ];

  const weeklyBudgetData = [
    { week: 'Week 1', budget: 100, spent: 85, remaining: 15 },
    { week: 'Week 2', budget: 100, spent: 92, remaining: 8 },
    { week: 'Week 3', budget: 100, spent: 78, remaining: 22 },
    { week: 'Week 4', budget: 100, spent: 105, remaining: -5 },
  ];

  const expenseCategoryData = [
    { name: 'AI Subscription', value: 35, amount: 179.94, color: '#3B82F6' },
    { name: 'Online Courses', value: 28, amount: 709.76, color: '#10B981' },
    { name: 'Books & Materials', value: 15, amount: 305.43, color: '#8B5CF6' },
    { name: 'Private Tutoring', value: 22, amount: 1000.00, color: '#F59E0B' },
  ];

  const savingsGoalData = [
    { goal: 'Premium AI Tools', current: 450, target: 599, percentage: 75 },
    { goal: 'Advanced Certification', current: 280, target: 400, percentage: 70 },
    { goal: 'Learning Equipment', current: 180, target: 300, percentage: 60 },
    { goal: 'Conference Attendance', current: 320, target: 800, percentage: 40 },
  ];

  const investmentReturnData = [
    { month: 'Jan', investment: 500, return: 525, roi: 5 },
    { month: 'Feb', investment: 500, return: 540, roi: 8 },
    { month: 'Mar', investment: 500, return: 485, roi: -3 },
    { month: 'Apr', investment: 500, return: 560, roi: 12 },
    { month: 'May', investment: 500, return: 575, roi: 15 },
    { month: 'Jun', investment: 500, return: 590, roi: 18 },
  ];

  const subscriptionData = [
    { service: 'AI Learning Platform', cost: 29.99, status: 'active', renewal: '2024-02-15' },
    { service: 'Advanced Analytics', cost: 19.99, status: 'active', renewal: '2024-02-20' },
    { service: 'Premium Content', cost: 39.99, status: 'paused', renewal: '2024-03-01' },
    { service: 'Tutoring Sessions', cost: 199.99, status: 'active', renewal: '2024-02-28' },
  ];

  const financialGoalsData = [
    { category: 'Education Budget', allocated: 2000, spent: 1650, remaining: 350, percentage: 82.5 },
    { category: 'Skill Development', allocated: 1500, spent: 980, remaining: 520, percentage: 65.3 },
    { category: 'Certification Funds', allocated: 800, spent: 320, remaining: 480, percentage: 40 },
    { category: 'Equipment & Tools', allocated: 1200, spent: 750, remaining: 450, percentage: 62.5 },
  ];

  const CustomTooltip = ({ active, payload, label } : TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 border border-slate-600 rounded-lg p-3 shadow-lg">
          <p className="text-slate-200 font-medium">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: ${entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const formatCurrency = (value : number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Enhanced Custom Scrollbar Styles */}
      <style jsx global>{`
        /* Webkit browsers (Chrome, Safari, Edge) */
        ::-webkit-scrollbar {
          width: 16px;
        }
        ::-webkit-scrollbar-track {
          background: #0f172a;
          border-radius: 10px;
          border: 3px solid #1e293b;
          box-shadow: inset 0 0 5px rgba(0,0,0,0.3);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #475569 0%, #334155 50%, #1e293b 100%);
          border-radius: 10px;
          border: 3px solid #0f172a;
          box-shadow: inset 0 2px 4px rgba(255,255,255,0.1);
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
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(1deg); }
          50% { transform: translateY(-15px) rotate(0deg); }
          75% { transform: translateY(-8px) rotate(-1deg); }
        }
        
        .wave-animation {
          animation: wave 4s ease-in-out infinite;
        }

        /* Money floating animation */
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        /* Pulse animation for financial metrics */
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.6); }
        }
        
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Fixed Header */}
      <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 px-6 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white">Financial Dashboard</h1>
          <p className="text-slate-400 mt-1">Track your learning investments and financial goals</p>
        </div>
      </div>

      {/* Scrollable Main Content */}
      <div className="scroll-container scrollbar-custom">
        <div className="max-w-7xl mx-auto px-6 py-8">
          
          {/* Financial Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
              Financial Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 pulse-glow">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-slate-400 text-sm">Total Spent</p>
                    <p className="text-3xl font-bold text-white">{formatCurrency(2194.13)}</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center float-animation">
                    <div className="text-white font-bold text-lg">💰</div>
                  </div>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-1000 ease-out"
                    style={{ width: animateProgress ? '85%' : '0%' }}
                  ></div>
                </div>
                <p className="text-green-400 text-sm mt-2">↗ +12% from last month</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-slate-400 text-sm">Monthly Budget</p>
                    <p className="text-3xl font-bold text-white">{formatCurrency(400)}</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center wave-animation" style={{ animationDelay: '0.5s' }}>
                    <div className="text-white font-bold text-lg">📊</div>
                  </div>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-1000 ease-out"
                    style={{ width: animateProgress ? '78%' : '0%', transitionDelay: '200ms' }}
                  ></div>
                </div>
                <p className="text-blue-400 text-sm mt-2">78% utilized</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-slate-400 text-sm">Savings Goal</p>
                    <p className="text-3xl font-bold text-white">{formatCurrency(1230)}</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center wave-animation" style={{ animationDelay: '1s' }}>
                    <div className="text-white font-bold text-lg">🎯</div>
                  </div>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 transition-all duration-1000 ease-out"
                    style={{ width: animateProgress ? '61%' : '0%', transitionDelay: '400ms' }}
                  ></div>
                </div>
                <p className="text-purple-400 text-sm mt-2">61% of target</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-slate-400 text-sm">ROI</p>
                    <p className="text-3xl font-bold text-white">+18.2%</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center float-animation" style={{ animationDelay: '1.5s' }}>
                    <div className="text-white font-bold text-lg">📈</div>
                  </div>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-1000 ease-out"
                    style={{ width: animateProgress ? '91%' : '0%', transitionDelay: '600ms' }}
                  ></div>
                </div>
                <p className="text-orange-400 text-sm mt-2">Excellent returns</p>
              </div>
            </div>
          </section>

          {/* Monthly Spending Trends */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="w-1 h-6 bg-blue-500 rounded-full mr-3"></div>
              Monthly Spending Analysis
            </h2>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={monthlySpendingData}>
                  <defs>
                    <linearGradient id="totalGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="subscription" fill="#10B981" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="courses" fill="#8B5CF6" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="books" fill="#F59E0B" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="tutoring" fill="#EF4444" radius={[2, 2, 0, 0]} />
                  <Area type="monotone" dataKey="total" stroke="#3B82F6" fillOpacity={1} fill="url(#totalGradient)" strokeWidth={3} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Budget Tracking and Expense Categories */}
          <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <div className="w-1 h-6 bg-cyan-500 rounded-full mr-3"></div>
                  Weekly Budget Tracking
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyBudgetData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="week" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="budget" fill="#64748B" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="spent" fill="#06B6D4" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <div className="w-1 h-6 bg-pink-500 rounded-full mr-3"></div>
                  Expense Categories
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={expenseCategoryData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name} ${value}%`}
                    >
                      {expenseCategoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>

          {/* Investment Returns */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="w-1 h-6 bg-emerald-500 rounded-full mr-3"></div>
              Investment Returns & ROI
            </h2>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={investmentReturnData}>
                  <defs>
                    <linearGradient id="investmentGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area type="monotone" dataKey="investment" stroke="#64748B" fill="url(#investmentGradient)" strokeWidth={2} />
                  <Line 
                    type="monotone" 
                    dataKey="return" 
                    stroke="#10B981" 
                    strokeWidth={4}
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, stroke: '#10B981', strokeWidth: 2, fill: '#D1FAE5' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="roi" 
                    stroke="#F59E0B" 
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Savings Goals Progress */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="w-1 h-6 bg-violet-500 rounded-full mr-3"></div>
              Savings Goals Progress
            </h2>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {savingsGoalData.map((goal, index) => (
                  <div key={index} className="bg-slate-700/30 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-white font-medium">{goal.goal}</h3>
                      <div className="text-right">
                        <span className="text-white font-bold">{formatCurrency(goal.current)}</span>
                        <span className="text-slate-400">/{formatCurrency(goal.target)}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-slate-600/50 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full transition-all duration-1000 ease-out ${
                            goal.percentage >= 80 ? 'bg-gradient-to-r from-green-500 to-green-400' :
                            goal.percentage >= 60 ? 'bg-gradient-to-r from-blue-500 to-blue-400' :
                            goal.percentage >= 40 ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' :
                            'bg-gradient-to-r from-red-500 to-red-400'
                          }`}
                          style={{
                            width: animateProgress ? `${goal.percentage}%` : '0%',
                            transitionDelay: `${index * 150}ms`,
                          }}
                        ></div>
                      </div>
                      <span className={`text-sm font-medium ${
                        goal.percentage >= 80 ? 'text-green-400' :
                        goal.percentage >= 60 ? 'text-blue-400' :
                        goal.percentage >= 40 ? 'text-yellow-400' :
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

          {/* Subscription Management */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="w-1 h-6 bg-rose-500 rounded-full mr-3"></div>
              Active Subscriptions
            </h2>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-700/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-slate-300">Service</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-slate-300">Monthly Cost</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-slate-300">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-slate-300">Next Renewal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50">
                    {subscriptionData.map((sub, index) => (
                      <tr key={index} className="hover:bg-slate-700/30 transition-colors duration-200">
                        <td className="px-6 py-4 text-white font-medium">{sub.service}</td>
                        <td className="px-6 py-4 text-green-400 font-semibold">{formatCurrency(sub.cost)}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            sub.status === 'active' 
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          }`}>
                            {sub.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-300">{sub.renewal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Financial Goals Breakdown */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="w-1 h-6 bg-amber-500 rounded-full mr-3"></div>
              Financial Goals Breakdown
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {financialGoalsData.map((category, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{category.category}</h3>
                      <p className="text-slate-400 text-sm">Budget allocation</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">{formatCurrency(category.allocated)}</p>
                      <p className="text-slate-400 text-sm">Total budget</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Spent: {formatCurrency(category.spent)}</span>
                      <span className="text-green-400">Remaining: {formatCurrency(category.remaining)}</span>
                    </div>
                    
                    <div className="w-full bg-slate-700/50 rounded-full h-4">
                      <div
                        className={`h-4 rounded-full transition-all duration-1000 ease-out ${
                          category.percentage >= 80 ? 'bg-gradient-to-r from-red-500 to-red-400' :
                          category.percentage >= 60 ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' :
                          'bg-gradient-to-r from-green-500 to-green-400'
                        }`}
                        style={{
                          width: animateProgress ? `${category.percentage}%` : '0%',
                          transitionDelay: `${index * 200}ms`,
                        }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">{category.percentage}% utilized</span>
                      <span className={`text-sm font-medium ${
                        category.percentage >= 80 ? 'text-red-400' :
                        category.percentage >= 60 ? 'text-yellow-400' :
                        'text-green-400'
                      }`}>
                        {category.percentage >= 80 ? 'High Usage' :
                         category.percentage >= 60 ? 'Moderate Usage' :
                         'Low Usage'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Financial Summary */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="w-1 h-6 bg-indigo-500 rounded-full mr-3"></div>
              Financial Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-white font-semibold mb-4">Best Investment</h3>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-500 rounded"></div>
                  </div>
                  <div>
                    <p className="text-white font-medium">AI Certification Course</p>
                    <p className="text-green-400 text-sm">+25% skill improvement</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-white font-semibold mb-4">Cost Optimization</h3>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  </div>
                  <div>
                    <p className="text-white font-medium">Subscription Bundle</p>
                    <p className="text-blue-400 text-sm">Save $45/month</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-white font-semibold mb-4">Next Goal</h3>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-purple-500 rounded"></div>
                  </div>
                  <div>
                    <p className="text-white font-medium">Premium AI Tools</p>
                    <p className="text-purple-400 text-sm">$149 remaining</p>
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