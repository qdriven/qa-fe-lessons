import { Input } from "@/components/ui/input"
import SearchIcon from "@/components/block/search/SearchIcon";

export default function SearchInput() {
  return (
    <div className="flex items-center p-2 bg-white dark:bg-gray-800 rounded-lg shadow">
      <Input
        className="flex- text-gray-900 dark:text-white bg-transparent border-none focus:ring-0"
        placeholder="Search You Interest....."
        type="text"
      />
      <SearchIcon className="text-gray-500 dark:text-gray-400" />
    </div>
  )
}