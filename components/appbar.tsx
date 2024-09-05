import { FolderInput } from "lucide-react";
import { ModeToggle } from "./mode-toggler";
import Link from "next/link";

export function Appbar() {
  return (
    <div className=" flex justify-between items-center fixed z-30 w-screen bg-black h-12 text-end p-2 bg-opacity-80 shadow-md">
      <Link href={"/"}>
        <div className="flex  space-x-2 ml-4 text-orange-600">
          <FolderInput />
          <p>FIZER</p>
        </div>
      </Link>
      <ModeToggle />
    </div>
  );
}
