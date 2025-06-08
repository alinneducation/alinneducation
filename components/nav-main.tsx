"use client";

import { BookOpen, ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavMain({
  items,
  gradeType,
}: {
  items: {
    title: string;
    url: string;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
  gradeType: string;
}) {
  const pathName = usePathname().split("/")[2];
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Courses</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <div key={item.title}>
            {item.items == null ? (
              <SidebarMenuButton>
                <BookOpen className="invisible" />
                <Link href={`/courses/${pathName}/${gradeType}/${item.url}`}>
                  {item.title}
                </Link>
              </SidebarMenuButton>
            ) : (
              <Collapsible
                key={item.title}
                asChild
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      <BookOpen className="invisible" />
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <Link
                              href={`/courses/${pathName}/${gradeType}/${subItem.url}`}
                            >
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            )}
          </div>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
