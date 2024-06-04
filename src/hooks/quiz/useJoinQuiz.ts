"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const useJoinQuiz = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const joinQuiz = async (code: string) => {
    setLoading(true);
    setError(null);

    try {
      // Mengambil kuis berdasarkan kode
      const quizResponse = await fetch(
        `https://quizify-quiz-service.vercel.app/api/quiz/code/${code}`
      );
      if (!quizResponse.ok) {
        throw new Error("Quiz not found");
      }
      const quizData = await quizResponse.json();
      // Memeriksa apakah waktu saat ini berada dalam rentang startTime dan endTime
      const currentTime = new Date().toISOString();
      if (currentTime < quizData.startTime) {
        setError("Quiz belum dibuka.")
      } else if (currentTime > quizData.endTime) {
        setError("Quiz sudah ditutup.")
      } else {
        // Berpindah ke halaman quiz dengan quizId
        router.push(`/quiz/join/${quizData._id}`);
      }
    } catch (err: any) {
      console.error(err.message);
      setError("Failed to join quiz. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { joinQuiz, loading, error };
};

export default useJoinQuiz;
