import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import SubjectList from "@/components/layouts/subject-list";
import { subjects } from "@/datas/primary/subjects.json";

export default function Page() {
  return (
    <div className="flex flex-col max-w-full min-h-screen">
      <header className="block sticky top-0 light z-50">
        <Navbar />
      </header>
      <SubjectList
        subjects={subjects}
        grade={{ en: "Grade 4", my: "စတုတ္ထတန်း" }}
        type=""
      />
      ;
      <footer className="w-full mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
