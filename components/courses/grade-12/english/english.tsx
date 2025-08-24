import { Card, CardHeader } from "@/components/ui/card";
import { ReactNode } from "react";

export const Question = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const Answer = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const Poems = ({ children }: { children: ReactNode }) => {
  return (
    <Card className="flex flex-col md:w-2xl mx-auto p-5 mb-5 rounded-2xl">
      {children}
    </Card>
  );
};
export const PoemTitle = ({ children }: { children: ReactNode }) => {
  return (
    <CardHeader className="font-bold text-lg bg-green-800 dark:bg-green-600 py-2 rounded-full md:text-3xl text-center text-white">
      {children}
    </CardHeader>
  );
};
export const PoemItem = ({ children }: { children: ReactNode }) => {
  return <div className="font-semibold md:text-lg pl-10">{children}</div>;
};
