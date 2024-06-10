"use client";
import { use, useEffect, useState } from "react";

export const useGetQuizQuestions = (quizId: string) => {
  const [quiz, setQuiz] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:8001/api/quiz/quiz-questions/${quizId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch quiz");
        }
        const data = await response.json();
        setQuiz(data);
        setError(null);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [quizId]);

  return { quiz, error, loading };
};
