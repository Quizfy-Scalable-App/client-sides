"use client";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import ActivityList from "./_components/ActivityList";

export default function Activity() {
  return (
    <div className="flex flex-col">
      <h2 className="font-medium text-2xl ml-56 mt-10">Activity</h2>
      <ActivityList />
    </div>
  );
}
