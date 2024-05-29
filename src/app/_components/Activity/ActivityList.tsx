import React from "react";
import ActivityItem from './ActivityItem'

function ActivityList() {
  const activitylist = [
    {
      id: 1,
      name: "Quiz 1",
      score: 90
    },
    {
      id: 2,
      name: "Quiz 2",
      score: 90
    },
    {
      id: 3,
      name: "Quiz 3",
      score: 90
    },
    {
      id: 4,
      name: "Quiz 4",
      score: 90
    },
  ];
  return (
    <div className="flex flex-col justify-between gap-5 ml-56 my-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 ">
        {activitylist.map((item, i)=> (
            <ActivityItem activity={item}/>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-3 gap-2 ">
        {activitylist.map((item, i)=> (
            <ActivityItem activity={item}/>
        ))}
      </div>
    </div>
  );
}

export default ActivityList;
