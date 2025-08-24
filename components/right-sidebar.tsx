"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenuButton,
} from "@/components/ui/right-sidebar";

import { ReactNode } from "react";
import Link from "next/link";

type Item = {
  url: string;
  lesson: string;
  title: string;
};

export function RightAppSidebar({ items }: { items: Item[] }) {
  return (
    <Sidebar side="right">
      <SidebarHeader>
        <SidebarMenuButton>
          <Link href={"/"} className="text-lg font-bold">
            Alinn Education
          </Link>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        {items.map((item) => (
          <Link href={item.url} key={item.url}>
            <div className="flex pl-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-3 m-1">
              <p className="text-nowrap">{item.lesson}</p>
              <span className="px-1">:</span>
              <p> {item.title}</p>
            </div>
          </Link>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}

export const AppContent = ({ children }: { children: ReactNode }) => {
  return <div className="flex px-2 pb-5 w-full">{children}</div>;
};
