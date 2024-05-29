"use client";

import { Checkbox } from "@/components/ui/checkbox";

const items = [
  {
    id: 1,
    name: "Option 1",
  },
  {
    id: 2,
    name: "Option 2",
  },
  {
    id: 3,
    name: "Option 3",
  },
  {
    id: 4,
    name: "Option 4",
  },
];

export function QuestionBox() {
  return (
    <div className="flex flex-col px-[26px] py-[14px] border rounded-lg">
      <h2 className="w-fit h-fit bg-white px-[6px] flex justify-center border rounded-sm mb-[17px]">
        1
      </h2>
      <h2 className="mb-[14px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. 
      </h2>
      <h2 className="mb-[9px]">Answer choices :</h2>

      <div className="flex flex-col justify-between gap-2">
        {items.map((item) => (
          <div className="flex items-center space-x-2">
            <Checkbox key={item.id} />
            <label className=" text-[16px]">{item.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
