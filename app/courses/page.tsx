import Footer from "@/components/layouts/footer";
import { GradeCard } from "@/components/layouts/subject-card";
import Navbar from "@/components/layouts/navbar";
import primary from "@/datas/primary/grades.json";
import middle from "@/datas/middle/grades.json";
import high from "@/datas/high/grades.json";

export default function Courses() {
  return (
    <div className="flex flex-col max-w-full min-h-screen">
      <Navbar />
      <h1 className="text-2xl text-center text-white font-bold my-5 py-3 w-8/12 mx-auto rounded-lg bg-green-800 dark:bg-green-600">
        မူလတန်းဆင့်
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-5 my-5">
        {primary.primary.map((grade) => (
          <div key={grade.en} className="flex justify-center w-full">
            <GradeCard course={grade} />
          </div>
        ))}
      </div>
      <h1 className="text-2xl text-center text-white font-bold my-5  py-3 w-8/12 mx-auto rounded-lg bg-green-800 dark:bg-green-600">
        အလယ်တန်းဆင့်
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-5 my-5">
        {middle.middle.map((grade) => (
          <div key={grade.en} className="flex justify-center w-full">
            <GradeCard course={grade} />
          </div>
        ))}
      </div>
      <h1 className="text-2xl text-center text-white font-bold my-5  py-3 w-8/12 mx-auto rounded-lg bg-green-800 dark:bg-green-600">
        အထက်တန်းဆင့်
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-5 my-5">
        {high.high.map((grade) => (
          <div key={grade.en} className="flex justify-center w-full">
            <GradeCard course={grade} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
