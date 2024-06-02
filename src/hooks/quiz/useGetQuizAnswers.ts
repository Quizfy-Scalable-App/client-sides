"use client";
import { use, useEffect, useState } from "react";

export const useGetQuizAnswers = (answerId: string) => {
  const [answers, setAnswers] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchAnswers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://quizify-quiz-service.vercel.app/api/quiz/answer/${answerId}`,
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
        setAnswers(data);
        setError(null);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnswers();
  }, [answerId]);

  return { answers, error, loading };
};
