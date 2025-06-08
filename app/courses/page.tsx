import Footer from "@/components/layouts/footer";
import { GradeCard } from "@/components/layouts/course-card";
import Navbar from "@/components/layouts/navbar";

type Grade = {
  en: string;
  my: string;
  url: string;
};
const grades: Grade[] = [
  { en: "KG", my: "သူငယ်တန်း", url: "kg" },
  { en: "Grade 1", my: "ပထမတန်း", url: "grade-1" },
  { en: "Grade 2", my: "ဒုတိယတန်း", url: "grade-2" },
  { en: "Grade 3", my: "တတိယတန်း", url: "grade-3" },
  { en: "Grade 4", my: "စတုတ္တတန်း", url: "grade-4" },
  { en: "Grade 5", my: "ပဉ္စမတန်း", url: "grade-5" },
  { en: "Grade 6", my: "ဆဋ္ဌမတန်း", url: "grade-6" },
  { en: "Grade 7", my: "သတ္တမတန်း", url: "grade-7" },
  { en: "Grade 8", my: "အဋ္ဌမတန်း", url: "grade-8" },
  { en: "Grade 9", my: "နဝမတန်း", url: "grade-9" },
  { en: "Grade 10", my: "ဒသမတန်း", url: "grade-10" },
  { en: "Grade 11", my: "ဧကာဒသမတန်း", url: "grade-11" },
  { en: "Grade 12", my: "ဒွါဒသမတန်း", url: "grade-12" },
];
export default function Courses() {
  return (
    <div className="flex flex-col max-w-full min-h-screen">
      <Navbar />
      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-5 my-5">
        {grades.map((grade) => (
          <div key={grade.en} className="flex justify-center w-full">
            <GradeCard course={grade} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
