"use client";
import React from "react";
import ActivityItem from "./ActivityItem";
import { useGetUserQuizActivity } from "@/hooks/scoring/useGetUserQuizActivity";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";

function ActivityList() {
  const { user } = useCurrentUser();
  const { userQuizActivity, error, loading } = useGetUserQuizActivity();
  if (localStorage.getItem("authToken") === null){
    return (
      <div className="flex justify-center items-center h-96">
        <h2 className="text-2xl">Please Log In to see the newest activity</h2>
      </div>
    );
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="flex flex-col justify-between gap-5 ml-56 my-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 ">
        {userQuizActivity?.map((item: any, i: number) => (
          <ActivityItem key={i} activity={item} />
        ))}
      </div>
    </div>
  );
}

export default ActivityList;
