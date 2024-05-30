import React from "react";
import Image from "next/image";
import { Activity } from "@/types/Activity";
import Link from "next/link";

interface ActivityProps {
  activity: Activity;
}

function ActivityItem({ activity }: ActivityProps) {
  return (
    <div
      className="flex flex-col h-[216px] w-[216px] border-[2px] bg-white rounded-lg pb-5 
        gap-1 hover:scale-105 hover:shadow-md cursor-pointer relative"
    >
      <div>
        <Link href="/Activity-review" className="">
          <Image
            className="w-"
            src="/folder1.svg"
            alt=""
            width={216}
            height={131}
          />
        </Link>
      </div>
      <div className="pt-2 pb-0.5 pl-5 flex flex-col justify-between gap-3 text-[16px]">
        <h2>{activity.name}</h2>
        <div className="bg-gray pl-4 mr-6 rounded-lg">
          <h2 className="text-[12px] font-light">Score : {activity.score}</h2>
        </div>
      </div>
    </div>
  );
}

export default ActivityItem;
