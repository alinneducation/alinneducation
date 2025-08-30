"use client";
import * as React from "react";
import { MenuIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import LoginWithGoogle from "../login-with-google";

const navItems = [
  { id: 1, path: "/", title: "မူလစာမျက်စာ" },
  { id: 2, path: "/courses", title: "ကျောင်းသင်ခန်းစာများ" },
  { ed: 3, path: "/products", title: "အထွေထွေ" },
  { id: 4, path: "/about-us", title: "ကျွန်ုပ်တို့အကြောင်း" },
  { id: 5, path: "/contact-us", title: "ဆက်သွယ်ရန်" },
];
const SIDEBAR_WIDTH_MOBILE = "18rem";

export default function Navbar() {
  return (
    <nav className="bg-white sticky w-full top-0 start-0 border-b border-gray-200">
      <div className=" flex flex-wrap w-full items-center justify-between mx-auto py-4 px-5">
        <Sheet>
          <SheetTrigger asChild>
            <MenuIcon className="h-6 w-6 md:hidden" />
          </SheetTrigger>
          <SheetContent
            side="left"
            data-sidebar="sidebar"
            data-slot="sidebar"
            data-mobile="true"
            className="bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
          >
            <SheetHeader className="flex w-full font-semibold text-lg">
              <h1 className="flex justify-between">
                Alinn Education
                <ThemeMode />
              </h1>
            </SheetHeader>
            {navItems.map((item, index) => {
              return (
                <SheetClose asChild key={index}>
                  <Link
                    href={item.path}
                    className="flex h-fit w-full items-center justify-start rounded-sm px-4 py-2 font-medium  hover:bg-gray-100"
                    prefetch={false}
                  >
                    <SheetTitle className="">{item.title}</SheetTitle>
                  </Link>
                </SheetClose>
              );
            })}
          </SheetContent>
        </Sheet>
        <Link href={"/"} className="flex items-center md:flex-0 flex-1 px-0">
          <span className="self-center text-2xl font-semibold whitespace-nowrap px-3">
            Alinn Education
          </span>
        </Link>
        <div className="items-center justify-between hidden md:flex w-auto">
          <ul className="flex mt-0 font-medium rounded-lg space-x-8">
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="block py-2 rounded-sm font-semibold "
                    aria-current="page"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex  space-x-3">
          <LoginWithGoogle />
        </div>
      </div>
    </nav>
  );
}

export function ThemeMode() {
  const { setTheme } = useTheme();

  return (
    <div className="flex items-center justify-center cursor-pointer">
      <SunIcon
        onClick={() => setTheme("light")}
        className="p-1 bg-green-800 rounded-full dark:bg-none"
      />

      <MoonIcon
        onClick={() => setTheme("dark")}
        className="dark:p-1 dark:bg-green-800 rounded-full bg-none"
      />
    </div>
  );
}
