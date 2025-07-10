import type { ReactNode } from "react";

export const Header = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-center font-bold md:text-2xl font-sans">
      {children}
    </div>
  );
};

export const SubHeader = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-center font-bold md:text-xl font-sans">{children}</div>
  );
};

export const JustifyHeader = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-center font-bold md:text-2xl flex justify-between font-sans">
      {children}
    </div>
  );
};
export const QuestionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-between text-sm md:text-lg font-semibold text-justify gap-2">
      {children}
    </div>
  );
};
export const QuestionItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex text-sm md:text-lg gap-2 pl-7 text-justify">
      {children}
    </div>
  );
};

export const SelectAnswer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex md:[&>*]:flex-1 md:text-lg gap-2 w-full justify-between flex-wrap text-wrap pl-15">
      {children}
    </div>
  );
};

export const Paragraph = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" flex flex-col md:text-lg gap-2 text-justify">
      {children}
    </div>
  );
};

export const DialogueBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-wrap justify-between px-3 md:grid md:grid-cols-3 md:text-lg border-3 border-zinc-700 gap-2 text-justify">
      {children}
    </div>
  );
};
