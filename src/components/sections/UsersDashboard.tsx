// "use-client";
// import { IconCalendar } from "@tabler/icons-react";
// import { HeadingCard, HeadingProperties } from "./Dashboard";
// // import { useAuth } from "@/context/authcontext";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import {
//     Table,
//     TableHeader,
//     TableColumn,
//     TableBody,
//     TableRow,
//     TableCell
// } from "@heroui/table";
// import { Tooltip } from "@heroui/tooltip";
// import { Chip } from "@heroui/chip";
// import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "../ui/chart";
// import {  CartesianGrid, XAxis, Area, AreaChart } from "recharts";

// export type SectionCardsProperties = {
//     title: string;
//     count: number;
//     increase: number;
//     days: number[];
// }

// const headingData: HeadingProperties[] = [
//     {
//         title: "Total Accounts",
//         count: 8224,
//         increase: -23
//     },
//     {
//         title: "New Accounts",
//         count: 6,
//         increase: 10
//     },
//     {
//         title: "Today Visits",
//         count: 8224,
//         increase: 80
//     },
//     {
//         title: "Today Purchases",
//         count: 5,
//         increase: 40
//     },
// ]

// export const description = "A line chart"
// const chartData = [
//     { month: "January", desktop: 186, users: 100, newUsers: 50 },
//     { month: "February", desktop: 305, users: 120, newUsers: 70 },
//     { month: "March", desktop: 237, users: 80, newUsers: 30 },
//     { month: "April", desktop: 73, users: 90, newUsers: 40 },
//     { month: "May", desktop: 209, users: 110, newUsers: 60 },
//     { month: "June", desktop: 214, users: 130, newUsers: 90 },
// ]
// const chartConfig = {
//     desktop: {
//         label: "Desktop",
//         color: "var(--chart-1)",
//     },
// } satisfies ChartConfig
// export default function UsersDashboard() {
//     const auth = useAuth();
//     const user = auth?.user;
//     const supabase = createClient();
//     const [userinfo, setUserinfo] = useState()
    
//     // console.log("user", user);

//     useEffect(() => {
        
//         const fetchuserinfo = async () => {
//             try{

//                 const { data, error } = await supabase
//                 .from('profiles')
//                 .select('*')

//             if (error) {
//                 console.error('Error fetching role from Supabase:', error.message);
//                 return;
//             }

//             console.log('Fetched user role:', data);
//             setUserinfo(data);

//             }
//             catch (error) {
//                 console.error("Error fetching user info:", error);
//             }
//         }

//         fetchuserinfo();
//     }, [])

//     if (!auth?.user) {
//         return (
//             <div className="flex items-center justify-center h-full">
//                 <h1 className="text-2xl font-bold text-white">Please login to view the dashboard</h1>
//             </div>
//         );
//     }
//     // console.log("auth", auth);
//     if (user?.role !== "admin" ) {
//         return (
//             <div className="flex items-center justify-center h-full">
//                 <h1 className="text-2xl font-bold text-white">You do not have permission to view this page</h1>
//             </div>
//         );
//     }
    
//     return (

//         <div className="relative flex flex-1 overflow-auto h-full pb-20">
//             <div className="flex  flex-1 flex-col gap-2 rounded-tl-2xl bg-[#020b1a] p-2 md:p-10 ">
//                 <div className="flex w-full justify-between items-center text-white">
//                     <h1 className="text-2xl font-bold w-fit pr-4">Users Dashboard</h1>
//                     <div className="flex gap-2">
//                         <IconCalendar size={20} color="white" />
//                         <h3 className="text-sm font-semibold text-white">{new Date().toDateString()}</h3>
//                     </div>
//                 </div>

//                 <div className="flex gap-2 mt-2">
//                     {headingData.map((i, idx) => (
//                         <HeadingCard key={"heading-card-" + idx} {...i} />
//                     ))}
//                 </div>
//                 <div className="flex flex-1 gap-2">
//                     {[...new Array(1)].map((i, idx) => (
//                         <SectionCards key={"section-card-" + idx} />
//                     ))}
//                 </div>

//                 <div className="relative flex w-full flex-col rounded-xl bg-slate-950 p-2 shadow-2xl transition-all duration-300">
//                     <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
//                     <div className="absolute inset-px rounded-[11px] bg-slate-950" />
//                     <UsersList />
//                 </div>
//             </div>
//         </div>
//     )
// }





// const SectionCards = () => {
//     return (
//         <div className="group relative flex w-full flex-col rounded-xl bg-slate-950 p-4 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20">
//             <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
//             <div className="absolute inset-px rounded-[11px] bg-slate-950" />
//             <div className="relative">
//                 <div className="mb-4 flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                         <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500">
//                             <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                             </svg>
//                         </div>
//                         <h3 className="text-sm font-semibold text-white">Users Growth</h3>
//                     </div>
//                     <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-500">
//                         <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                         Live
//                     </span>
//                 </div>
//                 <div className="mb-4 grid grid-cols-2 gap-4">
//                     <div className="rounded-lg bg-slate-900/50 p-3">
//                         <p className="text-xs font-medium text-slate-400">Total Users</p>
//                         <p className="text-lg font-semibold text-white">24.5K</p>
//                         <span className="text-xs font-medium text-emerald-500">+12.3%</span>
//                     </div>
//                     <div className="rounded-lg bg-slate-900/50 p-3">
//                         <p className="text-xs font-medium text-slate-400">New Users</p>
//                         <p className="text-lg font-semibold text-white">1.2K</p>
//                         <span className="text-xs font-medium text-emerald-500">+8.1%</span>
//                     </div>
//                 </div>
//                 <div className="w-full overflow-hidden rounded-lg bg-slate-900/50 p-3 text-white">

//                     <ChartContainer
//                         config={chartConfig}
//                         className="aspect-auto h-[250px] w-full"
//                     >
//                         <AreaChart data={chartData}>
//                             <defs>

//                                 <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
//                                     <stop
//                                         offset="5%"
//                                         stopColor="var(--color-desktop)"
//                                         stopOpacity={0.8}
//                                     />
//                                     <stop
//                                         offset="95%"
//                                         stopColor="var(--color-desktop)"
//                                         stopOpacity={0.1}
//                                     />
//                                 </linearGradient>
//                                 <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
//                                     <stop
//                                         offset="5%"
//                                         stopColor="var(--color-mobile)"
//                                         stopOpacity={0.8}
//                                     />
//                                     <stop
//                                         offset="95%"
//                                         stopColor="var(--color-mobile)"
//                                         stopOpacity={0.1}
//                                     />
//                                 </linearGradient>
//                             </defs>
//                             <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.1)" />
//                             <XAxis
//                                 dataKey="month"
//                                 tickLine={false}
//                                 axisLine={false}
//                                 tickMargin={8}
//                                 minTickGap={32}
//                                 tickFormatter={(value) => {
//                                    return value.substring(0, 3);
//                                 }}
//                             />
//                             <ChartTooltip
//                                 cursor={false}
//                                 content={
//                                     <ChartTooltipContent
//                                         labelFormatter={(value) => {
//                                             return value.substring(0, 3);
//                                         }}
//                                         indicator="dot"
//                                     />
//                                 }
//                             />

//                             <Area
//                                 dataKey="newUsers"
//                                 type="natural"
//                                 fill="#0066ff40"
//                                 stroke="#0066ff"
//                                 stackId="a"
//                             />
//                             <Area
//                                 dataKey="users"
//                                 type="natural"
//                                 fill="#13C29640"
//                                 stroke="#13C296"
//                                 stackId="a"
                              
//                             />
//                             <ChartLegend content={<ChartLegendContent />} />
//                         </AreaChart>
//                     </ChartContainer>
//                 </div>
//                 <span className="text-xs font-medium text-slate-400">Last 7 days</span>


//             </div>
//         </div>
//     );
// }





// export const columns = [
//     { name: "NAME", uid: "name" },
//     { name: "ROLE", uid: "role" },
//     { name: "STATUS", uid: "status" },
//     { name: "ACTIONS", uid: "actions" },
// ];

// export interface User {
//     id: number;
//     name: string;
//     role: string;
//     status: "active" | "paused" | "vacation";
//     avatar: string;
//     email: string;
// }

// export const users: User[] = [
//     {
//         id: 1,
//         name: "Tony Reichert",
//         role: "CEO",
//         team: "Management",
//         status: "active",
//         age: "29",
//         avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
//         email: "tony.reichert@example.com",
//     },
//     {
//         id: 2,
//         name: "Zoey Lang",
//         role: "Technical Lead",
//         team: "Development",
//         status: "paused",
//         age: "25",
//         avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
//         email: "zoey.lang@example.com",
//     },
//     {
//         id: 3,
//         name: "Jane Fisher",
//         role: "Senior Developer",
//         team: "Development",
//         status: "active",
//         age: "22",
//         avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
//         email: "jane.fisher@example.com",
//     },
//     {
//         id: 4,
//         name: "William Howard",
//         role: "Community Manager",
//         team: "Marketing",
//         status: "vacation",
//         age: "28",
//         avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
//         email: "william.howard@example.com",
//     },
//     {
//         id: 5,
//         name: "Kristen Copper",
//         role: "Sales Manager",
//         team: "Sales",
//         status: "active",
//         age: "24",
//         avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
//         email: "kristen.cooper@example.com",
//     },
//     {
//         id: 6,
//         name: "Lisa Nguyen",
//         role: "QA Engineer",
//         team: "Development",
//         status: "active",
//         age: "26",
//         avatar: "https://i.pravatar.cc/150?u=a016581f4e29026704d",
//         email: "lisa.nguyen@example.com",
//     },
//     {
//         id: 7,
//         name: "Jeffrey Brown",
//         role: "Full Stack Developer",
//         team: "Development",
//         status: "paused",
//         age: "32",
//         avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
//         email: "jeffrey.brown@example.com",
//     },
//     {
//         id: 8,
//         name: "Emily Davis",
//         role: "UX Designer",
//         team: "Design",
//         status: "vacation",
//         age: "29",
//         avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
//         email: "emily.davis@example.com",
//     },
//     {
//         id: 9,
//         name: "Sarah Taylor",
//         role: "Sales Representative",
//         team: "Sales",
//         status: "active",
//         age: "24",
//         avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
//         email: "sarah.taylor@example.com",
//     },
//     {
//         id: 10,
//         name: "Michael Johnson",
//         role: "DevOps Engineer",
//         team: "Development",
//         status: "active",
//         age: "27",
//         avatar: "https://i.pravatar.cc/150?u=a016581f4e29026704d",
//         email: "michael.johnson@example.com",
//     },
//     {
//         id: 11,
//         name: "Jessica Hall",
//         role: "Content Writer",
//         team: "Marketing",
//         status: "paused",
//         age: "30",
//         avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
//         email: "jessica.hall@example.com",
//     },
//     {
//         id: 12,
//         name: "Kevin White",
//         role: "Product Manager",
//         team: "Product",
//         status: "vacation",
//         age: "31",
//         avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
//         email: "kevin.white@example.com",
//     },
//     {
//         id: 13,
//         name: "Heather Martin",
//         role: "UX Researcher",
//         team: "Design",
//         status: "active",
//         age: "25",
//         avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
//         email: "heather.martin@example.com",
//     },
//     {
//         id: 14,
//         name: "Richard Lee",
//         role: "Frontend Developer",
//         team: "Development",
//         status: "active",
//         age: "26",
//         avatar: "https://i.pravatar.cc/150?u=a016581f4e29026704d",
//         email: "richard.lee@example.com",
//     },
//     {
//         id: 15,
//         name: "Laura Brown",
//         role: "Marketing Manager",
//         team: "Marketing",
//         status: "paused",
//         age: "28",
//         avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
//         email: "laura.brown@example.com",
//     },
// ];



// // import { TrendingUp } from "lucide-react"

// import {
//     Card,
//     CardContent,
//     CardDescription,
//     // CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
// import { useAuth } from "@/context/authcontext";
// import { createClient } from "@/lib/supabase/client";
// // import { SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";
// // import { Select } from "@react-three/drei";



// export function ChartLineDefault() {
//     return (
//         <div className="group relative flex w-full flex-col rounded-xl bg-slate-950 p-2 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20">
//             <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
//             <div className="absolute inset-px rounded-[11px] bg-slate-950" />
//             <Card className="relative pt-0">
//                 <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
//                     <div className="grid flex-1 gap-1">
//                         <CardTitle>Area Chart - Interactive</CardTitle>
//                         <CardDescription>
//                             Showing total visitors for the last 3 months
//                         </CardDescription>
//                     </div>

//                 </CardHeader>
//                 <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">

//                 </CardContent>
//             </Card>
//         </div>
//     )
// }


// export const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => {
//     return (
//         <svg
//             aria-hidden="true"
//             fill="none"
//             focusable="false"
//             height="1em"
//             role="presentation"
//             viewBox="0 0 20 20"
//             width="1em"
//             {...props}
//         >
//             <path
//                 d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//             />
//             <path
//                 d="M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//             />
//         </svg>
//     );
// };

// export const DeleteIcon = (props: React.SVGProps<SVGSVGElement>) => {
//     return (
//         <svg
//             aria-hidden="true"
//             fill="none"
//             focusable="false"
//             height="1em"
//             role="presentation"
//             viewBox="0 0 20 20"
//             width="1em"
//             {...props}
//         >
//             <path
//                 d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//             />
//             <path
//                 d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//             />
//             <path
//                 d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//             />
//             <path
//                 d="M8.60834 13.75H11.3833"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//             />
//             <path
//                 d="M7.91669 10.4167H12.0834"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//             />
//         </svg>
//     );
// };

// export const EditIcon = (props: React.SVGProps<SVGSVGElement>) => {
//     return (
//         <svg
//             aria-hidden="true"
//             fill="none"
//             focusable="false"
//             height="1em"
//             role="presentation"
//             viewBox="0 0 20 20"
//             width="1em"
//             {...props}
//         >
//             <path
//                 d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeMiterlimit={10}
//                 strokeWidth={1.5}
//             />
//             <path
//                 d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeMiterlimit={10}
//                 strokeWidth={1.5}
//             />
//             <path
//                 d="M2.5 18.3333H17.5"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeMiterlimit={10}
//                 strokeWidth={1.5}
//             />
//         </svg>
//     );
// }

// const statusColorMap: Record<User["status"], "success" | "danger" | "warning" | "default" | "primary" | "secondary"> = {
//     active: "success",
//     paused: "danger",
//     vacation: "warning",
// };

// export function UsersList() {
//     const renderCell = React.useCallback((user: User, columnKey: keyof User | "actions") => {
//         const cellValue = user[columnKey as keyof User];

//         switch (columnKey) {
//             case "name":
//                 return (
//                     <div className="flex items-center gap-2">
//                         <Image
//                             src={user.avatar}
//                             alt={typeof cellValue === "string" ? cellValue : String(cellValue)}
//                             width={32}
//                             height={32}
//                             className="w-8 h-8 rounded-lg object-cover"
//                         />
//                         <div className="flex flex-col">
//                             <span className="font-medium">{cellValue}</span>
//                             <span className="text-xs text-default-400">{user.email}</span>
//                         </div>
//                     </div>
//                 );
//             case "status":
//                 return (
//                     <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
//                         {cellValue}
//                     </Chip>
//                 );
//             case "actions":
//                 return (
//                     <div className="relative flex justify-around items-center gap-2 text-white">
//                         <Tooltip content="Details">
//                             <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
//                                 <EyeIcon />
//                             </span>
//                         </Tooltip>
//                         <Tooltip content="Edit user">
//                             <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
//                                 <EditIcon />
//                             </span>
//                         </Tooltip>
//                         <Tooltip color="danger" content="Delete user">
//                             <span className="text-lg text-danger cursor-pointer active:opacity-50">
//                                 <DeleteIcon />
//                             </span>
//                         </Tooltip>
//                     </div>
//                 );
//             default:
//                 return cellValue;
//         }
//     }, []);

//     return (
//         <Table aria-label="Example table with custom cells" className="text-white">
//             <TableHeader className="capitalize bg-blue-600/20 rounded-2xl" columns={columns}>
//                 {(column) => (
//                     <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
//                         {column.name}
//                     </TableColumn>
//                 )}
//             </TableHeader>
//             <TableBody items={users}>
//                 {(item) => (
//                     <TableRow key={item.id} className="group hover:scale(1.02) duration-100 rounded-2xl hover:bg-blue-600/10">
//                         {(columnKey) => <TableCell>{renderCell(item, columnKey as keyof User | "actions")}</TableCell>}
//                     </TableRow>
//                 )}
//             </TableBody>
//         </Table>
//     );
// }


import { useEffect, useState } from "react";
import  { UserInfo } from "./admindashboard-components/DashboardHeader";
import SectionCards from "./admindashboard-components/SectionCards";
import UsersList from "./admindashboard-components/UsersList";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/context/authcontext";
import { IconCalendar } from "@tabler/icons-react";
import { HeadingCard, HeadingProperties } from "./Dashboard";

const UsersDashboard = () => {
  // const [userInfo, setUserInfo] = useState<UserInfo[] | undefined>();
  // const supabase = createClient();
  //   useEffect(() => {
        
  //       const fetchuserinfo = async () => {
  //           try{

  //               const { data, error } = await supabase
  //               .from('profiles')
  //               .select('*')

  //           if (error) {
  //               console.error('Error fetching role from Supabase:', error.message);
  //               return;
  //           }

  //           console.log('Fetched user role:', data);
  //           setUserInfo(data);

  //           }
  //           catch (error) {
  //               console.error("Error fetching user info:", error);
  //           }
  //       }

  //       fetchuserinfo();
  // }, [supabase]);
    const auth = useAuth();
    const user = auth?.user;
    const supabase = createClient();
    const [userinfo, setUserinfo] = useState<UserInfo[] | undefined>()
    
    // console.log("user", user);

    useEffect(() => {
        
        const fetchuserinfo = async () => {
            try{

                const { data, error } = await supabase
                .from('profiles')
                .select('*')

            if (error) {
                console.error('Error fetching role from Supabase:', error.message);
                return;
            }

            console.log('Fetched user role:', data);
            setUserinfo(data);

            }
            catch (error) {
                console.error("Error fetching user info:", error);
            }
        }

        fetchuserinfo();
    }, [supabase])

    if (!auth?.user) {
        return (
            <div className="flex items-center justify-center h-full">
                <h1 className="text-2xl font-bold text-white">Please login to view the dashboard</h1>
            </div>
        );
    }
    // console.log("auth", auth);
    if (user?.role !== "admin" ) {
        return (
            <div className="flex items-center justify-center h-full">
                <h1 className="text-2xl font-bold text-white">You do not have permission to view this page</h1>
            </div>
        );
    }

  if (!userinfo) return <p>Loading...</p>;
    // <div className="space-y-4">
    //   <DashboardHeader userInfo={userInfo} />
    //   <HeadingCards userInfo={userInfo} />
    //   <SectionCards userInfo={userInfo} />
    //   <UsersList userInfo={userInfo} />
    // </div>
    
    const headingData: HeadingProperties[] = [
    {
        title: "Total Accounts",
        count: 8224,
        increase: -23
    },
    {
        title: "New Accounts",
        count: 6,
        increase: 10
    },
    {
        title: "Today Visits",
        count: 8224,
        increase: 80
    },
    {
        title: "Today Purchases",
        count: 5,
        increase: 40
    },
]
    return (

        <div className="relative flex flex-1 overflow-auto h-full pb-20">
            <div className="flex  flex-1 flex-col gap-2 rounded-tl-2xl bg-[#020b1a] p-2 md:p-10 ">
                <div className="flex w-full justify-between items-center text-white">
                    <h1 className="text-2xl font-bold w-fit pr-4">Users Dashboard</h1>
                    <div className="flex gap-2">
                        <IconCalendar size={20} color="white" />
                        <h3 className="text-sm font-semibold text-white">{new Date().toDateString()}</h3>
                    </div>
                </div>

                <div className="flex gap-2 mt-2">
                    {headingData.map((i, idx) => (
                        <HeadingCard key={"heading-card-" + idx} {...i} />
                    ))}
                </div>
                <div className="flex flex-1 gap-2">
                    {[...new Array(1)].map((i, idx) => (
                        <SectionCards key={"section-card-" + idx}/>
                    ))}
                </div>

                <div className="relative flex w-full flex-col rounded-xl bg-slate-950 p-2 shadow-2xl transition-all duration-300">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
                    <div className="absolute inset-px rounded-[11px] bg-slate-950" />
                    <UsersList user={userinfo}/>
                </div>
            </div>
        </div>
    )
}

export default UsersDashboard;
