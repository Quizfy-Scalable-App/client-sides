"use client";

import { PlusIcon } from 'lucide-react'
import React from 'react'
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { QuestionBox } from '@/components/ui/questionbox';

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

export default function JoinQuiz() {
    return (
        <div className='px-56 flex flex-col'>
            <div className='w-full pb-3 pt-8 border-b flex justify-between items-center border-black'>
                <h2 className='text-lg'>Quiz Name</h2>
            </div>
            <div className="pt-6">
                {soal.map((soal, i) => (
                    <QuestionBox
                        key={i}
                        question={soal.question}
                        answers={soal.answers}
                        isDisabled={false}
                        index={i}
                    />
                ))}
            </div>
            <div className='w-full pb-5 border-b flex justify-center items-center border-black'>
                <button type="button"
                    className="inline-flex pl-4 pr-5 py-2 items-center space-x-2 text-[16px] text-sm text-white bg-black rounded-md">
                    <p>Submit quiz</p>
                </button>
            </div>
        </div>
    )
}