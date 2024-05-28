import Image from "next/image";
import Navbar from "./_components/Navbar";
import Inputbox from "./_components/Inputbox"
import ActivityList from "./_components/Activity/ActivityList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Inputbox/>

      <ActivityList />
    </div>
  );
}
