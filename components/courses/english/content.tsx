import type { ReactNode } from "react";
export const Header = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col text-center text-xl md:text-2xl w-full justify-center items-center bg-green-800 dark:bg-green-600 text-white py-2 gap-y-3 rounded-xl font-bold  font-sans">
      {children}
    </div>
  );
};
export const Unit = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row text-center text-lg md:text-xl w-full bg-yellow-800 dark:bg-yellow-600 text-white py-2 gap-1 justify-center  rounded-xl mx-auto font-bold  font-sans">
      {children}
    </div>
  );
};

export const Lesson = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex md:text-lg py-1 px-5 gap-3 rounded-full font-bold  font-sans">
      {children}
    </div>
  );
};
