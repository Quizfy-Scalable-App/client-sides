"use client";

import { Checkbox } from "@/components/ui/checkbox";

interface QuestionBoxProps {
    isDisabled: boolean;
    question: string;
    answers: any[];
    index: number;
    }
export function QuestionBox({isDisabled, question, answers, index}: QuestionBoxProps) {
  return (
    <div className="flex flex-col px-[26px] py-[14px] border rounded-lg mb-[22px]">
      <h2 className="w-fit h-fit bg-white px-[6px] flex justify-center border rounded-sm mb-[17px]">
        {index + 1}
      </h2>
      <h2 className="mb-[14px]">
        {question}
      </h2>
      <h2 className="mb-[9px]">Answer choices :</h2>

      <div className="flex flex-col justify-between gap-2">
        {answers.map((answer, i) => (
          <div className="flex items-center space-x-2">
            {!isDisabled ? (
            <Checkbox key={i} />
            ) : (
            <Checkbox key={i} disabled />
            )}
            <label className=" text-[16px]">{answer.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
