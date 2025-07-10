import { ReactNode } from "react";

export const DifinationsTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col text-sm md:text-lg text-justify">
      {children}
    </div>
  );
};
