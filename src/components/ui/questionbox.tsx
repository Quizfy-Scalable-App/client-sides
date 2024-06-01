"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react";
import { z } from "zod"

interface QuestionBoxProps {
  question: string;
  answers: any[];
  index: number;
  isCreate?: boolean;
  onAnswerChange?: (answer: string) => void | undefined;
}

export function QuestionBox({ question, answers, index, isCreate=false, onAnswerChange }: QuestionBoxProps) {
  const [answerChoice, setAnswerChoice] = useState(isCreate ? answers.find(c => c.isCorrect === true)._id : "");
  const handleChange = (value: string) => {
    setAnswerChoice(value);
    if (onAnswerChange) {
      onAnswerChange(value);
    }
  };
  return (
    <div className="flex flex-col px-[26px] py-[14px] border rounded-lg mb-[22px]">
      <h2 className="w-fit h-fit bg-white px-[6px] flex justify-center border rounded-sm mb-[17px]">
        {index + 1}
      </h2>
      <h2 className="mb-[14px]">
        {question}
      </h2>
      <h2 className="mb-[9px]">Answer choices :</h2>
      <RadioGroup
        value={answerChoice}
        onValueChange={handleChange}
      >
        {
          answers.map((answer, i) => (
            <div className="flex gap-4" key={i}>
              <RadioGroupItem key={i} value={answer._id} disabled={isCreate} />
              <Label>{answer.text}</Label>
            </div>
          ))
        }
      </RadioGroup>
    </div>
  );
}
