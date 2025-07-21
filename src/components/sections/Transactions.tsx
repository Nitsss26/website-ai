'use client';

import React from 'react';
import Image from 'next/image';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import {
  IconCreditCard,
  IconBrandPaypal,
  IconFileDownload,
  IconShoppingCart,
} from '@tabler/icons-react';

const data = [
  { name: 'Jan', purchases: 2 },
  { name: 'Feb', purchases: 1 },
  { name: 'Mar', purchases: 3 },
  { name: 'Apr', purchases: 2 },
  { name: 'May', purchases: 4 },
  { name: 'Jun', purchases: 2 },
];

const pieData = [
  { name: 'React Basics', value: 49.99 },
  { name: 'Next.js Mastery', value: 69.99 },
  { name: 'UI/UX Design Pro', value: 89.99 },
  { name: 'Tailwind CSS Advanced', value: 39.99 },
  { name: 'Fullstack with Prisma', value: 79.99 },
  { name: 'TypeScript Deep Dive', value: 59.99 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#14b8a6'];

const transactions = [
  {
    date: 'June 10, 2025',
    course: 'React Basics',
    amount: '$49.99',
    method: 'Credit Card',
    id: 'TXN123456',
    invoice: '#',
    image: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
  },
  {
    date: 'June 02, 2025',
    course: 'Next.js Mastery',
    amount: '$69.99',
    method: 'PayPal',
    id: 'TXN987654',
    invoice: '#',
    image: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
  },
  {
    date: 'May 20, 2025',
    course: 'UI/UX Design Pro',
    amount: '$89.99',
    method: 'Credit Card',
    id: 'TXN345678',
    invoice: '#',
    image: 'https://cdn-icons-png.flaticon.com/512/906/906343.png',
  },
  {
    date: 'May 05, 2025',
    course: 'Tailwind CSS Advanced',
    amount: '$39.99',
    method: 'Credit Card',
    id: 'TXN112233',
    invoice: '#',
    image: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg',
  },
  {
    date: 'April 28, 2025',
    course: 'Fullstack with Prisma',
    amount: '$79.99',
    method: 'PayPal',
    id: 'TXN998877',
    invoice: '#',
    image: 'https://cdn.worldvectorlogo.com/logos/prisma-3.svg',
  },
  {
    date: 'April 15, 2025',
    course: 'TypeScript Deep Dive',
    amount: '$59.99',
    method: 'Credit Card',
    id: 'TXN776655',
    invoice: '#',
    image: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
  },
];

// const cardColors = [
//   'via-purple-800/40',
//   'via-indigo-800/40',
//   'via-pink-800/40',
//   'via-sky-800/40',
//   'via-teal-800/40',
//   'via-yellow-800/40',
//   'via-orange-800/40',
//   'via-rose-800/40',
// ];

export default function Transactions() {
  return (
    <section className="w-full px-6 py-10 space-y-12 text-slate-100">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-emerald-300 flex items-center gap-3">
          <IconShoppingCart className="w-6 h-6" />
          Course Purchases
        </h3>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Bar Chart */}
        <div className="rounded-xl p-6 border border-yellow-400/20 bg-gradient-to-br from-yellow-800/30 via-yellow-700/20 to-black/10 backdrop-blur-md shadow-lg">
          <h4 className="text-lg font-semibold text-yellow-200 mb-4">Courses Purchased Per Month</h4>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#facc1544" />
              <XAxis dataKey="name" stroke="#fde68a" />
              <YAxis stroke="#fde68a" />
              <Tooltip />
              <Bar dataKey="purchases" fill="#facc15" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="rounded-xl p-6 border border-sky-400/20 bg-gradient-to-br from-sky-800/30 via-sky-700/20 to-black/10 backdrop-blur-md shadow-lg">
          <h4 className="text-lg font-semibold text-sky-200 mb-4">Spending Per Course</h4>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Transaction Table */}
      <section className="rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-white mb-8">🎓 Recent Transactions</h3>

        <div className="overflow-auto rounded-xl">
          {/* Glassmorphism background wrapper */}
          <div className="rounded-2xl p-4 bg-white/5 backdrop-blur-xl border border-white/10 shadow-inner">
            <table className="min-w-full text-sm text-left text-white rounded-xl bg-gradient-to-br from-green-800/10 via-green-700/10 to-black/5 border border-green-400/10 backdrop-blur-lg shadow-md">
              <thead className="bg-green-500/20 text-white uppercase tracking-wider text-xs backdrop-blur">
                <tr>
                  <th className="p-3">Course</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Method</th>
                  <th className="p-3">Transaction ID</th>
                  <th className="p-3">Invoice</th>
                </tr>
              </thead>
              <tbody className="text-green-100 divide-y divide-green-900/10">
                {transactions.map((tx, i) => (
                  <tr
                    key={i}
                    className={`transition hover:bg-green-600/20 ${i % 2 === 0 ? 'bg-green-500/10' : 'bg-green-400/10'
                      }`}
                  >
                    <td className="p-3 flex items-center gap-2">
                      <Image
                        src={tx.image}
                        alt={tx.course}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded shadow"
                        unoptimized
                      />
                      <span className="font-medium text-white">{tx.course}</span>
                    </td>
                    <td className="p-3 text-white">{tx.date}</td>
                    <td className="p-3 text-white">{tx.amount}</td>
                    <td className="p-3 flex items-center gap-2 text-white">
                      {tx.method === 'Credit Card' ? (
                        <IconCreditCard className="w-4 h-4 text-green-300" />
                      ) : (
                        <IconBrandPaypal className="w-4 h-4 text-green-300" />
                      )}
                      {tx.method}
                    </td>
                    <td className="p-3 text-green-300">{tx.id}</td>
                    <td className="p-3">
                      <a
                        href={tx.invoice}
                        className="text-white hover:underline flex items-center gap-1"
                      >
                        <IconFileDownload className="w-4 h-4" />
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>


    </section>
  );
}
