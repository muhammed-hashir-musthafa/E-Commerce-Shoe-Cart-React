import React, { useContext, useState } from "react";
import { CartContext } from "../User/Componet/Contexts";

export default function SearchBar() {
  const { searchFilter, searchFilterUser } = useContext(CartContext);

  const [searchValue, setSearchValue] = useState("");
  const searchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const searchHandle = () => {
    searchFilter(searchValue);
    searchFilterUser(searchValue);
    setTimeout(() => {
      setSearchValue("");
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchHandle();
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="relative items-center text-center w-full max-w-md">
          <label htmlFor="Search" className="sr-only ">
            {" "}
            Search{" "}
          </label>

          <input
            type="text"
            id="Search"
            placeholder="Search for..."
            value={searchValue}
            onKeyDown={handleKeyDown}
            onChange={searchChange}
            className="w-full rounded-md border-gray-200 py-1.5 pe-10 shadow-md sm:text-sm ps-2 sm:me-5 me-0  border"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button
              onClick={searchHandle}
              type="button"
              className="text-gray-600 hover:text-gray-700"
            >
              <span className="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
    </>
  );
}
