"use client";

import { PlusIcon } from "lucide-react";
import React from "react";
import CreateQuestionDialog from "./_components/CreateQuestionDialog";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { QuestionBox } from "@/components/ui/questionbox";
import { useGetQuizQuestions } from "@/hooks/quiz/useGetQuizQuestions";

const soal = [
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    answers: [
      {
        id: 1,
        name: "A. True",
      },
      {
        id: 2,
        name: "B. False",
      },
      {
        id: 3,
        name: "C. True",
      },
      {
        id: 4,
        name: "D. False",
      },
    ],
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    answers: [
      {
        id: 1,
        name: "A. True",
      },
      {
        id: 2,
        name: "B. False",
      },
      {
        id: 3,
        name: "C. True",
      },
      {
        id: 4,
        name: "D. False",
      },
    ],
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    answers: [
      {
        id: 1,
        name: "A. True",
      },
      {
        id: 2,
        name: "B. False",
      },
      {
        id: 3,
        name: "C. True",
      },
      {
        id: 4,
        name: "D. False",
      },
    ],
  },
];

export default function CreateQuizQuestions({
  params,
}: {
  params: { id: string };
}) {
  const { quiz, error, loading } = useGetQuizQuestions(params.id);
  console.log(quiz);
  if (!quiz) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="px-56 flex flex-col">
      <div className="w-full pb-3 pt-8 border-b flex justify-between items-center border-black">
        <h2 className="text-lg">{quiz.title}</h2>
        <Dialog>
          <DialogTrigger
            type="button"
            className="inline-flex pl-4 pr-5 py-2 items-center space-x-2 text-[16px] text-sm text-white bg-black rounded-md"
          >
            <PlusIcon size={16} />
            <p>Add question</p>
          </DialogTrigger>
          <CreateQuestionDialog />
        </Dialog>
      </div>
      <div className="py-6">
        {quiz.questions.map((soal: any, index: number) => (
          <QuestionBox
            key={index}
            question={soal.text}
            answers={soal.choices.map((choice: any) => choice.text)}
            isDisabled={false}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
