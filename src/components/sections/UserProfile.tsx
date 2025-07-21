"use client";
import React from "react";
import {
  IconMail,
  IconPhone,
  IconCalendar,
  IconShieldCheck,
  IconEdit,
  IconLogout,
  IconLock,
} from "@tabler/icons-react";
import Image from "next/image";
import { ProgressBar } from "../ui/progress";

const UserProfile = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    role: "Premium User",
    joined: "March 10, 2024",
    avatar: "https://i.pravatar.cc/150?img=3",
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full max-w-screen bg-[#0e1a2a] text-white px-4 py-6 gap-4 overflow-x-hidden">
      {/* Sidebar */}
      <aside className="md:w-1/4 w-full bg-[#1e293b] rounded-xl p-6 shadow-md space-y-4">
        <div className="flex flex-col items-center text-center">
          <Image
            src={user.avatar}
            alt="User Avatar"
            width={96}
            height={96}
            className="rounded-full border-4 border-blue-500"
          />
          <h2 className="text-xl font-semibold mt-4">{user.name}</h2>
          <p className="text-sm text-gray-400">{user.role}</p>
          <button className="mt-3 text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
            <IconEdit size={16} /> Edit Profile
          </button>
        </div>

        <section className="text-sm space-y-3">
          <InfoRow icon={<IconMail size={16} />} label="Email" value={user.email} />
          <InfoRow icon={<IconPhone size={16} />} label="Phone" value={user.phone} />
          <InfoRow icon={<IconCalendar size={16} />} label="Joined" value={user.joined} />
          <InfoRow icon={<IconShieldCheck size={16} />} label="Plan" value="Premium" />
        </section>

        <button className="w-full mt-4 px-4 py-2 text-sm bg-red-600 rounded-md hover:bg-red-700 flex justify-center items-center gap-1">
          <IconLogout size={16} /> Log Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="md:w-3/4 w-full flex flex-col space-y-4">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard title="Courses Enrolled" value="6" color="bg-blue-500" />
          <StatCard title="Certificates Earned" value="3" color="bg-green-500" />
          <StatCard title="Avg. Completion" value="82%" color="bg-purple-500" progress={82} />
        </div>

        {/* Recent Activity */}
        <section className="bg-[#1e293b] p-4 rounded-xl shadow-md flex-1">
          <h3 className="text-lg font-semibold mb-3">Recent Activity</h3>
          <div className="overflow-x-auto w-full">
            <table className="min-w-[600px] w-full text-sm">
              <thead className="text-gray-400 border-b border-gray-700">
                <tr>
                  <th className="text-left py-2">Date</th>
                  <th className="text-left py-2">Course</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Score</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    date: "June 21, 2025",
                    course: "React Basics",
                    status: "Completed",
                    score: "92%",
                  },
                  {
                    date: "June 18, 2025",
                    course: "Next.js Mastery",
                    status: "In Progress",
                    score: "68%",
                  },
                  {
                    date: "June 14, 2025",
                    course: "Tailwind CSS",
                    status: "Completed",
                    score: "87%",
                  },
                ].map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-700 hover:bg-gray-800 transition">
                    <td className="py-2">{item.date}</td>
                    <td className="py-2">{item.course}</td>
                    <td className="py-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.status === "Completed"
                            ? "bg-green-600"
                            : item.status === "In Progress"
                            ? "bg-yellow-600"
                            : "bg-red-600"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-2">{item.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Security */}
        <section className="bg-[#1e293b] p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-3">Security</h3>
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <IconLock size={16} />
              Password: ••••••••••••
            </div>
            <button className="text-sm px-3 py-1 bg-yellow-600 hover:bg-yellow-700 rounded-md text-black font-medium">
              Change
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserProfile;

const InfoRow = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
    <div className="flex items-center gap-2">
      <div className="text-gray-400">{icon}</div>
      <span className="text-gray-400">{label}:</span>
    </div>
    <span className="font-medium">{value}</span>
  </div>
);

const StatCard = ({
  title,
  value,
  color,
  progress,
}: {
  title: string;
  value: string;
  color: string;
  progress?: number;
}) => (
  <div className={`rounded-xl p-4 ${color} shadow-md min-w-[150px]`}>
    <h4 className="text-sm text-white/80 mb-1">{title}</h4>
    <div className="text-2xl font-bold text-white">{value}</div>
    {typeof progress === "number" && (
      <div className="mt-2">
        <ProgressBar value={progress} />
      </div>
    )}
  </div>
);
