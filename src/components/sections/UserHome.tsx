// import { StatCard } from "@/components/user/StatCard";
// import { CourseDashboard } from "@/components/user/CourseDashboard";

import  CourseDashboard  from "./CourseDashboard";
import { StatCard } from "./StatCard";

export default function UserHome() {
  const courses = [
    {
      id: 1,
      title: "React Basics",
      description: "Learn the fundamentals of React.",
      progress: 80,
      image: "https://cdn.worldvectorlogo.com/logos/react-2.svg" ,
      slug: "react-basics"
    },
    {
      id: 2,
      title: "Node.js Fundamentals",
      description: "Understand backend development with Node.",
      progress: 55,
      image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
      slug: "nodejs-fundamentals"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Master design principles and tools.",
      progress: 100,
      image: "https://cdn-icons-png.flaticon.com/512/906/906343.png",
      slug: "ui-ux-design"
    },
  ];

  const totalCourses = courses.length;
  const completedCourses = courses.filter(course => course.progress === 100).length;
  const ongoingCourses = courses.filter(course => course.progress < 100).length;

  return (
    <div className="p-6 space-y-8 text-white">
      <div>
        <h2 className="text-2xl font-bold mb-4">Welcome back 👋</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <StatCard title="Courses Enrolled" value={totalCourses} />
          <StatCard title="Courses Completed" value={completedCourses} />
          <StatCard title="Ongoing Courses" value={ongoingCourses} />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Your Courses</h3>
        <CourseDashboard />
      </div>
    </div>
  );
}
