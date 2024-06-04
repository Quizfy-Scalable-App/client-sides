"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useJoinQuiz from "@/hooks/quiz/useJoinQuiz";
import { useState } from "react";

const InputBox = () => {
  const { joinQuiz, loading, error } = useJoinQuiz();
  const [quizCode, setQuizCode] = useState<string>("" as string);
  const handleJoinQuiz = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    joinQuiz(quizCode);
    console.log("Joining quiz");
  };
  console.log(error);
  return (
    <div className=" ml-56 my-10">
      
      <form
        onSubmit={handleJoinQuiz}
        className="flex bg-opacity-50 justify-between gap-2 shadow-md shadow-dark-gray w-full max-w-sm items-center space-x-2 border-[2px] bg-light-gray p-2 rounded-lg"
      >
        <Input
          className="bg-opacity-5 bg-light-gray  border-[2px] border-light-gray"
          type="number"
          value={quizCode}
          onChange={(e) => setQuizCode(e.target.value)}
          placeholder="Insert quiz code"
        />
        <Button
          className="bg-icha2 border-[1px] border-gray-400 px-10"
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading" : "JOIN"}
        </Button>
      </form>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default InputBox;
