"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
  const pathName = usePathname();
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-4">
      {/* <h2>我是根 Dashboard Layout</h2>
       */}
      <div className="flex gap-4 font-bold text-lg underline mb-4 ">
        <Link
          className={pathName === "/dashboard/about" ? "text-purple-500" : ""}
          href="/dashboard/about"
        >
          About
        </Link>
        <Link
          className={pathName === "/dashboard/setting" ? "text-purple-500" : ""}
          href="/dashboard/setting"
        >
          Setting
        </Link>
      </div>
      <h2>Dashboard layout {count}</h2>
      <button
        className="bg-black text-white p-2 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      {children}
    </div>
  );
}
