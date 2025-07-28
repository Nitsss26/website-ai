import { useAuth } from "@/context/Authcontext";
import { cn } from "@/lib/utils";
import {IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";

interface ListItemProps {
    children: React.ReactNode;
    NavLink: string;
    className?: string;
}
const ListItem: React.FC<ListItemProps> = ({ children, NavLink, className }) => {
    return (
        <li>
            <Link
                href={NavLink}
                scroll={true}
                className={
                    cn(
                        "flex py-2 text-base hover:border-b border-stroke border-white font-small text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex",
                        className
                    )
                }
            >
                {children}
            </Link>
        </li>
    );
};


const NavSection = () => {
    const [open, setOpen] = useState(false);
    const auth = useAuth();
    const user = auth?.user;

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    }

    return (
        <header className={`absolute top-2 md:top-0 p-2 z-50 flex w-full justify-center items-center bg-transparent `}>
            <div className="container">
                <div className="relative  flex items-center justify-between">
                    <div className="w-60 max-w-full px-4">
                        <Link href="/">

                            <span className="text-xl md:text-xl xl:text-2xl text-white font-semibold">
                                Learn AI
                            </span>
                        </Link>
                    </div>
                    <div className="flex items-center justify-between px-4">
                        <div>
                            <button
                                onClick={() => setOpen(!open)}
                                id="navbarToggler"
                                className={`${open ? "navbarTogglerActive" : ""
                                    } absolute right-2 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                            >
                                <IconMenu2 className="text-white text-xl h-5 w-5" />
                            </button>
                            <nav
                                // :className="!navbarOpen && 'hidden' "
                                id="navbarCollapse"
                                className={`absolute right-2 top-full w-full max-w-[250px] rounded-lg bg-[#020b1a] px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${!open ? "hidden" : ""
                                    } `}
                            >
                                <ul className="block lg:flex">
                                    <ListItem NavLink="/#" className="text-white hover:text-primary">Home</ListItem>
                                    <ListItem NavLink="/courses" className="text-white hover:text-primary">Courses</ListItem>
                                    <ListItem NavLink="/blogs" className="text-white hover:text-primary">Blogs</ListItem>
                                    <ListItem NavLink="/about" className="text-white hover:text-primary">About</ListItem>
                                    {user?.role === 'student' && <ListItem NavLink="/dashboard" className="text-white hover:text-primary">Dashboard</ListItem>}
                                    {user?.role === 'admin' && <ListItem NavLink="/admin-dashboard" className="text-white hover:text-primary">Dashboard</ListItem>}
                                </ul>
                            </nav>
                        </div>
                        <div className="hidden justify-end pr-16 gap-1 sm:flex lg:pr-0">
                           {!user? <Link href={"/login"} className="w-30 transform rounded-lg text-center bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                                Login
                            </Link>
                            :
                            <Button onClick={handleLogout} className="w-30 transform rounded-lg text-center bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                                Logout
                            </Button>}
                            {!user && <Link href={"/signup"} className="w-30 text-center transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
                                Sign Up
                            </Link>}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavSection;

