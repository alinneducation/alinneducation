"use client";
import { stams, steams1, steams2 } from "@/datas/high/subjects.json";
import { categories } from "@/public/category/grade-11/mathematics/categories.json";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import {
  AppSidebar,
  AppSidebarNav,
  AppContent,
} from "@/components/app-sidebar";
import { useGradeTypeStore } from "@/store/useGradeTypeStore";

export default function Grade12Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { gradeType } = useGradeTypeStore();
  return (
    <SidebarProvider>
      <AppSidebar
        data={categories}
        teams={
          gradeType === "stams"
            ? stams
            : gradeType === "steams2"
            ? steams2
            : steams1
        }
        activeTeam={stams.subjects[2]}
      />
      <SidebarInset>
        <AppSidebarNav />
        <AppContent>{children}</AppContent>
      </SidebarInset>
    </SidebarProvider>
  );
}
