import { useState } from "react";
import { SearchIcon } from "./icon";

export const SearchInput = () => {
  return (
    <>
      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex transform items-center border-0 pl-3 transition-all duration-700 ease-in-out">
          <SearchIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          id="search"
          className="block w-0 rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 duration-700 focus:border-blue-500 focus:ring-blue-500 group-hover:w-[400px] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search"
          required
        />
      </div>
    </>
  );
};
