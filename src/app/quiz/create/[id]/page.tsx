"use client";

import { PlusIcon } from 'lucide-react'
import React from 'react'
import CreateQuestionDialog from './_components/CreateQuestionDialog'
import { Dialog, DialogTrigger } from '@/components/ui/dialog';

export default function CreateQuizQuestions() {
    return (
        <div className='px-56 flex flex-col'>
            <div className='w-full pb-3 pt-8 border-b flex justify-between items-center border-black'>
                <h2 className='text-lg'>Quiz Name</h2>
                <Dialog>
                    <DialogTrigger>
                        <button
                            type="button"
                            className="inline-flex pl-4 pr-5 py-2 items-center space-x-2 text-[16px] text-sm text-white bg-black rounded-md"
                        >
                            <PlusIcon size={16} />
                            <p>Add question</p>
                        </button>
                    </DialogTrigger>
                    <CreateQuestionDialog />
                </Dialog>
            </div>
        </div>
    )
}
