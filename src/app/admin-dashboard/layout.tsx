// app/admin/layout.tsx

import DashboardLayout from "@/Components/dashboardLayout/dashboardLayout";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
