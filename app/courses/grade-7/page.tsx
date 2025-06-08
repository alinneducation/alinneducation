import SubjectPage from "@/components/layouts/subject-page";

type Subject = {
  en: string;
  my: string;
  url: string;
};
const subjects: Subject[] = [
  { en: "Myanmar", my: "မြန်မာစာ", url: "myanmar" },
  { en: "English", my: "အင်္ဂလိပ်စာ", url: "english" },
  { en: "Mathematics", my: "သင်္ချာ", url: "mathematics" },
  { en: "Geography", my: "ဓာတုဗေဒ", url: "geography" },
  { en: "History", my: "ရူပဗေဒ", url: "history" },
  { en: "Science", my: "ဇီဝဗေဒ", url: "science" },
];
export default function Page() {
  return <SubjectPage courses={subjects} />;
}
