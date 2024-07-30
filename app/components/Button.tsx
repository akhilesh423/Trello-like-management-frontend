


import React from "react";

export default function Button() {
  return (
    <div className="bg-custom-gradient px-2 py-2 rounded-lg h-12 mt-5 flex items-center justify-around">
      <button className="text-white text-xl gap-3.5">Create New Task</button>
      <span className="bg-white rounded-full h-6 w-6 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 text-custom-gradient"
        >
          <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
        </svg>
      </span>
    </div>
  );
}
