import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Inputbox = () => {
  return (
    <div className="flex bg-opacity-50 justify-between gap-2 ml-56 my-10 shadow-md shadow-dark-gray w-full max-w-sm items-center space-x-2 border-[2px] bg-light-gray p-2 rounded-lg">
      <Input className="bg-opacity-5 bg-light-gray  border-[2px] border-light-gray" type="email" placeholder="Insert quiz code" />
      <Button className="bg-icha2 border-[1px] border-gray-400 px-10" type="submit">JOIN</Button>
    </div>
  );
};

export default Inputbox;
