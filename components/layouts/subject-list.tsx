import { SubjectCard } from "./subject-card";
type Item = {
  my: string;
  url: string;
};
export default function SubjectList({
  subjects,
  grade,
  type,
}: {
  subjects: { my: string; url: string }[];
  grade: { en: string; my: string };
  type: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center text-xl md:text-3xl font-bold border rounded-lg items-center md:w-8/12 m-5 p-5 text-white  bg-green-800 dark:bg-green-600">
        {grade.my + type + " "}
        ဘာသာရပ်များ
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-5 my-5 px-5">
        {subjects.map((item: Item) => {
          return (
            <div key={item.url} className="flex justify-center w-full">
              <SubjectCard course={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
