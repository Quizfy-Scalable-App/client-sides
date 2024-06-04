"use client";
import { QuestionBox } from "@/components/ui/questionbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { useGetQuizAnswers } from "@/hooks/quiz/useGetQuizAnswers";
import { useGetQuizQuestions } from "@/hooks/quiz/useGetQuizQuestions";
import { useGetRank } from "@/hooks/scoring/useGetQuizRank";
import { useGetScore } from "@/hooks/scoring/useGetScore";

export default function ActivityReview({ params }: { params: { id: string } }) {
  const { answers, error, loading } = useGetQuizAnswers(params.id);
  const {
    quiz,
    error: errorQuiz,
    loading: loadingQuiz,
  } = useGetQuizQuestions(answers?.quizId);
  const {
    score,
    error: errorScore,
    loading: loadingScore,
  } = useGetScore(params.id);
  const {ranks, error: errorRank, loading: loadingRank} = useGetRank(answers?.quizId);
  const rankUser = ranks?.find((rank:any) => rank.answerId === params.id);
  // count how much true and false
  return (
    <div className="w-full flex flex-col items-center px-56">
      <div className="w-full flex flex-col justify-center items-center mt-10 ">
        <h2 className="w-full text-2xl font-medium mb-4">Rank</h2>
        <div className="w-full border border-deep-gray py-8 rounded-lg">
          <Table className="h-8">
            <TableHeader className="w-full">
              <TableRow className="bg-icha2">
                <TableHead className="text-left font-normal text-white">
                  Nama
                </TableHead>
                <TableHead className="text-center font-normal text-white">
                  Score
                </TableHead>
                <TableHead className="text-center font-normal text-white">
                  Rank
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ranks?.map((rank:any, i:number) => (
                <TableRow key={i} className={rank.answerId ==params.id ? "bg-icha" : ""}>
                  <TableCell className="font-medium text-left">
                    {rank.name}
                  </TableCell>
                  <TableCell className="text-center">{rank.score |0 }</TableCell>
                  <TableCell className="text-center">{i+1}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            {/* <TableFooter>
              <TableRow className="bg-icha">
                <TableCell className="font-medium text-left">
                {rankUser?.name || 'N/A'}
                </TableCell>
                <TableCell className="text-center">{rankUser?.score || 'N/A'}</TableCell>
                <TableCell className="text-center">{ranks?.findIndex((rank:any) => rank.answerId === params.id) + 1 || 'N/A'}</TableCell>
              </TableRow>
            </TableFooter> */}
          </Table>
        </div>
        <div className="flex w-full justify-between m-10">
          <h2 className="font-medium text-2xl">
            {quiz?.title} ({score?.correctAnswers} True, {score?.wrongAnswers}{" "}
            False)
          </h2>
          <h2 className="text-right">Score {score?.score | 0}</h2>
        </div>
      </div>
      <div className="mb-10 w-full">
        {quiz?.questions?.map((soal: any, i: number) => (
          <QuestionBox
            key={i}
            question={soal.text}
            answers={soal.choices}
            index={i}
            userAnswer={answers?.answers[i].choiceId}
          />
        ))}
      </div>
    </div>
  );
}
