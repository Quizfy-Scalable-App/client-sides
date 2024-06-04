import { QuestionBox } from "@/components/ui/questionbox";
import Navbar from "../_components/Navbar";
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

const rank = [
  {
    nama: "Icha",
    score: 100,
    Rank: 1,
  },
  {
    nama: "Aji",
    score: 99,
    Rank: 2,
  },
  {
    nama: "Nico",
    score: 100,
    Rank: 3,
  },
  {
    nama: "Reta",
    score: 97,
    Rank: 4,
  },
];

const soal = [
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    answers: [
      {
        id: 1,
        name: "A. True",
      },
      {
        id: 2,
        name: "B. False",
      },
      {
        id: 3,
        name: "C. True",
      },
      {
        id: 4,
        name: "D. False",
      },
    ],
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    answers: [
      {
        id: 1,
        name: "A. True",
      },
      {
        id: 2,
        name: "B. False",
      },
      {
        id: 3,
        name: "C. True",
      },
      {
        id: 4,
        name: "D. False",
      },
    ],
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    answers: [
      {
        id: 1,
        name: "A. True",
      },
      {
        id: 2,
        name: "B. False",
      },
      {
        id: 3,
        name: "C. True",
      },
      {
        id: 4,
        name: "D. False",
      },
    ],
  },
];

const rankuser = rank.pop();

export default function ActivityReview() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-col justify-center items-center mt-10 ">
        <h2 className="w-[886px] text-2xl font-medium mb-4">Rank</h2>
        <div className="border border-deep-gray py-8 rounded-lg">
          <Table className="w-[886px] h-8">
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
              {rank.map((rank) => (
                <TableRow key={rank.nama}>
                  <TableCell className="font-medium text-left">
                    {rank.nama}
                  </TableCell>
                  <TableCell className="text-center">{rank.score}</TableCell>
                  <TableCell className="text-center">{rank.Rank}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow className="bg-icha">
                <TableCell className="font-medium text-left">
                  {rankuser?.nama}
                </TableCell>
                <TableCell className="text-center">{rankuser?.score}</TableCell>
                <TableCell className="text-center">{rankuser?.Rank}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
        <div className="w-[886px] flex justify-between m-10">
          <h2 className="font-medium text-2xl">Quiz Name (X True, Y False)</h2>
          <h2 className="text-right">Score</h2>
        </div>
      </div>
      <div className="w-[886px] flex mb-10">
        <div className="">
          {soal.map((soal, i) => (
            <QuestionBox
              key={i}
              question={soal.question}
              answers={soal.answers}
              isDisabled={true}
              index={i}

            />
          ))}
        </div>
      </div>
    </div>
  );
}
