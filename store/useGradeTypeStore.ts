import { create } from "zustand";
interface gradeTypeState {
  gradeType: string;
  changeGradeType: (gradeType: string) => void;
}
export const useGradeTypeStore = create<gradeTypeState>((set) => ({
  gradeType: "",
  changeGradeType: (gradeType: string) =>
    set((state) => ({ gradeType: gradeType })),
}));
