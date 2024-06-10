import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCurrentUser } from "../auth/useCurrentUser";

export const useAddQuestion = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const addQuestion = async (
    quizId: string,
    text: string,
    choices: { text: string; isCorrect: boolean }[]
  ) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("You are not logged in");
      }

      const response = await fetch(
        `http://localhost:8001/api/quiz/${quizId}/question`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ text, choices }),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add Question");
      }
      setError(null);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, addQuestion };
};
