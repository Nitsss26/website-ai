// app/dashboard/DashboardClient.tsx
"use client";

import React, { useState, useEffect } from "react";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "@/components/ui/sidebar";
import {
  IconLayoutDashboardFilled,
  IconUserCircle,
  IconBooks,
  IconHeadphones,
  IconSettings,
  IconMessageCircle2Filled,
  IconCash,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import NavSection from "@/components/sections/NavSection";

import UserHome from "@/components/sections/UserHome";
import UserProfile from "@/components/sections/UserProfile";
import SupportDashboard from "@/components/sections/SupportDashboard";
import FeedbackDashboard from "@/components/sections/FeedbackDashboard";
import SettingsDashboard from "@/components/sections/SettingsDashboard";
import CourseDashboard from "@/components/sections/CourseDashboard";
import Transactions from "@/components/sections/Transactions";

export default function DashboardClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChangePage = (href: string) => {
    router.push(`?page=${href}`);
    if (isMobile) setSidebarOpen(false);
  };

  const links = [
    { label: "Home", href: "", icon: <IconLayoutDashboardFilled className="h-5 w-5" /> },
    { label: "Profile", href: "profile", icon: <IconUserCircle className="h-5 w-5" /> },
    { label: "My Courses", href: "courses", icon: <IconBooks className="h-5 w-5" /> },
    { label: "Transactions", href: "transactions", icon: <IconCash className="h-5 w-5" /> },
    { label: "Support", href: "support", icon: <IconHeadphones className="h-5 w-5" /> },
    { label: "Feedback", href: "feedback", icon: <IconMessageCircle2Filled className="h-5 w-5" /> },
    { label: "Settings", href: "settings", icon: <IconSettings className="h-5 w-5" /> },
  ];

  const pages = {
    dashboard: <UserHome />,
    profile: <UserProfile />,
    courses: <CourseDashboard/>,
    support: <SupportDashboard />,
    feedback: <FeedbackDashboard />,
    transactions: <Transactions />,
    settings: <SettingsDashboard />,
  };

  const currentPage = searchParams.get("page") || "dashboard";

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <NavSection />
      </div>

      {isMobile && !sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-[4.5rem] left-4 z-40 p-2 rounded-md bg-gray-900 text-white shadow-md"
        >
          <IconMenu2 size={24} />
        </button>
      )}

      <div className="pt-20 flex min-h-screen w-full bg-[#020b1a] text-white relative">
        {isMobile ? (
          <div
            className={cn(
              "fixed top-0 left-0 h-full w-64 z-[60] bg-[#030b1d] text-white transform transition-transform duration-300 ease-in-out",
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="flex flex-col h-full">
              <Sidebar>
                <SidebarBody className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
                  {links.map((link, idx) => (
                    <SidebarLink
                      key={idx}
                      link={link}
                      onClick={() => handleChangePage(link.href)}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition",
                        currentPage === link.href
                          ? "bg-gray-600 text-white"
                          : "hover:bg-gray-700 text-gray-300"
                      )}
                    />
                  ))}
                </SidebarBody>
                <div className="p-4 border-t border-gray-700">
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-gray-900 text-white"
                  >
                    <IconX size={20} />
                    Close Menu
                  </button>
                </div>
              </Sidebar>
            </div>
          </div>
        ) : (
          <div className="w-56 h-full sticky top-0 z-40 bg-[#030b1d] text-white">
            <div className="flex flex-col h-full">
              <Sidebar>
                <SidebarBody className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
                  {links.map((link, idx) => (
                    <SidebarLink
                      key={idx}
                      link={link}
                      onClick={() => handleChangePage(link.href)}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition",
                        currentPage === link.href
                          ? "bg-gray-600 text-white"
                          : "hover:bg-gray-700 text-gray-300"
                      )}
                    />
                  ))}
                </SidebarBody>
              </Sidebar>
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-4 z-10">
          {pages[currentPage as keyof typeof pages] || <UserHome />}
        </div>
      </div>
    </>
  );
}

// const sampleCourses = [
//   {
//     id: 1,
//     title: "React Fundamentals",
//     description: "Learn the basics of building UI with React.js, components, hooks, and JSX.",
//     progress: 75,
//     image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
//     slug: "react-fundamentals",
//   },
//   {
//     id: 2,
//     title: "Node.js Mastery",
//     description: "Master backend development with Node.js, Express, and REST APIs.",
//     progress: 40,
//     image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
//     slug: "nodejs-mastery",
//   },
//   {
//     id: 3,
//     title: "UI/UX Design Basics",
//     description: "Understand principles of user-centered design, wireframing, and prototyping.",
//     progress: 90,
//     image: "https://cdn-icons-png.flaticon.com/512/906/906343.png",
//     slug: "ui-ux-design-basics",
//   },
// ];
