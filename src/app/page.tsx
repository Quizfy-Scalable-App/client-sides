import Image from "next/image";
import Navbar from "./_components/Navbar";
import Inputbox from "./_components/Inputbox";
import ActivityList from "./_components/Activity/ActivityList";

export default function Home() {
  return (
    <div>
      <Inputbox />
      <div className="flex flex-col">
        <h2 className="font-medium text-2xl ml-56">Newest Activity</h2>
        <ActivityList />
      </div>
    </div>
  );
}
