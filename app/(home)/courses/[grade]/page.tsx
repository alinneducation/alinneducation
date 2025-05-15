import Link from "next/link";
import React from "react";
import { KG, PRIMARY, MIDDLE, high, STEM1, STEM2 } from "data/subjects.json";
import { Metadata } from "next";
import SubjectCard from "@/components/SubjectCard";

type Props = {
  params: Promise<{ grade: String }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { grade } = await params;
  const gradeName = grade.replace("-", " ").toUpperCase();
  return {
    title: `${gradeName}`,
  };
};

const Subject = async ({ params }: Props) => {
  const { grade } = await params;

  return (
    <div className="grid w-full grid-cols-3 py-5 gap-5  mx-atuo items-center bg-amber-900">
      {high.map((subject) => (
        <div key={subject.url} className="flex items-center justify-center">
          <SubjectCard subject={subject} />
        </div>
      ))}
    </div>
  );
};

export default Subject;
