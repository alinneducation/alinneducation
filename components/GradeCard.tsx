import Link from "next/link";
import React from "react";

const GradeCard = ({
  grade,
}: {
  grade: { url: string; name: string; id: number };
}) => {
  return (
    <Link
      href={`./courses/${grade.url}`}
      className="flex w-32 h-32 bg-green-800 border rounded-lg justify-center items-center"
    >
      {grade.name}
    </Link>
  );
};

export default GradeCard;
