import React, { useState } from "react";

function Header() {
  const [darkTheme, setDarkTheme] = useState(false);

  function handleThemeToggle() {
    if (!darkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setDarkTheme((prev) => !prev);
  }

  return (
    <header className="fixed z-50 flex justify-between w-full  md:px-16 px-8 py-2 shadow-lg bg-white dark:bg-[#2b3945]">
      <h1 className="font-medium dark:text-white">Where in the world?</h1>
      <button
        className="flex items-center gap-1 text-xs dark:text-white font-medium"
        onClick={handleThemeToggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 fill-white dark:stroke-white stroke-black"
          viewBox="0 0 512 512"
        >
          <path
            d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </svg>
        Dark Mode
      </button>
    </header>
  );
}

export default Header;
