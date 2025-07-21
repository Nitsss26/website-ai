import { UserInfo } from "./DashboardHeader";

const HeadingCards = ({ userInfo }:{userInfo:UserInfo[]}) => {
  const user = {
    age: "N/A",
    role: "student",
    status: "inactive",
    ...userInfo,
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded shadow">
        <p className="text-sm">Role</p>
        <h2 className="text-lg font-bold">{user.role}</h2>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <p className="text-sm">Status</p>
        <h2 className="text-lg font-bold">{user.status}</h2>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <p className="text-sm">Age</p>
        <h2 className="text-lg font-bold">{user.age || "N/A"}</h2>
      </div>
    </div>
  );
};

export default HeadingCards;
