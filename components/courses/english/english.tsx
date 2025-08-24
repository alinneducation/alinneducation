import type { ReactNode } from "react";
export const Unit = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-center text-2xl md:text-3xl w-fit bg-green-800 dark:bg-green-600 text-white py-1 px-5 mb-3 rounded-full mx-auto font-bold  font-sans">
      {children}
    </div>
  );
};
export const Lesson = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-fit py-1 mb-3 rounded-full font-bold text-xl md:text-2xl font-sans text-green-800 dark:text-green-600">
      {children}
    </div>
  );
};

export const Skill = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-fit text-lg md:text-xl bg-orange-800 dark:bg-orange-600 text-white py-1 px-5 mb-3 rounded-full font-bold  font-sans">
      {children}
    </div>
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
