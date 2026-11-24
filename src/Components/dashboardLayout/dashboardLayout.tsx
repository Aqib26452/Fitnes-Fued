"use client";

import { useState, ReactNode } from "react";

import Navbar from "./Navbar";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="flex min-h-screen md:bg-[#191F28] relative">
      {/* ───── Mobile sidebar ───── */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-[245px] transform transition-transform duration-300 lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* ───── Hamburger button (mobile) ───── */}
      {!isSidebarOpen && (
        <button
          aria-label="Open sidebar"
          onClick={toggleSidebar}
          className="fixed top-6 left-4 z-40 text-white lg:hidden"
        >
          <FiMenu size={24} />
        </button>
      )}

      {/* ───── Desktop sidebar ───── */}
      <div className="hidden lg:block w-[245px]">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* ───── Overlay (mobile) ───── */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* ───── Main content ───── */}
      <div className="flex flex-col flex-1 min-h-screen">
        <header className="relative z-30">
          <Navbar />
        </header>

        <main className="flex-1 overflow-auto px-5 py-4">{children}</main>
      </div>
    </div>
  );
}
