import { CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

export function Mathematics() {
  return <div>Mathematics Update</div>;
}

export const ContentHeader = ({ children }: { children: ReactNode }) => {
  return (
    <CardHeader className="flex text-center text-xl md:text-2xl w-full bg-green-800 dark:bg-green-600 text-white py-2 gap-y-3 rounded-xl font-bold  font-sans">
      {children}
    </CardHeader>
  );
};
export const ContentSubHeader = ({ children }: { children: ReactNode }) => {
  return (
    <CardTitle className="flex text-lg md:text-xl w-full pl-10 py-2 gap-5 rounded-xl mx-auto font-bold  font-sans">
      {children}
    </CardTitle>
  );
};
