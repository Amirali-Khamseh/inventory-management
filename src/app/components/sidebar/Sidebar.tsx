"use client";
import { Menu } from "lucide-react";

export default function Sidebar() {
  return (
    <div>
      {/*top*/}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>logo</div>
        <h1 className="font-extrabold text-2xl">company</h1>
      </div>
      <button
        className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
        onClick={() => {}}
      >
        <Menu className="w-4 h-4" />
      </button>
      {/*links */}
      <div className="flex-grow mt"></div>
      {/*footer*/}
      <div>
        <p className="text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Amir Khamseh
        </p>
      </div>
    </div>
  );
}
