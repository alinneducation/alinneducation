import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const TableHeader = ({ children }: { children: ReactNode }) => {
  return (
    <thead className="bg-zinc-200 dark:bg-zinc-900 border-2">{children}</thead>
  );
};

export const TableHead = ({ children }: { children: ReactNode }) => {
  return (
    <th className="border-2 border-zinc-300 dark:border-zinc-800">
      {children}
    </th>
  );
};

export const TableBody = ({ children }: { children: ReactNode }) => {
  return <tbody>{children}</tbody>;
};

export const TableRow = ({ children }: { children: ReactNode }) => {
  return <tr>{children}</tr>;
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
        "border-2 justify-center items-center hover:bg-zinc-200 dark:hover:bg-zinc-900",
        className
      )}
    >
      {children}
    </td>
  );
};
