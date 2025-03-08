"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { Menu } from "lucide-react";
import SidebarLinks from "./SidebarLinks";
import { links } from "./SidebarData";

export default function Sidebar() {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };
  const sidebarClassNames = `fixed flex flex-col
${
  isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
} bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div className={sidebarClassNames}>
      {/*top*/}
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
          isSidebarCollapsed ? "px-5" : "px-8"
        }`}
      >
        <div>logo</div>
        <h1
          className={`font-extrabold text-2xl ${
            isSidebarCollapsed ? "hidden" : "block"
          }`}
        >
          company
        </h1>
      </div>
      <button
        className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
        onClick={toggleSidebar}
      >
        <Menu className="w-4 h-4" />
      </button>
      {/*links */}
      <div className="flex-grow mt-8">
        {links.map((item) => (
          <SidebarLinks
            key={item.label}
            href={item.href}
            icon={item.icon}
            label={item.label}
            isCollapsed={isSidebarCollapsed}
          />
        ))}
      </div>
      {/*footer*/}
      <div>
        <p
          className={`text-center text-xs text-gray-500 pb-4 ${
            isSidebarCollapsed ? "hidden" : "block"
          }`}
        >
          &copy; {new Date().getFullYear()} Amir Khamseh
        </p>
      </div>
    </div>
  );
}
