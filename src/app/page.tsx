"use client"
import Image from "next/image";
import Navbar from "./_components/Navbar";
import ActivityList from "./activity/_components/ActivityList";
import InputBox from "./_components/Inputbox";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";

export default function Home() {
  const { user } = useCurrentUser();
  console.log(user);
  return (
    <div>
      <InputBox />
      <div className="flex flex-col">
        <h2 className="font-medium text-2xl ml-56">Newest Activity</h2>
        <ActivityList />
      </div>
    </div>
  );
}
