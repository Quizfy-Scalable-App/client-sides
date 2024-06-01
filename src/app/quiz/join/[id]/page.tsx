"use client";

import React, { useState } from "react";
import { QuestionBox } from "@/components/ui/questionbox";
import { useGetQuizQuestions } from "@/hooks/quiz/useGetQuizQuestions";
import useSubmitQuiz from "@/hooks/quiz/useSubmitQuiz";

export default function JoinQuiz({ params }: { params: { id: string } }) {
  const { quiz, error, loading } = useGetQuizQuestions(params.id);
  const {
    submitQuiz,
    error: errorSubmit,
    loading: loadingSubmit,
  } = useSubmitQuiz();
  const [answers, setAnswers] = useState<
    { questionId: string; choiceId: string }[]
  >([]);
  if (!quiz) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  const handleAnswerChange = (questionId: string, choiceId: string) => {
    setAnswers((prevAnswers) => {
      const existingAnswerIndex = prevAnswers.findIndex(
        (answer) => answer.questionId === questionId
      );
      if (existingAnswerIndex !== -1) {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[existingAnswerIndex].choiceId = choiceId;
        return updatedAnswers;
      } else {
        return [...prevAnswers, { questionId, choiceId }];
      }
    });
  };
  const handleSubmit = () => {
    submitQuiz(quiz._id, answers);
    console.log("Submitting quiz");
  };
  return (
    <div className="px-56 flex flex-col">
      <div className="w-full pb-3 pt-8 border-b flex justify-between items-center border-black">
        <h2 className="text-lg">quiz.title</h2>
      </div>
      <div className="pt-6">
        {quiz.questions.map((soal: any, index: number) => (
          <QuestionBox
            key={index}
            question={soal.text}
            answers={soal.choices}
            index={index}
            onAnswerChange={(answer: string) =>
              handleAnswerChange(soal._id, answer)
            }
          />
        ))}
      </div>
      <div className="w-full pb-5 border-b flex justify-center items-center border-black">
        {errorSubmit && (
          <p className="text-red-500 text-sm mt-2">{errorSubmit}</p>
        )}
        <button
          type="button"
          className="inline-flex pl-4 pr-5 py-2 items-center space-x-2 text-[16px] text-sm text-white bg-black rounded-md"
          onClick={handleSubmit}
          disabled={loadingSubmit}
        >
          {loading ? <p>Loading...</p> : <p>Submit quiz</p>}
        </button>
      </div>
    </div>
  );
}
