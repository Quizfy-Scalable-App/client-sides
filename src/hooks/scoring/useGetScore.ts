"use client";
import { use, useEffect, useState } from "react";

export const useGetScore = (scoreId: string) => {
  const [score, setScore] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchScore = async () => {
      setLoading(true);
      console.log("tetsttt");
      console.log(scoreId);
      try {
        const response = await fetch(
          `http://localhost:8002/api/score/answer/${scoreId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch score");
        }
        const data = await response.json();
        setScore(data);
        setError(null);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchScore();
  }, [scoreId]);

  return { score, error, loading };
};
