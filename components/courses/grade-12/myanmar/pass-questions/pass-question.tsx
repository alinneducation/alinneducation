import {
  Header,
  JustifyHeader,
  QuestionItem,
  QuestionTitle,
  SelectAnswer,
} from "../../../questions";

type Question1ab = {
  "question-item-number": string;
  "question-item-text": string;
};
type Question1c = {
  "question-item-number": string;
  "question-item-text": string;
  options: string[];
};

type Question2a = { question: string };
type Question2 = {
  question1: Question2a[];
  question2: Question2a[];
  question3: string;
  question4: Question1ab;
};

type Question6 = {
  "question-item-number": string;
  "question-item-title": string;
  "question-item-text": string;
};
type Question7 = {
  "question-item-number": string;
  "question-item-text": string;
};

export default function PassQuestion({
  year,
  question1a,
  question1b,
  question1c,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
}: {
  year: string;
  question1a: Question1ab[];
  question1b: Question1ab[];
  question1c: Question1c[];
  question2: Question2;
  question3: string;
  question4: string;
  question5: string;
  question6: Question6[];
  question7: Question7[];
}) {
  return (
    <div>
      <Header>
        <p>{year}</p>
        <p>တက္ကသိုလ်ဝင်စာမေးပွဲ</p>
        <p>မြန်မာနိုင်ငံစာစစ်ဦးစီးဌာန</p>
      </Header>
      <JustifyHeader>
        <p>မြန်မာစာ</p>
        <p>ခွင့်ပြုချိန်(၃)နာရီ</p>
      </JustifyHeader>
      <QuestionTitle>
        <p>၁။ </p>
        <p> (က)</p>
        <p className="w-full">
          အောက်ပါတို့ကို မှားလျှင်(မှား)၊ မှန်လျှင်(မှန်)ဟု ဖြေဆိုပါ။
          <span className="float-end">(၁၀ မှတ်) </span>
        </p>
      </QuestionTitle>
      {question1a.map((data, index) => (
        <QuestionItem key={index}>
          <p>{data["question-item-number"]}</p>
          <p>{data["question-item-text"]}</p>
        </QuestionItem>
      ))}

      <QuestionTitle>
        <p>၁။ </p>
        <p className="w-full">
          (ခ) အောက်ပါတို့ကို ကွက်လပ်ဖြည့်ပါ။
          <span className="float-end">(၁၀ မှတ်) </span>
        </p>
      </QuestionTitle>
      {question1b.map((data, index) => (
        <QuestionItem key={index}>
          <p>{data["question-item-number"]}</p>
          <p>{data["question-item-text"]}</p>
        </QuestionItem>
      ))}

      <QuestionTitle>
        <p>၁။ </p>
        <p className="w-full">
          (ဂ) အောက်ပါတို့မှ အဖြေမှန်ကိုရွေးပါ။
          <span className="float-end">(၁၀ မှတ်) </span>
        </p>
      </QuestionTitle>
      {question1c.map((data, index) => (
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
        <p>၂။ </p>
        <p className="w-full">
          အောက်ပါတို့ကို ဖြေဆိုပါ။
          <span className="float-end">(၂၀ မှတ်) </span>
        </p>
      </QuestionTitle>
      <QuestionItem>
        <p>(က)</p>
        <p> အောက်ပါဝေါဟာရတို့အနက် ငါးခု၏ အဓိပ္ပာယ်ကို တိကျစွာဖော်ပြပါ။</p>
      </QuestionItem>
      <div className="flex pl-15 flex-wrap">
        {question2.question1.map((data, index) => {
          const punctuation =
            index === question2.question1.length - 1 ? "။" : "၊";
          return (
            <div className="text-sm md:text-lg pr-1" key={index}>
              {data.question}
              {punctuation}
            </div>
          );
        })}
      </div>
      <QuestionItem>
        <p>(ခ)</p>
        <p>
          အောက်ပါတို့အနက် ငါးခုကို ရွေးချယ်ပြီး မည်သည့်အလင်္ကာမြောက်ကြောင်း
          ဖော်ပြပါ။
        </p>
      </QuestionItem>
      <div className="flex pl-15 flex-wrap">
        {question2.question2.map((data, index) => {
          const punctuation =
            index === question2.question1.length - 1 ? "။" : "၊";
          return (
            <div className="text-sm md:text-lg pr-1" key={index}>
              {data.question}
              {punctuation}
            </div>
          );
        })}
      </div>

      <QuestionItem>
        <p>(ဂ)</p>
        <p>စကားစပ်နှင့်တကွ ရှင်းပြပါ။</p>
      </QuestionItem>

      <SelectAnswer>
        <p>{question2.question3}</p>
      </SelectAnswer>
      <QuestionItem>
        <p>{question2.question4["question-item-number"]}</p>
        <p>{question2.question4["question-item-text"]}</p>
      </QuestionItem>
      <QuestionTitle>
        <p>၃။</p>
        <p className="w-full">
          {question3}
          <span className="float-end">(၁၀ မှတ်) </span>
        </p>
      </QuestionTitle>
      <QuestionTitle>
        <p>၄။</p>
        <p className="w-full">
          {question4}
          <span className="float-end">(၁၀ မှတ်) </span>
        </p>
      </QuestionTitle>
      <QuestionTitle>
        <p>၅။</p>
        <p className="w-full">
          {question5}
          <span className="float-end">(၁၀ မှတ်) </span>
        </p>
      </QuestionTitle>
      <QuestionTitle>
        <p>၆။ နှစ်သက်ရာတစ်ခုကို စာစီကုံးပါ။ </p>
        <p> (၁၀ မှတ်)</p>
      </QuestionTitle>
      {question6.map((data, index) => (
        <div key={index}>
          <QuestionItem>
            <p>{data["question-item-number"]}</p> {data["question-item-title"]}
          </QuestionItem>
          <QuestionItem>
            <p>{data["question-item-text"]}</p>
          </QuestionItem>
        </div>
      ))}
      <QuestionTitle>
        <p>၇။</p>
        <p className="flex-1">
          အောက်ပါအဆိုတို့အနက် တစ်ခုကို ထောက်ခံ၍ဖြစ်စေ၊ ကန့်ကွက်၍ဖြစ်စေ
          ဆွေးနွေးပါ။
          <span className="float-end">(၁၀ မှတ်)</span>
        </p>
      </QuestionTitle>
      {question7.map((data, index) => (
        <div key={index}>
          <QuestionItem>
            <p>{data["question-item-number"]}</p>
            <p> {data["question-item-text"]}</p>
          </QuestionItem>
        </div>
      ))}
    </div>
  );
}
