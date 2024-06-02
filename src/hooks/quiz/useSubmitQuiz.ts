// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import useScoringQuiz from "../scoring/useScoringQuiz";

// const useSubmitQuiz = () => {
//   const {
//     scoringQuiz,
//     loading: loadingScoring,
//     error: errorScoring,
//   } = useScoringQuiz();
//   const [loading, setLoading] = useState<boolean>(false);
//   const router = useRouter();
//   const [error, setError] = useState<string | null>(null);
//   const token = localStorage.getItem("authToken");

//   const submitQuiz = async (
//     quizId: string,
//     answers: { questionId: string; choiceId: string }[]
//   ) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch(
//         `https://quizify-quiz-service.vercel.app/api/quiz/${quizId}/answer`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({
//             quizId: quizId,
//             answers: answers,
//           }),
//         }
//       );

//       if (!res.ok) {
//         throw new Error("Failed to submit quiz");
//       }
//       const result = await res.json();
//       console.log(result);

//       router.push(`/activity/${result._id}`);
//     } catch (err: any) {
//       console.error("Error submitting quiz:", err);
//       setError("Failed to submit quiz. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { submitQuiz, loading, error };
// };

// export default useSubmitQuiz;



import { useRouter } from "next/navigation";
import { useState } from "react";

const useSubmitQuiz = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const token = localStorage.getItem("authToken");

  const submitQuiz = async (quizId: string, answers: { questionId: string; choiceId: string }[]) => {
    setLoading(true);
    setError(null);

    try {
      // Submit quiz answers
      const res = await fetch(
        `https://quizify-quiz-service.vercel.app/api/quiz/${quizId}/answer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            quizId: quizId,
            answers: answers,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to submit quiz");
      }
      const result = await res.json();
      console.log(result);

      // Call grading service
      const gradeRes = await fetch(`https://quizify-scoring-service.vercel.app/api/score/grade`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          answerId: result._id,
          quizId: quizId,
          userId: result.user, // Assuming result contains userId
        }),
      });

      if (!gradeRes.ok) {
        throw new Error("Failed to grade quiz");
      }
      const gradeResult = await gradeRes.json();
      console.log(gradeResult);

      // Redirect to activity page
      router.push(`/activity/${result._id}`);
    } catch (err: any) {
      console.error("Error submitting quiz:", err);
      setError("Failed to submit quiz. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { submitQuiz, loading, error };
};

export default useSubmitQuiz;

