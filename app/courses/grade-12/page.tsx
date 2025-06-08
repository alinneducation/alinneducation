import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import SubjectPage from "@/components/layouts/subject-page";

type GradeType = {
  en: string;
  my: string;
  url: string;
};
const gradesTypes: GradeType[] = [
  { en: "STEAM", my: "ဝိဇ္ဇာတွဲ", url: "stams" },
  { en: "STEM 1", my: "ဇီဝတွဲ", url: "steams-1" },
  { en: "STEM 2", my: "ဘောဂတွဲ", url: "steams-2" },
];
export default function Page() {
  return (
    <div className="flex flex-col max-w-full min-h-screen">
      <header className="block sticky top-0 light z-50">
        <Navbar />
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-5">
        {gradesTypes.map((gradeType) => (
          <SubjectPage courses={gradeType} />
        ))}
      </div>
      <footer className="w-full mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
