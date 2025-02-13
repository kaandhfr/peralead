import React from "react";

export default function Search({className = "bg-third rounded-full h-10"}) {
  return (
    <form action="" className="relative">
      <button
        type="submit"
        className="absolute top-0 left-0 w-11 h-full flex items-center justify-center"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.48486 8.4798L11.7916 10.7861C12.0695 11.0637 12.0695 11.514 11.7916 11.7917C11.6529 11.9306 11.4707 12 11.2887 12C11.1067 12 10.9246 11.9306 10.7858 11.7917L8.47906 9.48539C7.56387 10.1843 6.4538 10.5677 5.28242 10.5678C3.8708 10.5678 2.54358 10.0182 1.54542 9.02005C-0.51514 6.9601 -0.51514 3.60792 1.54542 1.54761C2.54358 0.549669 3.8708 0 5.28242 0C6.69422 0 8.02127 0.549669 9.01943 1.54761C10.0178 2.54556 10.5675 3.87251 10.5675 5.28383C10.5674 6.45496 10.184 7.5648 9.48486 8.4798ZM2.39107 2.39263C0.858238 3.92546 0.858062 6.41937 2.39107 7.95202C3.13371 8.69448 4.12118 9.10345 5.17141 9.10345C6.22181 9.10345 7.20911 8.69448 7.95175 7.95202C8.69439 7.20955 9.10345 6.22249 9.10345 5.17233C9.10345 4.12234 8.69439 3.1351 7.95175 2.39263C7.20911 1.65034 6.22181 1.24138 5.17141 1.24138C4.12118 1.24138 3.13371 1.65034 2.39107 2.39263Z"
            fill="#CCCCCC"
          />
        </svg>
      </button>
      <input
        id="search-blog"
        type="text"
        name="search-blog"
        placeholder="Ara"
        className={`${className} w-full pl-11 pr-4 text-xs outline-none placeholder:text-fourth`}
      />
    </form>
  );
}
