"use client";
import { use, useEffect, useState } from "react";

export const useGetRank = (quizId: string) => {
  const [ranks, setRanks] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchRank = async () => {
      setLoading(true);
      console.log("tetsttt");
      console.log(quizId);
      try {
        const response = await fetch(
          `https://quizify-scoring-service.vercel.app/api/score/ranking/${quizId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch rank");
        }
        const data = await response.json();
        setRanks(data);
        setError(null);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRank();
  }, [quizId]);

  return { ranks, error, loading };
};
