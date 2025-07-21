// app/dashboard/page.tsx
import { Suspense } from "react";
import DashboardClient from "./DashboardClient";

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="text-white p-4">Loading dashboard...</div>}>
      <DashboardClient />
    </Suspense>
  );
}
