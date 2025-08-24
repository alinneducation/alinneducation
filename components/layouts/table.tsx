import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const TableHeader = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <thead className={cn("bg-zinc-200 dark:bg-zinc-900 border-2", className)}>
      {children}
    </thead>
  );
};

export const TableHead = ({
  children,
  className,
  align = "center",
}: {
  children: ReactNode;
  className?: string;
  align?: "center" | "left";
}) => {
  return (
    <th
      className={cn(
        "border-2 border-zinc-300 py-1 dark:border-zinc-800",
        className
      )}
      align={align}
    >
      {children}
    </th>
  );
};

export const TableBody = ({ children }: { children: ReactNode }) => {
  return <tbody>{children}</tbody>;
};

export const TableRow = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <tr className={cn("border-1", className)}>{children}</tr>;
};

export const TableData = ({
  children,
  rowSpan,
  colSpan,
  align = "center",
  className,
}: {
  children: ReactNode;
  rowSpan?: number;
  colSpan?: number;
  align?: "center" | "left";
  className?: string;
}) => {
  return (
    <td
      rowSpan={rowSpan}
      colSpan={colSpan}
      align={align}
      className={cn(
        "border-x-1 justify-center items-center py-1  border-zinc-300 dark:border-zinc-800",
        className
      )}
    >
      {children}
    </td>
  );
};
