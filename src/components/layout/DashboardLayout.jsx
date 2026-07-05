import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function DashboardLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 bg-slate-100 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;