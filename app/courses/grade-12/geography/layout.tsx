"use client";
import { stams } from "@/datas/high/subjects.json";
import { categories } from "@/datas/grade-12/geography/categories.json";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import {
  AppSidebar,
  AppSidebarNav,
  AppContent,
} from "@/components/app-sidebar";
import { useGradeTypeStore } from "@/store/useGradeTypeStore";
import { useEffect } from "react";

export default function Grade12Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { changeGradeType } = useGradeTypeStore();
  useEffect(() => {
    changeGradeType("stams");
  }, []);
  return (
    <SidebarProvider>
      <AppSidebar
        data={categories}
        teams={stams}
        activeTeam={stams.subjects[3]}
      />
      <SidebarInset>
        <AppSidebarNav />
        <AppContent>{children}</AppContent>
      </SidebarInset>
    </SidebarProvider>
  );
}
