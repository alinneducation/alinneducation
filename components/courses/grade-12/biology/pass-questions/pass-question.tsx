import { Card } from "@/components/ui/card";
import {
  Header,
  JustifyHeader,
  QuestionItem,
  QuestionTitle,
  SubHeader,
} from "../../../questions";

type Question1 = {
  "question-item-number": string;
  "question-item-text": string;
};
type Question2 = {
  "question-item-number": string;
  "question-item-text": string;
};
type Question4 = {
  "question-item-number": string;
  "question-item-text": string;
};
type Question5 = {
  "question-item-number": string;
  "question-item-text": string;
};
export default function PassQuestion({
  year,
  question1,
  question2,
  question3,
  question4,
  question5,
}: {
  year: number;
  question1: Question1[];
  question2: Question2[];
  question3: Question1[];
  question4: Question4[];
  question5: Question5[];
}) {
  return (
    <Card className="px-3 line-clamp-none">
      <Header>
        <p>{year}</p>
        <p>MATRICULATION EXAMINATION</p>
        <p>DEPARTMENT OF MYANMAR EXAMINATIONS</p>
      </Header>
      <JustifyHeader>
        <p>BIOLOGY</p>
        <p>Time Allowed: (3) Hours</p>
      </JustifyHeader>
      <SubHeader>WRITE YOUR ANSWERS IN YOUR ANSWER BOOKLET.</SubHeader>
      <SubHeader>DO NOT COPY THE QUESTIONS.</SubHeader>
      <SubHeader>SECTION (A)</SubHeader>
      <QuestionTitle>
        <p>1. </p>
        <p className="w-full">
          State <b>TRUE</b> or <b>FALSE</b> to the following statements. Do not
          copy the statements.
        </p>
        <p className="w-fit text-nowrap">(10 marks)</p>
      </QuestionTitle>

      {question1.map((data, index) => (
        <div key={index}>
          <QuestionItem>
            <p className="w-6">{data["question-item-number"]}</p>
            <p>{data["question-item-text"]}</p>
          </QuestionItem>
        </div>
      ))}
      <QuestionTitle>
        <p>2. </p>
        <p className="w-full">
          Complete the following statements with appropriate words. Do not copy
          the statements.
        </p>
        <p className="w-fit text-nowrap">(10 marks)</p>
      </QuestionTitle>
      {question2.map((data, index) => (
        <div key={index}>
          <QuestionItem>
            <p className="w-6">{data["question-item-number"]}</p>
            <p>{data["question-item-text"]}</p>
          </QuestionItem>
        </div>
      ))}
      <QuestionTitle>
        <p>3. </p>
        <p className="w-full">
          Choose the correct answer for the following statements. Do not copy
          the statements
        </p>
        <p className="w-fit text-nowrap">(10 marks)</p>
      </QuestionTitle>
      {question3.map((data, index) => (
        <div key={index}>
          <QuestionItem>
            <p className="w-6">{data["question-item-number"]}</p>
            <p>{data["question-item-text"]}</p>
          </QuestionItem>
        </div>
      ))}
      <div className="py-2"></div>
      <SubHeader>SECTION (A)</SubHeader>
      <div className="py-2"></div>
      <QuestionTitle>
        <p>4.</p>
        <p className="w-full">
          Answer <b>ALL</b> questions.
        </p>
        <p className="float-end w-fit text-nowrap">(30 marks) </p>
      </QuestionTitle>
      {question4.map((data, index) => (
        <div key={index}>
          <QuestionItem>
            <p className="w-6">{data["question-item-number"]}</p>
            <p>{data["question-item-text"]}</p>
          </QuestionItem>
        </div>
      ))}
      <QuestionTitle>
        <p>5.</p>
        <p className="w-full">
          Answer any <b>FOUR</b> questions.
        </p>
        <p className="float-end w-fit text-nowrap">(40 marks) </p>
      </QuestionTitle>
      {question5.map((data, index) => (
        <div key={index}>
          <QuestionItem>
            <p className="w-6">{data["question-item-number"]}</p>
            <p>{data["question-item-text"]}</p>
          </QuestionItem>
        </div>
      ))}
      <div className="flex w-full py-3 justify-center font-bold text-lg">
        ******************************
      </div>
    </Card>
  );
}
