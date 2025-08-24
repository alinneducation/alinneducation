"use client";
import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import SubjectList from "@/components/layouts/subject-list";
import { stams, steams1, steams2 } from "@/datas/high/subjects.json";
import Link from "next/link";
import { useGradeTypeStore } from "@/store/useGradeTypeStore";
import { useEffect, useState } from "react";

type GradeType = {
  en: string;
  my: string;
  url: string;
};
const gradesTypes: GradeType[] = [
  { en: "stams", my: "ဝိဇ္ဇာတွဲ", url: "grade-12/stams" },
  { en: "steams1", my: "ဇီဝတွဲ", url: "grade-12/steams-1" },
  { en: "steams2", my: "ဘောဂတွဲ", url: "grade-12/steams-2" },
];

export default function Page() {
  const { gradeType, changeGradeType } = useGradeTypeStore();
  useEffect(() => {
    changeGradeType("");
  }, []);
  return (
    <div className="flex flex-col max-w-full min-h-screen">
      <header className="block sticky top-0 light z-50">
        <Navbar />
      </header>

      {gradeType == "" && (
        <div className="grid md:grid-cols-3 gap-5 my-5 mx-5">
          {gradesTypes.map((item) => (
            <div
              onClick={() => changeGradeType(item.en)}
              key={item.en}
              className="flex justify-center border rounded-lg items-center cursor-pointer space-y-5 p-5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {item.my}
            </div>
          ))}
        </div>
      )}
      {gradeType == "stams" && (
        <SubjectList
          subjects={stams.subjects}
          grade={{ en: "Grade 12", my: "ဒသမတန်း" }}
          type="(ဝိဇ္ဇာတွဲ)"
        />
      )}
      {gradeType == "steams1" && (
        <SubjectList
          subjects={steams1.subjects}
          grade={{ en: "Grade 12", my: "ဒသမတန်း" }}
          type="(ဇီဝတွဲ)"
        />
      )}
      {gradeType == "steams2" && (
        <SubjectList
          subjects={steams2.subjects}
          grade={{ en: "Grade 10", my: "ဒသမတန်း" }}
          type="(ဘောဂတွဲ)"
        />
      )}

      <footer className="w-full mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
