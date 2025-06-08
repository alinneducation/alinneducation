"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarTrigger,
  CustomSidebarTrigger,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Link from "next/link";
import { ThemeMode } from "./layouts/navbar";
type Subjects = {
  url: string;
  subject: string;
};
type GradeType = {
  name: string;
  subjects: Subjects[];
};
export function AppSidebar({
  data,
  teams,
  activeTeam,
}: {
  data: any;
  teams: GradeType;
  activeTeam: Subjects;
}) {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenuButton>
          <Link href={"/"} className="text-lg font-bold">
            Alinn Education
          </Link>
        </SidebarMenuButton>
        <TeamSwitcher teams={teams} activeTeam={activeTeam} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} gradeType={teams.name} />
      </SidebarContent>
      <SidebarFooter className="flex flex-row">
        <NavUser user={data.user} />
        <ThemeMode />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
export function AppSidebarNav() {
  const pathName = usePathname().split("/")[4];

  return (
    <div className="flex w-full h-24 md:h-8 flex-col sticky top-0">
      <div className="flex md:hidden px-4 bg-white dark:bg-zinc-950 w-full h-16 shadow-2xl items-center sticky mt-0">
        <CustomSidebarTrigger className="-ml-1" />
        <Link
          href={"/"}
          className="flex items-center px-4 gap-2"
          prefetch={false}
        >
          Alinn Edcuation
        </Link>
      </div>
      <header className="flex shrink-0 h-8 px-4 z-50  items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <SidebarTrigger className="-ml-1 hidden md:block" />
      </header>
    </div>
  );
}

export const AppContent = ({ children }: { children: ReactNode }) => {
  return <div className="flex px-2 pb-5">{children}</div>;
};
