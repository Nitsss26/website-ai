"use client";
import React, { useEffect, useState } from "react";
// Update the import path below to the correct location of your Sidebar components.
// For example, if the components are in 'src/components/ui/sidebar.tsx', use:
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
    IconBooks,
    IconChartPie2Filled,
    IconHeadphones,
    IconLayoutDashboardFilled,
    IconMessageReportFilled,
    IconNews,
    IconSettings,
    IconTerminal2,
    IconTrendingUp,
    // IconUserBolt,
    IconUsersGroup,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import Dashboard from "@/components/sections/Dashboard";
import UsersDashboard from "@/components/sections/UsersDashboard";
import FinanceDashBoard from "@/components/sections/FinanceDashboard";
import BlogDashboard from "@/components/sections/BlogDashboard";
import FeedbackDashboard from "@/components/sections/FeedbackDashboard";
import ReportDashboard from "@/components/sections/ReportDashboard";
import CourseDashboard from "@/components/sections/CourseDashboard";
import LogsDashboard from "@/components/sections/LogsDashboard";
import ContactDashboard from "@/components/sections/ContactDashboard";
import SettingsDashboard from "@/components/sections/SettingsDashboard";

export default function AdminDashboard() {
    const searchParams = useSearchParams();
    const router = useRouter();
    useEffect(() => {
        console.log(searchParams.get("searchParams"));
    }, [searchParams]);

    const handleChangePage = (href: string) => {
        router.push(`?page=${href}`);
    };
    const links = [
        {
            label: "Dashboard",
            href: "",
            icon: (
                <IconLayoutDashboardFilled className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
            ),
        },
        {
            label: "Users",
            href: "users",
            icon: (
                <IconUsersGroup className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
            ),
        },
        {
            label: "Courses",
            href: "courses",
            icon: (
                <IconBooks className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
            )

        },
        {
            label: "Blogs",
            href: "blogs",
            icon: (
                <IconNews className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
            ),
        },
        {
            label: "Feedback",
            href: "feedback",
            icon: (
                <IconMessageReportFilled className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
            ),
        },
        {
            label: "Reports",
            href: "reports",
            icon: (
                <IconChartPie2Filled className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
            ),
        },
        {
            label: "Finance",
            href: "finances",
            icon: (
                <IconTrendingUp className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
            ),
        },

        {
            label: "Logs",
            href: "logs",
            icon: (
                <IconTerminal2 className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
            ),
        },

        {
            label: "Contact",
            href: "contact",
            icon: (
                <IconHeadphones className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
            ),
        },
        {
            label: "Settings",
            href: "settings",
            icon: (
                <IconSettings className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
            ),
        },
    ];
    const pages = {
        dashboard: <Dashboard />,
        users: <UsersDashboard/>,
        courses: <CourseDashboard />,
        blogs: <BlogDashboard />,
        feedback: <FeedbackDashboard />,
        reports: <ReportDashboard />,
        finances: <FinanceDashBoard />,
        logs: <LogsDashboard />,
        contact: <ContactDashboard />,
        settings: <SettingsDashboard />

    }
    const [open, setOpen] = useState(false);
    return (
        <div
            className={cn(
                "mx-auto  flex w-full max-w-7xl flex-1 flex-col overflow-hidden rounded-md md:flex-row bg-[#020b1a]",
                "h-screen", // for your use case, use `h-screen` instead of `h-[60vh]`
            )}
        >
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="gap-4 ">
                    {open ? <Logo /> : <LogoIcon />}
                    <div className=" flex flex-col gap-1">
                        {links.map((link, idx) => (
                            <SidebarLink key={idx} link={link} onClick={() => handleChangePage(link.href)} className={`${searchParams.get("page") === link.href ? "bg-gray-600 text-white p-2" : "hover:bg-gray-600/10"}`} />
                        ))}
                    </div>
                </SidebarBody>
            </Sidebar>
            {
                pages[searchParams.get("page") as keyof typeof pages || "dashboard"] || <Dashboard />
            }
        </div>
    );
}
export const Logo = () => {
    return (
        <a
            href="#"
            className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-white"
        >
            <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium whitespace-pre text-white dark:text-white"
            >
                Acet Labs
            </motion.span>
        </a>
    );
};
export const LogoIcon = () => {
    return (
        <a
            href="#"
            className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
        >
            <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
        </a>
    );
};

// Dummy dashboard component with content
// const DemoDashboard = () => {
//     return (
//          <div className="flex flex-1">
//              <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl bg-[#020b1a] p-2 md:p-10 ">
//                  <div className="flex gap-2">
//                      {[...new Array(4)].map((i, idx) => (
//                          <div
//                              key={"first-array-demo-1" + idx}
//                              className="h-20 w-full animate-pulse rounded-lg bg-gray-600 "
//                          ></div>
//                      ))}
//                  </div>
//                  <div className="flex flex-1 gap-2">
//                      {[...new Array(2)].map((i, idx) => (
//                          <div
//                              key={"second-array-demo-1" + idx}
//                              className="h-full w-full animate-pulse rounded-lg bg-gray-600"
//                          ></div>
//                      ))}
//                  </div>
//              </div>
//          </div>
//     );
// };
 


