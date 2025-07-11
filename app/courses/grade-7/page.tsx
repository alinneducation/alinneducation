import SubjectPage from "@/components/layouts/subject-page";
import { subjects } from "@/datas/middle/subjects.json";

export default function Page() {
  return <SubjectPage courses={subjects} />;
}
