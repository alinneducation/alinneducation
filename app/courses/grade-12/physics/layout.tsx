"use client";
import { categories } from "@/public/category/grade-12/physics/categories.json";
import { steams1, steams2 } from "@/datas/high/subjects.json";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import {
  AppContent,
  AppSidebar,
  AppSidebarNav,
} from "@/components/app-sidebar";
import { useGradeTypeStore } from "@/store/useGradeTypeStore";

export default function Grade12Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { gradeType } = useGradeTypeStore();
  return (
    <div>
      <SidebarProvider>
        <AppSidebar
          data={categories}
          teams={gradeType === "steams2" ? steams2 : steams1}
          activeTeam={steams1.subjects[4]}
        />
        <SidebarInset>
          <AppSidebarNav />
          <AppContent>{children}</AppContent>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
