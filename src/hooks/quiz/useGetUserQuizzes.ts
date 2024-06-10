"use client";
import { use, useEffect, useState } from "react";
import { useCurrentUser } from "../auth/useCurrentUser";

export const useGetUserQuizzes = () => {
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetcUserQuizzes = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("authToken");
        const response = await fetch(
          `http://localhost:8001/api/quiz/user/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch quizzes");
        }
        const data = await response.json();
        setQuizzes(data);
        setError(null);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetcUserQuizzes();
  }, []);

  return { quizzes, error, loading };
};
