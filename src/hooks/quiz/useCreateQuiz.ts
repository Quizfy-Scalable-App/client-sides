import { useRouter } from "next/navigation";
import { useState } from "react";

export const useCreateQuiz = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const createQuiz = async (title: string, startTime:string, endTime:string) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("You are not logged in");
      }

      const response = await fetch(
        "https://quizify-quiz-service.vercel.app/api/quiz/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ title, startTime, endTime }),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create quiz");
      }
      const quiz = await response.json();
      console.log(quiz);
      
      setError(null);
      router.push(`/quiz/create/${quiz._id}`);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { error, loading, createQuiz };
};
