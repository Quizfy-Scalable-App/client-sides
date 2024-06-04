import React from "react";
import Image from "next/image";
// import { Activity } from "@/types/Activity";
import Link from "next/link";

function ActivityItem({ activity }: any) {
  return (
    <div
      className="flex flex-col h-[216px] w-[216px] border-[2px] bg-white rounded-lg pb-5 
        gap-1 hover:scale-105 hover:shadow-md cursor-pointer relative"
    >
      <div>
        <Link href={`activity/${activity.answerId}`}className="">
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
        <h2>{activity.quiz}</h2>
        <div
          className="bg-gray pl-4 mr-6 rounded-lg"
          style={
            activity.score > 70
              ? { backgroundColor: "#ABE2B0" }
              : activity.score > 40
              ? { backgroundColor: "#F3CF73" }
              : { backgroundColor: "#EE1D52", color: "white"}
          }
        >
          <h2 className="text-[12px] font-light">
            Score : {activity.score | 0}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ActivityItem;
