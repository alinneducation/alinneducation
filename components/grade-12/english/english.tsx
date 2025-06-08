import { ReactNode } from "react";

export const Question = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const Answer = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const Poems = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col md:w-2xl justify-center items-center bg-green-800 dark:bg-green-700 mx-auto p-8 rounded-2xl">
      {children}
    </div>
  );
};
export const PoemTitle = ({ children }: { children: ReactNode }) => {
  return <div className="font-bold pb-3 text-lg md:text-3xl">{children}</div>;
};
export const PoemItem = ({ children }: { children: ReactNode }) => {
  return <div className="font-semibold md:text-lg">{children}</div>;
};
