"use client";

import * as React from "react";
import { BookOpen, ChevronsUpDown } from "lucide-react";
import grades from "@/datas/grades.json";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Subjects = {
  url: string;
  en: string;
  my: string;
};
type GradeType = {
  name: string;
  subjects: Subjects[];
};
export function TeamSwitcher({
  teams,
  activeTeam,
}: {
  teams: GradeType;
  activeTeam: Subjects;
}) {
  const { isMobile } = useSidebar();

  const pathName = usePathname();
  const gradePath = pathName.split("/")[2];
  const activeGrade = grades.filter((grade) => {
    const toLowerGrade = grade.en.split(" ").join("-").toLowerCase();
    return gradePath == toLowerGrade;
  });
  const router = useRouter();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <BookOpen className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold pb-1">
                  {activeGrade[0].my}
                </span>
                <span className="truncate text-xs">{activeTeam.my}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              ဘာသာရပ်များ
            </DropdownMenuLabel>
            {teams.subjects.map((team) => (
              <DropdownMenuItem
                key={team.my}
                onClick={() => {
                  router.replace(`/courses/${gradePath}/${team.url}/intro`);
                }}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-sm border">
                  <BookOpen className="size-4 shrink-0" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold pb-1">
                    {activeGrade[0].my}
                  </span>
                  <span className="truncate text-xs">{team.my}</span>
                </div>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
