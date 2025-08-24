import { Card } from "@/components/ui/card";
import {
  Header,
  JustifyHeader,
  QuestionItem,
  QuestionTitle,
  Section,
  SelectAnswer,
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
type Question3 = {
  "question-item-number": string;
  "question-item-text": string;
  options: string[];
};

export default function PassQuestion({
  year,
  question1,
  question2,
  question3,
}: {
  year: string;
  question1: Question1[];
  question2: Question2[];
  question3: Question3[];
}) {
  return (
    <Card className="px-3 line-clamp-none">
      <Header>
        <p>{year}</p>
        <p>MATRICULATION EXAMINATION</p>
        <p>DEPARTMENT OF MYANMAR EXAMINATIONS</p>
      </Header>
      <JustifyHeader>
        <p>PHYSICS</p>
        <p>Time Allowed: (3) Hours</p>
      </JustifyHeader>
      <SubHeader>WRITE YOUR ANSWERS IN THE ANSWER BOOKLET</SubHeader>
      <SubHeader>
        The symbols in this paper have their usual significance
      </SubHeader>
      <Section>
        <p>SECTION (A)</p>
        <p>(Answer ALL questions)</p>
      </Section>
      <QuestionTitle>
        <p>1. </p>
        <p className="w-full">
          Write TRUE or FALSE for each of the following statements.
          <span className="float-end">(10 marks) </span>
        </p>
      </QuestionTitle>
      {question1.map((data, index) => (
        <div key={index}>
          <QuestionItem>
            <p>{data["question-item-number"]}</p>
            <p
              dangerouslySetInnerHTML={{ __html: data["question-item-text"] }}
            ></p>
          </QuestionItem>
        </div>
      ))}
      <QuestionTitle>
        <p>2. </p>
        <p className="w-full">
          Fill in the blanks with the correct word(s), notation(s), term(s),
          unit(s), etc., as necessary.
          <span className="float-end">(10 marks) </span>
        </p>
      </QuestionTitle>
      {question2.map((data, index) => (
        <div key={index}>
          <QuestionItem>
            <p>{data["question-item-number"]}</p>
            <p
              dangerouslySetInnerHTML={{ __html: data["question-item-text"] }}
            ></p>
          </QuestionItem>
        </div>
      ))}
      <QuestionTitle>
        <p>3. </p>
        <p className="w-full">
          Choose the best answer for each question given in the following.
          <span className="float-end">(10 marks) </span>
        </p>
      </QuestionTitle>
      {question3.map((data, index) => {
        return (
          <div key={index}>
            <QuestionItem>
              <p>{data["question-item-number"]}</p>
              <p
                dangerouslySetInnerHTML={{
                  __html: data["question-item-text"],
                }}
              ></p>
            </QuestionItem>
            <SelectAnswer>
              {data.options.map((option, index) => (
                <p
                  dangerouslySetInnerHTML={{
                    __html: option,
                  }}
                  key={index}
                ></p>
              ))}
            </SelectAnswer>
          </div>
        );
      })}
    </Card>
  );
}
