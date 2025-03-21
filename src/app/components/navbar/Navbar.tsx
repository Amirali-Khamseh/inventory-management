"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { Bell, Menu, Moon, Settings, Sun } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };
  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/*left */}
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      <div className="relative">
        <input
          type="search"
          className="pl-10 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Search Products & Groups "
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Bell className="text-gray-500" size={20} />
        </div>
      </div>
      {/*right */}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center">
          <div>
            <button onClick={toggleDarkMode}>
              {!isDarkMode ? (
                <Sun size={24} className="cursor-pointer text-gray-500" />
              ) : (
                <Moon size={24} className="cursor-pointer text-gray-500" />
              )}
            </button>
          </div>
        </div>

        <hr className="w0 h-7 border border-solid border-l border-gray-300 mx-3" />
        <div className="flex item-center gap-3 cursor-pointer">
          <div className="w-9 h-9">image</div>
          <span className="font-semibold">Name</span>
        </div>
        <Link href="/settings">
          <Settings className="cursor-pointer text-gray-500" size={24} />
        </Link>
      </div>
    </div>
  );
}
