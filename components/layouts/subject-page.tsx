import { SubjectCard } from "./course-card";
import Footer from "./footer";
import Navbar from "./navbar";

export default function SubjectPage({
  courses,
}: {
  courses: { en: string; my: string; url: string }[];
}) {
  return (
    <div className="flex flex-col max-w-full min-h-screen">
      <header className="block sticky top-0 light z-50">
        <Navbar />
      </header>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-5 my-5">
        {courses.map((item: any) => {
          return (
            <div key={item.en} className="flex justify-center w-full">
              <SubjectCard course={item} />
              {/* <BookCard /> */}
            </div>
          );
        })}
      </div>
      <footer className="w-full mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
