"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type Grade = {
  my: string;
  url: string;
};
export function GradeCard({ course }: { course: Grade }) {
  const pathName = usePathname();
  return (
    <Card className="flex flex-col w-full h-44 border rounded-lg items-center justify-center space-y-5">
      <CardTitle className="font-semibold text-lg ">{course.my}</CardTitle>
      <CardFooter>
        <Link href={`${pathName}/${course.url}`}>
          <Button className="cursor-pointer font-semibold">လေ့လာမည်</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export function SubjectCard({
  course,
}: {
  course: { my: string; url: string };
}) {
  const pathName = usePathname();
  return (
    <Card className="flex flex-col w-full h-36 border rounded-lg items-center justify-center space-y-5 ">
      <CardTitle className="font-semibold text-lg text-nowrap">
        {course.my}
      </CardTitle>
      <Link href={`${pathName}/${course.url}/intro`}>
        <Button className="cursor-pointer">Learn</Button>
      </Link>
    </Card>
  );
}

export default function BookCard() {
  return (
    // <div className="flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 p-8">
    <Card className="w-fit h- relative transform rotate-3 scale-100 hover:scale-105 hover:rotate-0 transition-transform duration-400 shadow-2xl">
      {/* Book spine effect */}
      <div className="absolute -left-0.5 top-1 w-2 h-full bg-white rounded-l-sm shadow-lg"></div>

      {/* Book cover */}
      <div className="relative flex flex-col rounded-r-lg">
        <CardContent className="flex flex-col items-center justify-center text-center text-sm text-black font-bold">
          <div className="text-nowrap text-xs md:text-sm">
            THE GOVERNMENT OF
          </div>
          <div className="text-nowrap text-xs md:text-sm">
            THE REPUBLIC OF THE UNION OF MYANMAR
          </div>
          <div className="md:text-base text-nowrap text-sm">
            MINISTRY OF EDUCATION
          </div>
        </CardContent>
      </div>
      <div className="relative h-full p-3 flex flex-col rounded-l-lg">
        <CardHeader className="pb-32 flex flex-col items-center h-full ">
          <CardDescription className="text-center text-black font-medium">
            TEXTBOOK
          </CardDescription>
          <CardTitle className="text-xl font-sans text-center font-bold text-green-800 leading-tight">
            ENGLISH
          </CardTitle>
          <CardDescription className="text-center text-black font-medium">
            Grade 8
          </CardDescription>
        </CardHeader>

        <CardFooter className="p-0 mt-auto rounded-r-lg">
          {/* Bottom ornamental border */}

          <div className="text-center w-full text-xs text-black font-medium tracking-wider">
            2023 - 2024
          </div>
        </CardFooter>
      </div>

      {/* Book pages effect */}
      <div className="absolute -right-1 top-1 w-full h-full bg-white rounded-r border border-gray-200 -z-10 shadow-md"></div>
      <div className="absolute -right-2 top-2 w-full h-full bg-gray-50 rounded-r border border-gray-100 -z-20 shadow-sm"></div>
    </Card>
    // </div>
  );
}
