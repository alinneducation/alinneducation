import Link from "next/link";
import React from "react";

const SubjectCard = ({
  subject,
}: {
  subject: { url: string; name: string };
}) => {
  return (
    <Link
      href={`/learn/grade-12/${subject.url}`}
      className="flex w-32 h-32 bg-green-800 border rounded-lg justify-center items-center"
    >
      {subject.name}
    </Link>
  );
};

export default SubjectCard;
