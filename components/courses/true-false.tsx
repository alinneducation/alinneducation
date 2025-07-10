"use client";
import TrueFalse from "@/datas/grade-12/myanmar/true-false.json";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function TrueFalseQuestion() {
  const [correctAnswer, setCorrectAnswer] = useState("");
  let [num, setNum] = useState(0);
  let [marks, setMarks] = useState(0);
  const isCorrect = correctAnswer && correctAnswer == TrueFalse[num - 1].answer;
  useEffect(() => {
    if (isCorrect) {
      setMarks(++marks);
    }
    console.log(isCorrect);
  }, [num]);
  if (num == TrueFalse.length) {
    setNum(0);
    alert(`သင်၏ စုစုပေါင်းရမှတ်မှာ ${marks}`);
  }
  return (
    <div>
      <h1>{marks}</h1>
      <div>{`${num}/${TrueFalse.length} `}</div>
      <div>{TrueFalse[num]["question-item-text"]}</div>
      <Button
        onClick={() => {
          setCorrectAnswer("true");
          setNum(++num);
        }}
      >
        မှန်
      </Button>
      <Button
        onClick={() => {
          setCorrectAnswer("false");
          setNum(++num);
        }}
      >
        မှား
      </Button>
      <div>
        {correctAnswer &&
          (correctAnswer == TrueFalse[num - 1].answer
            ? "သင့်၏အဖြေက မှန်ပါသည်။"
            : "သင့်၏အဖြေက မှားပါသည်။")}
      </div>
    </div>
  );
}
