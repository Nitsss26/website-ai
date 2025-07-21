import Image from "next/image";


export interface UserInfo {
  id: string; 
  full_name: string | null;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string | null;
  email: string;
  role: "student" | "admin" | "instructor" | string; 
  status: "active" | "inactive" | "pending" | string;
  age: number | null;
  team: string | null;
  created_at: string;
  updated_at: string;
}


const DashboardHeader = ({ userInfo }:{userInfo:UserInfo[]}) => {
  const user = {
    ...{
      full_name: "John Doe",
      avatar_url: "/default-avatar.png",
      role: "student",
      email: "example@example.com",
    },
    ...userInfo,
  };

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">Welcome, {user.full_name}</h1>
        <p className="text-gray-500">{user.email}</p>
      </div>
      <Image
        width={48}  
        height={48}
        src={user.avatar_url || "/default-avatar.png"}
        alt="avatar"
        className="w-12 h-12 rounded-full"
      />
    </div>
  );
};

export default DashboardHeader;
