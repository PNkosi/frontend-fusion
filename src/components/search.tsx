import { Input } from "./ui/input";

export default function Search() {
  return (
    <Input className="hidden md:inline-block border-slate-500 rounded-full" type="search" placeholder="Search for tools..." />
  )
}