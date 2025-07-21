interface StatCardProps {
  title: string;
  value: number;
  color?: string; // optional override
}

const colorMap: Record<string, string> = {
  "Courses Enrolled": "bg-indigo-500",
  "Courses Completed": "bg-green-500",
  "Ongoing Courses": "bg-yellow-500",
};

export const StatCard = ({ title, value, color }: StatCardProps) => {
  const bgColor = color || colorMap[title] || "bg-gray-700";

  return (
    <div className={`rounded-xl p-4 text-white shadow-lg ${bgColor}`}>
      <h4 className="text-sm opacity-80 mb-1">{title}</h4>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
};
