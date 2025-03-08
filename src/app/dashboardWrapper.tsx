"use client";
import { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";

type Props = {
  children: React.ReactNode;
};

const DashboardWrapperLayout = ({ children }: Props) => {
  /*Since i could not  put the layout as a client component i added this sideeffect to add the class to html */
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  });

  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  return (
    <div
      className={`${
        isDarkMode ? "dark" : "light"
      } flex bg-gray-50 text-gray-900 w-full min-h-screen`}
    >
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
        }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: Props) => {
  return (
    <StoreProvider>
      <DashboardWrapperLayout>{children}</DashboardWrapperLayout>{" "}
    </StoreProvider>
  );
};

export default DashboardWrapper;
