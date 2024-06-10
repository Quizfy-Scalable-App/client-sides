"use client";
import { use, useEffect, useState } from "react";

export const useGetUserQuizActivity = () => {
  const [userQuizActivity, setuserQuizActivity] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserQuizActivity = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("authToken");
        const response = await fetch(
          `http://localhost:8002/api/score/user`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch User Activity");
        }
        const data = await response.json();
        setuserQuizActivity(data);
        setError(null);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserQuizActivity();
  }, []);

  return { userQuizActivity, error, loading };
};
