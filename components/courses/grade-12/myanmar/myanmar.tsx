import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ReactNode } from "react";
export const Section = ({ children }: { children: ReactNode }) => {
  return (
    <CardHeader className="flex flex-col text-center text-xl md:text-2xl w-full justify-center items-center bg-green-800 dark:bg-green-600 text-white py-2 gap-y-3 rounded-xl font-bold  font-sans">
      {children}
    </CardHeader>
  );
};
export const SubSection = ({ children }: { children: ReactNode }) => {
  return (
    <CardTitle className="flex flex-row text-center text-lg md:text-xl w-full bg-yellow-800 dark:bg-yellow-600 text-white py-2 gap-1 justify-center  rounded-xl mx-auto font-bold  font-sans">
      {children}
    </CardTitle>
  );
};

export const Title = ({ children }: { children: ReactNode }) => {
  return (
    <CardContent className="flex md:text-lg py-1 px-5 gap-3 rounded-full font-bold  font-sans">
      {children}
    </CardContent>
  );
};

export const Exercise = ({ children }: { children: ReactNode }) => {
  return (
    <div className="py-1 mb-3 text-lg md:text-xl text-red-800 dark:text-red-600 rounded-full font-bold  font-sans">
      {children}
    </div>
  );
};

export const Key = ({ children }: { children: ReactNode }) => {
  return <div className="mb-3 text-base md:text-lg font-sans">{children}</div>;
};
