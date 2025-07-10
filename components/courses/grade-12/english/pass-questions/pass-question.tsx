import {
  DialogueBox,
  Header,
  JustifyHeader,
  Paragraph,
  QuestionItem,
  QuestionTitle,
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
  options: string[];
};
type Question4a = {
  "question-item-number": string;
  "question-item-text": string[];
};
type Question4b = {
  "question-item-number": string;
  "question-item-text": string;
};
type Question5 = {
  passage: string;
  A: Question1[];
  B: Question1[];
};
type Question = {
  "question-item-text": string[];
};
type Question7a = {
  expressions: string[];
  questions: Question[];
};
type Question7b = {
  expressions: string[];
  questions: Question4a[];
};
export default function PassQuestion({
  year,
  question1,
  question2,
  question3,
  question4a,
  question4b,
  question5,
  question6,
  question7a,
  question7b,
}: {
  year: number;
  question1: Question1[];
  question2: Question2[];
  question3: Question1[];
  question4a: Question4a[];
  question4b: Question4b[];
  question5: Question5;
  question6: Question5;
  question7a: Question7a;
  question7b: Question7b;
}) {
  return (
    <div>
      <Header>
        <p>{year}</p>
        <p>MATRICULATION EXAMINATION</p>
        <p>DEPARTMENT OF MYANMAR EXAMINATIONS</p>
      </Header>
      <JustifyHeader>
        <p>ENGLISH</p>
        <p>Time Allowed: (3) Hours</p>
      </JustifyHeader>
      <SubHeader>WRITE YOUR ANSWERS IN THE ANSWER BOOKLET.</SubHeader>
      <SubHeader>ANSWER ALL QUESTIONS.</SubHeader>
      <QuestionTitle>
        <p>I. </p>
        <p className="w-full">
          Complete the sentences with the appropriate words. The initial letters
          are given.<span className="float-end">(10 marks) </span>
        </p>
      </QuestionTitle>

      {question1.map((data, index) => (
        <div key={index}>
          <QuestionItem>
            <p>{data["question-item-number"]}</p>
            <p>{data["question-item-text"]}</p>
          </QuestionItem>
        </div>
      ))}
      <QuestionTitle>
        <p>II. </p>
        <p className="w-full">
          Choose the appropriate words or phrases to complete the sentences.
          <span className="float-end">(10 marks) </span>
        </p>
      </QuestionTitle>
      {question2.map((data, index) => (
        <div key={index}>
          <QuestionItem>
            <p>{data["question-item-number"]}</p>
            <p>{data["question-item-text"]}</p>
          </QuestionItem>
          <SelectAnswer>
            {data.options.map((option, index) => (
              <p key={index}>{option}</p>
            ))}
          </SelectAnswer>
        </div>
      ))}
      <QuestionTitle>
        <p>III. </p>
        <p className="w-full">
          Rewrite the sentences according to the instructions given in brackets.
          <span className="float-end">(10 marks) </span>
        </p>
      </QuestionTitle>
      {question3.map((data, index) => (
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
        <p>IV.</p>
        <p>(A)</p>
        <p className="w-full">
          Write the appropriate words or groups of words to complete the line of
          verce.<span className="float-end">(5 marks) </span>
        </p>
      </QuestionTitle>
      {question4a.map((data, index) => (
        <div key={index}>
          <QuestionItem>
            <p>{data["question-item-number"]}</p>
            <div>
              <p>{data["question-item-text"][0]}</p>
              <p>{data["question-item-text"][1]}</p>
            </div>
          </QuestionItem>
        </div>
      ))}
      <QuestionTitle>
        <p>IV.</p>
        <p>(B)</p>
        <p className="w-full">
          Answer the questions in complete sentences.
          <span className="float-end">(5 marks) </span>
        </p>
      </QuestionTitle>
      {question4b.map((data, index) => (
        <div key={index}>
          <QuestionItem>
            <p>{data["question-item-number"]}</p>

            <div
              dangerouslySetInnerHTML={{ __html: data["question-item-text"] }}
            ></div>
          </QuestionItem>
        </div>
      ))}
      <QuestionTitle>
        <p>V.</p>
        <p className="w-full">Read the passage.</p>
      </QuestionTitle>
      <Paragraph>
        <div dangerouslySetInnerHTML={{ __html: question5.passage }}></div>
      </Paragraph>
      <QuestionTitle>
        <p>(A)</p>
        <p className="w-full">
          Write the correct word or words to complete each sentence.
          <span className="float-end">(5 marks) </span>
        </p>
      </QuestionTitle>
      {question5.A.map((data, index) => (
        <div key={index}>
          <QuestionItem>
            <p>{data["question-item-number"]}</p>

            <div
              dangerouslySetInnerHTML={{ __html: data["question-item-text"] }}
            ></div>
          </QuestionItem>
        </div>
      ))}
      <QuestionTitle>
        <p>(B)</p>
        <p className="w-full">
          Answer each question in one sentence.
          <span className="float-end">(5 marks) </span>
        </p>
      </QuestionTitle>
      {question5.B.map((data, index) => (
        <div key={index}>
          <QuestionItem>
            <p>{data["question-item-number"]}</p>

            <div
              dangerouslySetInnerHTML={{ __html: data["question-item-text"] }}
            ></div>
          </QuestionItem>
        </div>
      ))}
      <QuestionTitle>
        <p>VI.</p>
        <p className="w-full">Read the passage.</p>
      </QuestionTitle>
      <Paragraph>
        <div dangerouslySetInnerHTML={{ __html: question6.passage }}></div>
      </Paragraph>
      <QuestionTitle>
        <p>(A)</p>
        <p className="w-full">
          Find the bold-faced words in the passage that are similar in meaning
          to the following. There is an extra.
          <span className="float-end">(5 marks) </span>
        </p>
      </QuestionTitle>
      {question6.A.map((data, index) => (
        <div key={index}>
          <QuestionItem>
            <p>{data["question-item-number"]}</p>

            <div
              dangerouslySetInnerHTML={{ __html: data["question-item-text"] }}
            ></div>
          </QuestionItem>
        </div>
      ))}
      <QuestionTitle>
        <p>(B)</p>
        <p className="w-full">
          Answer the following questions. Give complete answers.
          <span className="float-end">(5 marks) </span>
        </p>
      </QuestionTitle>
      {question6.B.map((data, index) => (
        <div key={index}>
          <QuestionItem>
            <p>{data["question-item-number"]}</p>

            <div
              dangerouslySetInnerHTML={{ __html: data["question-item-text"] }}
            ></div>
          </QuestionItem>
        </div>
      ))}
      <QuestionTitle>
        <p>VII.</p>
        <p>(A)</p>
        <p className="w-full">
          Complete the dialogue with the expressions given in the box. There is
          an extra.<span className="float-end">(5 marks) </span>
        </p>
      </QuestionTitle>
      <DialogueBox>
        {question7a.expressions.map((data, index) => (
          <p className="min-w-1/4" key={index}>
            {data}
          </p>
        ))}
      </DialogueBox>
      {question7a.questions.map((data, index) => (
        <QuestionItem key={index}>
          <p className="min-w-1/6">{data["question-item-text"][0]}</p>
          <p> :</p>
          <p>{data["question-item-text"][1]}</p>
        </QuestionItem>
      ))}
      <QuestionTitle>
        <p>VII.</p>
        <p>(B)</p>
        <p className="w-full">
          Complete the exchanges, using the expressions given in the box. There
          is an extra.<span className="float-end">(5 marks) </span>
        </p>
      </QuestionTitle>
      <DialogueBox>
        {question7b.expressions.map((data, index) => (
          <p className="min-w-1/4" key={index}>
            {data}
          </p>
        ))}
      </DialogueBox>
      {question7b.questions.map((data, index) => (
        <QuestionItem key={index}>
          <p className="w-5 md:w-7">{data["question-item-number"]}</p>
          <div>
            <p>
              <span className="font-semibold">A: </span>
              {data["question-item-text"][0]}
            </p>
            <p>
              <span className="font-semibold">B: </span>
              {data["question-item-text"][1]}
            </p>
          </div>
        </QuestionItem>
      ))}
    </div>
  );
}
