import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import SubjectPage from "@/components/layouts/subject-page";
import Link from "next/link";

type GradeType = {
  en: string;
  my: string;
  url: string;
};
const gradesTypes: GradeType[] = [
  { en: "STEAM", my: "ဝိဇ္ဇာတွဲ", url: "grade-12/stams" },
  { en: "STEM 1", my: "ဇီဝတွဲ", url: "grade-12/steams-1" },
  { en: "STEM 2", my: "ဘောဂတွဲ", url: "grade-12/steams-2" },
];
export default function Page() {
  return (
    <div className="flex flex-col max-w-full min-h-screen">
      <header className="block sticky top-0 light z-50">
        <Navbar />
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-5 w-full">
        {gradesTypes.map((gradeType) => (
          <Link
            href={gradeType.url}
            key={gradeType.en}
            className="flex justify-center w-full border rounded-lg items-center  space-y-5 p-5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {gradeType.my}
          </Link>
        ))}
      </div>
      <footer className="w-full mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
