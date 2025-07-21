import { Suspense } from "react";
import AdminDashboardClient from "./AdminDashboardClient";

export default function AdminDashboardPage() {
  return (
    <Suspense fallback={<div className="text-white p-4">Loading...</div>}>
      <AdminDashboardClient />
    </Suspense>
  );
}
